(function () {
  "use strict";

  var data = window.KEYDATA;
  var state = { app: "ghostty", query: "", source: "", category: "" };

  var $ = function (id) { return document.getElementById(id); };
  var grid = $("grid");
  var search = $("search");
  var category = $("category");
  var resultInfo = $("resultInfo");
  var empty = $("empty");
  var toast = $("toast");

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function normalize(s) {
    return String(s).toLowerCase().replace(/[\s\u3000]+/g, "");
  }

  function currentList() { return data[state.app]; }

  function initMeta() {
    var g = data.meta.ghostty, n = data.meta.nvim;
    $("versionMeta").innerHTML =
      '<span class="version-pill">Ghostty <b>' + esc(g.version) + "</b></span>" +
      '<span class="version-pill">Neovim <b>' + esc(n.version) + "</b></span>";
    $("count-ghostty").textContent = data.ghostty.length;
    $("count-nvim").textContent = data.nvim.length;
    updateConfigNote();
  }

  function updateConfigNote() {
    var m = data.meta[state.app];
    $("configNote").innerHTML =
      "配置路径：<code>" + esc(m.config) + "</code> · " + esc(m.note);
  }

  function populateCategories() {
    var seen = {};
    currentList().forEach(function (e) { seen[e.category] = true; });
    var cats = Object.keys(seen).sort();
    category.innerHTML = '<option value="">全部分类</option>' +
      cats.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("");
    category.value = state.category;
  }

  function filtered() {
    var q = normalize(state.query);
    return currentList().filter(function (e) {
      if (state.source && e.source !== state.source) return false;
      if (state.category && e.category !== state.category) return false;
      if (!q) return true;
      var hay = normalize([e.keys.join(""), e.raw, e.action, e.desc, e.category, (e.modes || []).join("")].join(""));
      return hay.indexOf(q) !== -1;
    });
  }

  function renderKeys(keys) {
    var sep = state.app === "ghostty" ? '<span class="key-plus">+</span>' : "";
    return '<div class="keys">' + keys.map(function (k) {
      return "<kbd>" + esc(k) + "</kbd>";
    }).join(sep) + "</div>";
  }

  function renderCard(e) {
    var sourceLabel = { local: "本地", builtin: "内置", official: "官方", disabled: "已注释" }[e.source];
    var modes = e.modes && e.modes.length ? '<span class="modes">模式 ' + esc(e.modes.join("/")) + "</span>" : "";
    var overridden = e.overridden ? '<span class="overridden">本地已覆盖</span>' : "";
    return '<article class="card ' + esc(e.source) + '" data-raw="' + esc(e.raw) + '">' +
      '<div class="card-top">' + renderKeys(e.keys) +
      '<span class="badge ' + esc(e.source) + '">' + sourceLabel + "</span></div>" +
      '<div class="action">' + esc(e.action) + "</div>" +
      '<div class="desc">' + esc(e.desc) + "</div>" +
      '<div class="card-foot"><span class="tag">' + esc(e.category) + "</span>" + modes + overridden + "</div>" +
      "</article>";
  }

  function render() {
    var list = filtered();
    grid.innerHTML = list.map(renderCard).join("");
    empty.hidden = list.length !== 0;
    resultInfo.textContent = "显示 " + list.length + " / " + currentList().length + " 条";
  }

  function switchApp(app) {
    state.app = app;
    state.category = "";
    if (app === "ghostty" && state.source === "builtin") state.source = "";
    document.querySelectorAll(".tab").forEach(function (t) {
      var active = t.dataset.app === app;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll(".chip").forEach(function (c) {
      var isBuiltin = c.dataset.source === "builtin";
      c.hidden = isBuiltin && app === "ghostty";
      c.classList.toggle("active", c.dataset.source === state.source);
    });
    updateConfigNote();
    populateCategories();
    render();
  }

  var toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 1500);
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { showToast("已复制：" + text); },
        function () { fallbackCopy(text); });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); showToast("已复制：" + text); }
    catch (err) { showToast("复制失败"); }
    document.body.removeChild(ta);
  }

  document.querySelectorAll(".tab").forEach(function (t) {
    t.addEventListener("click", function () { switchApp(t.dataset.app); });
  });

  document.querySelectorAll(".chip").forEach(function (c) {
    c.addEventListener("click", function () {
      state.source = c.dataset.source;
      document.querySelectorAll(".chip").forEach(function (x) {
        x.classList.toggle("active", x === c);
      });
      render();
    });
  });

  category.addEventListener("change", function () {
    state.category = category.value;
    render();
  });

  search.addEventListener("input", function () {
    state.query = search.value;
    render();
  });

  grid.addEventListener("click", function (ev) {
    var card = ev.target.closest(".card");
    if (card) copy(card.dataset.raw);
  });

  document.addEventListener("keydown", function (ev) {
    var tag = (ev.target && ev.target.tagName || "").toLowerCase();
    var typing = tag === "input" || tag === "textarea" || tag === "select";
    if (ev.key === "/" && !typing) {
      ev.preventDefault();
      search.focus();
      search.select();
    } else if (ev.key === "Escape") {
      if (document.activeElement === search) {
        if (search.value) { search.value = ""; state.query = ""; render(); }
        else search.blur();
      }
    } else if (!typing && (ev.key === "1" || ev.key === "2")) {
      switchApp(ev.key === "1" ? "ghostty" : "nvim");
    }
  });

  initMeta();
  switchApp("ghostty");
})();

window.KEYDATA = {
  "meta": {
    "ghostty": {
      "version": "1.4.0",
      "config": "~/.config/ghostty/config",
      "note": "macOS 默认键位；super = Cmd，alt = Option"
    },
    "nvim": {
      "version": "0.12.6",
      "config": "~/.config/nvim",
      "note": "Leader 键 = 空格（Space）"
    }
  },
  "ghostty": [
    {
      "keys": [
        "Cmd",
        "Shift",
        "e"
      ],
      "raw": "cmd+shift+e",
      "action": "new_split:right",
      "desc": "向右新建分屏",
      "category": "分屏",
      "source": "local",
      "overridden": false
    },
    {
      "keys": [
        "Opt",
        "←"
      ],
      "raw": "alt+left",
      "action": "unbind",
      "desc": "取消默认绑定（原为 esc:b）",
      "category": "行编辑",
      "source": "local",
      "overridden": false
    },
    {
      "keys": [
        "Opt",
        "→"
      ],
      "raw": "alt+right",
      "action": "unbind",
      "desc": "取消默认绑定（原为 esc:f）",
      "category": "行编辑",
      "source": "local",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        ""
      ],
      "raw": "super+",
      "action": "=increase_font_size:1",
      "desc": "=increase_font_size:1",
      "category": "其他",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        ""
      ],
      "raw": "super+ctrl+",
      "action": "=equalize_splits",
      "desc": "=equalize_splits",
      "category": "其他",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "["
      ],
      "raw": "super+[",
      "action": "goto_split:previous",
      "desc": "聚焦上一个侧分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "]"
      ],
      "raw": "super+]",
      "action": "goto_split:next",
      "desc": "聚焦下一个侧分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "↓"
      ],
      "raw": "super+alt+arrow_down",
      "action": "goto_split:down",
      "desc": "聚焦下侧分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "←"
      ],
      "raw": "super+alt+arrow_left",
      "action": "goto_split:left",
      "desc": "聚焦左侧分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "→"
      ],
      "raw": "super+alt+arrow_right",
      "action": "goto_split:right",
      "desc": "聚焦右侧分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "↑"
      ],
      "raw": "super+alt+arrow_up",
      "action": "goto_split:up",
      "desc": "聚焦上侧分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "↓"
      ],
      "raw": "super+ctrl+arrow_down",
      "action": "resize_split:down,10",
      "desc": "向下调整分屏大小",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "←"
      ],
      "raw": "super+ctrl+arrow_left",
      "action": "resize_split:left,10",
      "desc": "向左调整分屏大小",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "→"
      ],
      "raw": "super+ctrl+arrow_right",
      "action": "resize_split:right,10",
      "desc": "向右调整分屏大小",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "↑"
      ],
      "raw": "super+ctrl+arrow_up",
      "action": "resize_split:up,10",
      "desc": "向上调整分屏大小",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "d"
      ],
      "raw": "super+d",
      "action": "new_split:right",
      "desc": "向右新建分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "d"
      ],
      "raw": "super+shift+d",
      "action": "new_split:down",
      "desc": "向下新建分屏",
      "category": "分屏",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "copy"
      ],
      "raw": "copy",
      "action": "copy_to_clipboard:mixed",
      "desc": "复制选区到剪贴板（富文本 + 纯文本）",
      "category": "剪贴板",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "paste"
      ],
      "raw": "paste",
      "action": "paste_from_clipboard",
      "desc": "从剪贴板粘贴",
      "category": "剪贴板",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "c"
      ],
      "raw": "super+c",
      "action": "copy_to_clipboard:mixed",
      "desc": "复制选区到剪贴板（富文本 + 纯文本）",
      "category": "剪贴板",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "v"
      ],
      "raw": "super+shift+v",
      "action": "paste_from_selection",
      "desc": "粘贴鼠标选区（Primary Selection）",
      "category": "剪贴板",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "v"
      ],
      "raw": "super+v",
      "action": "paste_from_clipboard",
      "desc": "从剪贴板粘贴",
      "category": "剪贴板",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "Shift",
        "j"
      ],
      "raw": "super+alt+shift+j",
      "action": "write_screen_file:open,plain",
      "desc": "屏幕内容存入临时文件并打开",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "Shift",
        "j"
      ],
      "raw": "super+ctrl+shift+j",
      "action": "write_screen_file:copy,plain",
      "desc": "屏幕内容存入临时文件并复制路径",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "k"
      ],
      "raw": "super+k",
      "action": "clear_screen",
      "desc": "清屏",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "j"
      ],
      "raw": "super+shift+j",
      "action": "write_screen_file:paste,plain",
      "desc": "屏幕内容存入临时文件并粘贴路径",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "t"
      ],
      "raw": "super+shift+t",
      "action": "undo",
      "desc": "撤销（恢复终端内容）",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "z"
      ],
      "raw": "super+shift+z",
      "action": "redo",
      "desc": "重做",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "z"
      ],
      "raw": "super+z",
      "action": "undo",
      "desc": "撤销（恢复终端内容）",
      "category": "屏幕",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Esc"
      ],
      "raw": "escape",
      "action": "end_search",
      "desc": "结束搜索",
      "category": "搜索",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "e"
      ],
      "raw": "super+e",
      "action": "search_selection",
      "desc": "以当前选区开始搜索",
      "category": "搜索",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "f"
      ],
      "raw": "super+f",
      "action": "start_search",
      "desc": "开始搜索回滚内容",
      "category": "搜索",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "g"
      ],
      "raw": "super+g",
      "action": "navigate_search:next",
      "desc": "跳到下一个搜索匹配",
      "category": "搜索",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "f"
      ],
      "raw": "super+shift+f",
      "action": "end_search",
      "desc": "结束搜索",
      "category": "搜索",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "g"
      ],
      "raw": "super+shift+g",
      "action": "navigate_search:previous",
      "desc": "跳到上一个搜索匹配",
      "category": "搜索",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "",
        ""
      ],
      "raw": "super++",
      "action": "increase_font_size:1",
      "desc": "增大字号",
      "category": "显示",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "-"
      ],
      "raw": "super+-",
      "action": "decrease_font_size:1",
      "desc": "减小字号",
      "category": "显示",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "0"
      ],
      "raw": "super+0",
      "action": "reset_font_size",
      "desc": "重置字号",
      "category": "显示",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Ctrl",
        "Shift",
        "Tab"
      ],
      "raw": "ctrl+shift+tab",
      "action": "previous_tab",
      "desc": "上一个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Ctrl",
        "Tab"
      ],
      "raw": "ctrl+tab",
      "action": "next_tab",
      "desc": "下一个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "1"
      ],
      "raw": "super+1",
      "action": "goto_tab:1",
      "desc": "跳转到第 1 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "2"
      ],
      "raw": "super+2",
      "action": "goto_tab:2",
      "desc": "跳转到第 2 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "3"
      ],
      "raw": "super+3",
      "action": "goto_tab:3",
      "desc": "跳转到第 3 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "4"
      ],
      "raw": "super+4",
      "action": "goto_tab:4",
      "desc": "跳转到第 4 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "5"
      ],
      "raw": "super+5",
      "action": "goto_tab:5",
      "desc": "跳转到第 5 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "6"
      ],
      "raw": "super+6",
      "action": "goto_tab:6",
      "desc": "跳转到第 6 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "7"
      ],
      "raw": "super+7",
      "action": "goto_tab:7",
      "desc": "跳转到第 7 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "8"
      ],
      "raw": "super+8",
      "action": "goto_tab:8",
      "desc": "跳转到第 8 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "9"
      ],
      "raw": "super+9",
      "action": "last_tab",
      "desc": "最后一个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "w"
      ],
      "raw": "super+alt+w",
      "action": "close_tab:this",
      "desc": "关闭当前标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "1"
      ],
      "raw": "super+digit_1",
      "action": "goto_tab:1",
      "desc": "跳转到第 1 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "2"
      ],
      "raw": "super+digit_2",
      "action": "goto_tab:2",
      "desc": "跳转到第 2 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "3"
      ],
      "raw": "super+digit_3",
      "action": "goto_tab:3",
      "desc": "跳转到第 3 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "4"
      ],
      "raw": "super+digit_4",
      "action": "goto_tab:4",
      "desc": "跳转到第 4 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "5"
      ],
      "raw": "super+digit_5",
      "action": "goto_tab:5",
      "desc": "跳转到第 5 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "6"
      ],
      "raw": "super+digit_6",
      "action": "goto_tab:6",
      "desc": "跳转到第 6 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "7"
      ],
      "raw": "super+digit_7",
      "action": "goto_tab:7",
      "desc": "跳转到第 7 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "8"
      ],
      "raw": "super+digit_8",
      "action": "goto_tab:8",
      "desc": "跳转到第 8 个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "["
      ],
      "raw": "super+shift+[",
      "action": "previous_tab",
      "desc": "上一个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "]"
      ],
      "raw": "super+shift+]",
      "action": "next_tab",
      "desc": "下一个标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "t"
      ],
      "raw": "super+t",
      "action": "new_tab",
      "desc": "新建标签页",
      "category": "标签页",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "↓"
      ],
      "raw": "super+arrow_down",
      "action": "jump_to_prompt:1",
      "desc": "跳到下一个 Shell 提示符",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "↑"
      ],
      "raw": "super+arrow_up",
      "action": "jump_to_prompt:-1",
      "desc": "跳到上一个 Shell 提示符",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "End"
      ],
      "raw": "super+end",
      "action": "scroll_to_bottom",
      "desc": "滚动到底部",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Home"
      ],
      "raw": "super+home",
      "action": "scroll_to_top",
      "desc": "滚动到回滚缓冲区顶部",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "j"
      ],
      "raw": "super+j",
      "action": "scroll_to_selection",
      "desc": "滚动到选区位置",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "PgDn"
      ],
      "raw": "super+page_down",
      "action": "scroll_page_down",
      "desc": "向下翻页",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "PgUp"
      ],
      "raw": "super+page_up",
      "action": "scroll_page_up",
      "desc": "向上翻页",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "↓"
      ],
      "raw": "super+shift+arrow_down",
      "action": "jump_to_prompt:1",
      "desc": "跳到下一个 Shell 提示符",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "↑"
      ],
      "raw": "super+shift+arrow_up",
      "action": "jump_to_prompt:-1",
      "desc": "跳到上一个 Shell 提示符",
      "category": "滚动",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "Shift",
        "w"
      ],
      "raw": "super+alt+shift+w",
      "action": "close_all_windows",
      "desc": "关闭所有窗口",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "f"
      ],
      "raw": "super+ctrl+f",
      "action": "toggle_fullscreen",
      "desc": "切换全屏",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Enter"
      ],
      "raw": "super+enter",
      "action": "toggle_fullscreen",
      "desc": "切换全屏",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "n"
      ],
      "raw": "super+n",
      "action": "new_window",
      "desc": "新建窗口",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "q"
      ],
      "raw": "super+q",
      "action": "quit",
      "desc": "退出 Ghostty",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "Enter"
      ],
      "raw": "super+shift+enter",
      "action": "toggle_split_zoom",
      "desc": "切换分屏放大（Zoom）",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "p"
      ],
      "raw": "super+shift+p",
      "action": "toggle_command_palette",
      "desc": "打开/关闭命令面板",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        "w"
      ],
      "raw": "super+shift+w",
      "action": "close_window",
      "desc": "关闭当前窗口",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "w"
      ],
      "raw": "super+w",
      "action": "close_surface",
      "desc": "关闭当前终端面板（surface）",
      "category": "窗口",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Opt",
        "←"
      ],
      "raw": "alt+arrow_left",
      "action": "esc:b",
      "desc": "向后跳一个单词（发送 Esc b）（本地已解绑/覆盖）",
      "category": "行编辑",
      "source": "official",
      "overridden": true
    },
    {
      "keys": [
        "Opt",
        "→"
      ],
      "raw": "alt+arrow_right",
      "action": "esc:f",
      "desc": "向前跳一个单词（发送 Esc f）（本地已解绑/覆盖）",
      "category": "行编辑",
      "source": "official",
      "overridden": true
    },
    {
      "keys": [
        "Cmd",
        "←"
      ],
      "raw": "super+arrow_left",
      "action": "text:\\x01",
      "desc": "跳到行首（发送 Ctrl-A）",
      "category": "行编辑",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "→"
      ],
      "raw": "super+arrow_right",
      "action": "text:\\x05",
      "desc": "跳到行尾（发送 Ctrl-E）",
      "category": "行编辑",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Backspace"
      ],
      "raw": "super+backspace",
      "action": "text:\\x15",
      "desc": "删除到行首（发送 Ctrl-U）",
      "category": "行编辑",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Opt",
        "i"
      ],
      "raw": "super+alt+i",
      "action": "inspector:toggle",
      "desc": "打开/关闭 Inspector",
      "category": "调试",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "↓"
      ],
      "raw": "shift+arrow_down",
      "action": "adjust_selection:down",
      "desc": "调整选区：下",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "←"
      ],
      "raw": "shift+arrow_left",
      "action": "adjust_selection:left",
      "desc": "调整选区：左",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "→"
      ],
      "raw": "shift+arrow_right",
      "action": "adjust_selection:right",
      "desc": "调整选区：右",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "↑"
      ],
      "raw": "shift+arrow_up",
      "action": "adjust_selection:up",
      "desc": "调整选区：上",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "End"
      ],
      "raw": "shift+end",
      "action": "adjust_selection:end",
      "desc": "调整选区：行尾",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "Home"
      ],
      "raw": "shift+home",
      "action": "adjust_selection:home",
      "desc": "调整选区：行首",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "PgDn"
      ],
      "raw": "shift+page_down",
      "action": "adjust_selection:page_down",
      "desc": "调整选区：下一页",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Shift",
        "PgUp"
      ],
      "raw": "shift+page_up",
      "action": "adjust_selection:page_up",
      "desc": "调整选区：上一页",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "a"
      ],
      "raw": "super+a",
      "action": "select_all",
      "desc": "全选",
      "category": "选择",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        ","
      ],
      "raw": "super+,",
      "action": "open_config:os_open",
      "desc": "用系统默认程序打开配置文件",
      "category": "配置",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Shift",
        ","
      ],
      "raw": "super+shift+,",
      "action": "reload_config",
      "desc": "重新加载配置文件",
      "category": "配置",
      "source": "official",
      "overridden": false
    },
    {
      "keys": [
        "Cmd",
        "Ctrl",
        "Shift",
        "J"
      ],
      "raw": "global:cmd+ctrl+shift+j (已注释)",
      "action": "toggle_visibility",
      "desc": "全局显示/隐藏 Ghostty（配置中已注释，未生效）",
      "category": "窗口",
      "source": "disabled",
      "overridden": false
    }
  ],
  "nvim": [
    {
      "keys": [
        "Ctrl",
        "]"
      ],
      "raw": "<C-]>",
      "action": "<C-]>",
      "desc": "Copilot：忽略建议",
      "category": "AI",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "l"
      ],
      "raw": "<C-l>",
      "action": "<C-l>",
      "desc": "Copilot：接受建议",
      "category": "AI",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Opt",
        "Shift",
        "L"
      ],
      "raw": "<M-S-l>",
      "action": "<M-S-l>",
      "desc": "Copilot：接受一整行",
      "category": "AI",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Opt",
        "["
      ],
      "raw": "<M-[>",
      "action": "<M-[>",
      "desc": "Copilot：上一条建议",
      "category": "AI",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Opt",
        "]"
      ],
      "raw": "<M-]>",
      "action": "<M-]>",
      "desc": "Copilot：下一条建议",
      "category": "AI",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Opt",
        "l"
      ],
      "raw": "<M-l>",
      "action": "<M-l>",
      "desc": "Copilot：接受一个单词",
      "category": "AI",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        ";",
        "g"
      ],
      "raw": ";g",
      "action": ";g",
      "desc": "打开 lazygit",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";",
        "h"
      ],
      "raw": ";h",
      "action": ";h",
      "desc": "Git Diff（hunk 列表）",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "d",
        "H"
      ],
      "raw": "<leader>dH",
      "action": "<leader>dH",
      "desc": "整个仓库的提交历史",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "d",
        "h"
      ],
      "raw": "<leader>dh",
      "action": "<leader>dh",
      "desc": "当前文件的提交历史",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "d",
        "v"
      ],
      "raw": "<leader>dv",
      "action": "<leader>dv",
      "desc": "打开/关闭 CodeDiff",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "g",
        "B"
      ],
      "raw": "<leader>gB",
      "action": "<leader>gB",
      "desc": "整个文件 Git blame",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "g",
        "b"
      ],
      "raw": "<leader>gb",
      "action": "<leader>gb",
      "desc": "当前行 Git blame",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "g",
        "d"
      ],
      "raw": "<leader>gd",
      "action": "<leader>gd",
      "desc": "切换 MiniDiff 叠层显示",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "g",
        "h"
      ],
      "raw": "<leader>gh",
      "action": "<leader>gh",
      "desc": "暂存/取消暂存当前 hunk",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "g",
        "o"
      ],
      "raw": "<leader>go",
      "action": "<leader>go",
      "desc": "从 blame 的提交打开文件",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "g",
        "s"
      ],
      "raw": "<leader>gs",
      "action": "<leader>gs",
      "desc": "暂存/取消暂存整个 Buffer",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "c"
      ],
      "raw": "[c",
      "action": "[c",
      "desc": "跳到上一个 diff hunk（mini.diff）",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "c"
      ],
      "raw": "]c",
      "action": "]c",
      "desc": "跳到下一个 diff hunk（mini.diff）",
      "category": "Git",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";",
        "c"
      ],
      "raw": ";c",
      "action": ";c",
      "desc": "LSP 调用该函数的代码",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "k"
      ],
      "raw": "<c-k>",
      "action": "<c-k>",
      "desc": "签名帮助（插入模式）",
      "category": "LSP",
      "source": "local",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Space",
        "c",
        "a"
      ],
      "raw": "<leader>ca",
      "action": "<leader>ca",
      "desc": "代码操作 (code action)",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n",
        "x"
      ]
    },
    {
      "keys": [
        "Space",
        "c",
        "l"
      ],
      "raw": "<leader>cl",
      "action": "<leader>cl",
      "desc": "查看 LSP 配置信息",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "c",
        "r"
      ],
      "raw": "<leader>cr",
      "action": "<leader>cr",
      "desc": "重命名符号",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "i"
      ],
      "raw": "<leader>i",
      "action": "<leader>i",
      "desc": "切换 inlay hints（当前实现为空）",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "K"
      ],
      "raw": "K",
      "action": "K",
      "desc": "悬浮显示符号信息 (hover)",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "D"
      ],
      "raw": "gD",
      "action": "gD",
      "desc": "LSP 声明（Snacks picker）",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "I"
      ],
      "raw": "gI",
      "action": "gI",
      "desc": "跳到 TypeScript 源定义 / 实现",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "K"
      ],
      "raw": "gK",
      "action": "gK",
      "desc": "签名帮助",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "d"
      ],
      "raw": "gd",
      "action": "gd",
      "desc": "LSP 定义（Snacks picker）",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "r"
      ],
      "raw": "gr",
      "action": "gr",
      "desc": "LSP 引用（Snacks picker）",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "y"
      ],
      "raw": "gy",
      "action": "gy",
      "desc": "LSP 类型定义（Snacks picker）",
      "category": "LSP",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";",
        "n"
      ],
      "raw": ";n",
      "action": ";n",
      "desc": "通知列表",
      "category": "其他",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";",
        ";"
      ],
      "raw": ";;",
      "action": ";;",
      "desc": "恢复上一次 picker",
      "category": "搜索",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";",
        "r"
      ],
      "raw": ";r",
      "action": ";r",
      "desc": "实时搜索内容（grep）",
      "category": "搜索",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "["
      ],
      "raw": "[[",
      "action": "[[",
      "desc": "跳到上一个引用（Snacks words）",
      "category": "搜索",
      "source": "local",
      "modes": [
        "n",
        "t"
      ]
    },
    {
      "keys": [
        "]",
        "]"
      ],
      "raw": "]]",
      "action": "]]",
      "desc": "跳到下一个引用（Snacks words）",
      "category": "搜索",
      "source": "local",
      "modes": [
        "n",
        "t"
      ]
    },
    {
      "keys": [
        ";",
        "f"
      ],
      "raw": ";f",
      "action": ";f",
      "desc": "查找文件（Snacks picker）",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "b",
        "d"
      ],
      "raw": "<leader>bd",
      "action": "<leader>bd",
      "desc": "删除所有隐藏 Buffer",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "c",
        "R"
      ],
      "raw": "<leader>cR",
      "action": "<leader>cR",
      "desc": "重命名当前文件",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "j"
      ],
      "raw": "<leader>j",
      "action": "<leader>j",
      "desc": "在浮动窗口打开 package.json",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "y",
        "f"
      ],
      "raw": "<leader>yf",
      "action": "<leader>yf",
      "desc": "复制相对路径 + 行号到剪贴板",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "y",
        "p"
      ],
      "raw": "<leader>yp",
      "action": "<leader>yp",
      "desc": "复制绝对路径 + 行号到剪贴板",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "\\"
      ],
      "raw": "\\\\",
      "action": "\\\\",
      "desc": "列出 Buffer（Snacks picker）",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "h"
      ],
      "raw": "h (oil)",
      "action": "h (oil)",
      "desc": "Oil：返回上级目录",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "q"
      ],
      "raw": "q (oil)",
      "action": "q (oil)",
      "desc": "Oil：关闭窗口",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "f"
      ],
      "raw": "sf",
      "action": "sf",
      "desc": "打开 Oil 浮动文件浏览器",
      "category": "文件",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Shift",
        "Tab"
      ],
      "raw": "<s-tab>",
      "action": "<s-tab>",
      "desc": "上一个标签页",
      "category": "标签页",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Tab"
      ],
      "raw": "<tab>",
      "action": "<tab>",
      "desc": "下一个标签页",
      "category": "标签页",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "t",
        "e"
      ],
      "raw": "te",
      "action": "te",
      "desc": "新建标签页（:tabedit）",
      "category": "标签页",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "m"
      ],
      "raw": "<C-m>",
      "action": "<C-m>",
      "desc": "跳转列表前进（等同 <C-i>）",
      "category": "移动",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "h"
      ],
      "raw": "sh",
      "action": "sh",
      "desc": "聚焦左侧分屏",
      "category": "窗口/分屏",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "j"
      ],
      "raw": "sj",
      "action": "sj",
      "desc": "聚焦下方分屏",
      "category": "窗口/分屏",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "k"
      ],
      "raw": "sk",
      "action": "sk",
      "desc": "聚焦上方分屏",
      "category": "窗口/分屏",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "l"
      ],
      "raw": "sl",
      "action": "sl",
      "desc": "聚焦右侧分屏",
      "category": "窗口/分屏",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "s"
      ],
      "raw": "ss",
      "action": "ss",
      "desc": "水平分屏",
      "category": "窗口/分屏",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "s",
        "v"
      ],
      "raw": "sv",
      "action": "sv",
      "desc": "垂直分屏",
      "category": "窗口/分屏",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "+"
      ],
      "raw": "+",
      "action": "+",
      "desc": "自增（等同 <C-a>）",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "-"
      ],
      "raw": "-",
      "action": "-",
      "desc": "自减（等同 <C-x>）",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":"
      ],
      "raw": ":ToggleFormatter",
      "action": ":ToggleFormatter",
      "desc": "切换当前 Buffer 的自动格式化",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "a"
      ],
      "raw": "<C-a>",
      "action": "<C-a>",
      "desc": "全选（gg<S-v>G）",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "C"
      ],
      "raw": "<Leader>C",
      "action": "<Leader>C",
      "desc": "修改到行尾但不覆盖寄存器",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "D"
      ],
      "raw": "<Leader>D",
      "action": "<Leader>D",
      "desc": "删除到行尾但不覆盖寄存器",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "O"
      ],
      "raw": "<Leader>O",
      "action": "<Leader>O",
      "desc": "向上开新行且不自动续行注释",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "P"
      ],
      "raw": "<Leader>P",
      "action": "<Leader>P",
      "desc": "从 0 号寄存器粘贴到光标前",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "c"
      ],
      "raw": "<Leader>c",
      "action": "<Leader>c",
      "desc": "修改但不覆盖寄存器",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "d"
      ],
      "raw": "<Leader>d",
      "action": "<Leader>d",
      "desc": "删除但不覆盖寄存器",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "o"
      ],
      "raw": "<Leader>o",
      "action": "<Leader>o",
      "desc": "向下开新行且不自动续行注释",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Space",
        "p"
      ],
      "raw": "<Leader>p",
      "action": "<Leader>p",
      "desc": "从 0 号寄存器粘贴（不覆盖寄存器）",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "c",
        "c"
      ],
      "raw": "<leader>cc",
      "action": "<leader>cc",
      "desc": "把选区复制为 Markdown 代码块",
      "category": "编辑",
      "source": "local",
      "modes": [
        "v"
      ]
    },
    {
      "keys": [
        "Space",
        "f"
      ],
      "raw": "<leader>f",
      "action": "<leader>f",
      "desc": "格式化代码（conform）",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n",
        "x"
      ]
    },
    {
      "keys": [
        "d",
        "w"
      ],
      "raw": "dw",
      "action": "dw",
      "desc": "向前删除单词（vb\"_d）",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "x"
      ],
      "raw": "x",
      "action": "x",
      "desc": "删除但不覆盖寄存器",
      "category": "编辑",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";",
        "e"
      ],
      "raw": ";e",
      "action": ";e",
      "desc": "诊断列表",
      "category": "诊断",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "j"
      ],
      "raw": "<c-j>",
      "action": "<c-j>",
      "desc": "跳到下一个诊断",
      "category": "诊断",
      "source": "local",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "v"
      ],
      "raw": "<C-v>",
      "action": "<C-v>",
      "desc": "进入块可视模式",
      "category": "可视",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "V"
      ],
      "raw": "V",
      "action": "V",
      "desc": "进入行可视模式",
      "category": "可视",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "v"
      ],
      "raw": "gv",
      "action": "gv",
      "desc": "重新选中上次可视区域",
      "category": "可视",
      "source": "builtin",
      "modes": [
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "o"
      ],
      "raw": "o",
      "action": "o",
      "desc": "交换选区活动端",
      "category": "可视",
      "source": "builtin",
      "modes": [
        "v"
      ]
    },
    {
      "keys": [
        "v"
      ],
      "raw": "v",
      "action": "v",
      "desc": "进入字符可视模式",
      "category": "可视",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":",
        "q"
      ],
      "raw": ":q",
      "action": ":q",
      "desc": "退出",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":",
        "q",
        "!"
      ],
      "raw": ":q!",
      "action": ":q!",
      "desc": "强制退出不保存",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":",
        "w"
      ],
      "raw": ":w",
      "action": ":w",
      "desc": "保存文件",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":",
        "w",
        "q"
      ],
      "raw": ":wq",
      "action": ":wq",
      "desc": "保存并退出",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "b"
      ],
      "raw": "<C-b>",
      "action": "<C-b>",
      "desc": "命令行：光标到行首",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "c"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "d"
      ],
      "raw": "<C-d>",
      "action": "<C-d>",
      "desc": "命令行：显示补全候选",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "c"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "e"
      ],
      "raw": "<C-e>",
      "action": "<C-e>",
      "desc": "命令行：光标到行尾",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "c"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "u"
      ],
      "raw": "<C-u>",
      "action": "<C-u>",
      "desc": "命令行：清空当前行",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "c"
      ]
    },
    {
      "keys": [
        "Tab"
      ],
      "raw": "<Tab>",
      "action": "<Tab>",
      "desc": "命令行：补全",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "c"
      ]
    },
    {
      "keys": [
        "Z",
        "Q"
      ],
      "raw": "ZQ",
      "action": "ZQ",
      "desc": "不保存退出",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Z",
        "Z"
      ],
      "raw": "ZZ",
      "action": "ZZ",
      "desc": "保存并退出",
      "category": "命令",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "d"
      ],
      "raw": "<C-d>",
      "action": "<C-d>",
      "desc": "减少缩进",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "h"
      ],
      "raw": "<C-h>",
      "action": "<C-h>",
      "desc": "删除光标前一个字符",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "j"
      ],
      "raw": "<C-j>",
      "action": "<C-j>",
      "desc": "插入换行",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "n"
      ],
      "raw": "<C-n>",
      "action": "<C-n>",
      "desc": "补全：下一个候选（blink.cmp 已接管）",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "o"
      ],
      "raw": "<C-o>",
      "action": "<C-o>",
      "desc": "执行一次普通模式命令后返回插入",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "p"
      ],
      "raw": "<C-p>",
      "action": "<C-p>",
      "desc": "补全：上一个候选（blink.cmp 已接管）",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "t"
      ],
      "raw": "<C-t>",
      "action": "<C-t>",
      "desc": "增加缩进",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "u"
      ],
      "raw": "<C-u>",
      "action": "<C-u>",
      "desc": "删除光标前到行首的内容",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "w"
      ],
      "raw": "<C-w>",
      "action": "<C-w>",
      "desc": "删除光标前的单词",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Esc"
      ],
      "raw": "<Esc>",
      "action": "<Esc>",
      "desc": "退出插入/可视模式",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n",
        "i",
        "v"
      ]
    },
    {
      "keys": [
        "A"
      ],
      "raw": "A",
      "action": "A",
      "desc": "在行尾进入插入模式",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "I"
      ],
      "raw": "I",
      "action": "I",
      "desc": "在行首进入插入模式",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "O"
      ],
      "raw": "O",
      "action": "O",
      "desc": "在上方新建一行并插入",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "a"
      ],
      "raw": "a",
      "action": "a",
      "desc": "在光标后进入插入模式",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "i"
      ],
      "raw": "i",
      "action": "i",
      "desc": "在光标前进入插入模式",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "o"
      ],
      "raw": "o",
      "action": "o",
      "desc": "在下方新建一行并插入",
      "category": "插入",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "#"
      ],
      "raw": "#",
      "action": "#",
      "desc": "向上搜索光标下的单词",
      "category": "搜索",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "*"
      ],
      "raw": "*",
      "action": "*",
      "desc": "向下搜索光标下的单词",
      "category": "搜索",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "/"
      ],
      "raw": "/",
      "action": "/",
      "desc": "向下搜索",
      "category": "搜索",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "?"
      ],
      "raw": "?",
      "action": "?",
      "desc": "向上搜索",
      "category": "搜索",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "N"
      ],
      "raw": "N",
      "action": "N",
      "desc": "上一个搜索匹配",
      "category": "搜索",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "n"
      ],
      "raw": "n",
      "action": "n",
      "desc": "下一个搜索匹配",
      "category": "搜索",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "r"
      ],
      "raw": "<C-r>",
      "action": "<C-r>",
      "desc": "重做",
      "category": "撤销/宏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "@",
        "{reg}"
      ],
      "raw": "@",
      "action": "@",
      "desc": "播放宏",
      "category": "撤销/宏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "q",
        "{reg}"
      ],
      "raw": "q",
      "action": "q",
      "desc": "录制宏到寄存器",
      "category": "撤销/宏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "u"
      ],
      "raw": "u",
      "action": "u",
      "desc": "撤销",
      "category": "撤销/宏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "a",
        "p"
      ],
      "raw": "ap",
      "action": "ap",
      "desc": "文本对象：一个段落",
      "category": "文本对象",
      "source": "builtin",
      "modes": [
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "a",
        "w"
      ],
      "raw": "aw",
      "action": "aw",
      "desc": "文本对象：一个单词（含空格）",
      "category": "文本对象",
      "source": "builtin",
      "modes": [
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "i",
        "p"
      ],
      "raw": "ip",
      "action": "ip",
      "desc": "文本对象：段落内部",
      "category": "文本对象",
      "source": "builtin",
      "modes": [
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "i",
        "w"
      ],
      "raw": "iw",
      "action": "iw",
      "desc": "文本对象：单词内部",
      "category": "文本对象",
      "source": "builtin",
      "modes": [
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "g",
        "T"
      ],
      "raw": "gT",
      "action": "gT",
      "desc": "上一个标签页",
      "category": "标签页",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "t"
      ],
      "raw": "gt",
      "action": "gt",
      "desc": "下一个标签页",
      "category": "标签页",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "$"
      ],
      "raw": "$",
      "action": "$",
      "desc": "到行尾",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "%"
      ],
      "raw": "%",
      "action": "%",
      "desc": "跳到匹配的括号",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ","
      ],
      "raw": ",",
      "action": ",",
      "desc": "反向重复上一次 f/t/F/T",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "0"
      ],
      "raw": "0",
      "action": "0",
      "desc": "到行首",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ";"
      ],
      "raw": ";",
      "action": ";",
      "desc": "重复上一次 f/t/F/T",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "b"
      ],
      "raw": "<C-b>",
      "action": "<C-b>",
      "desc": "向上翻一页",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "d"
      ],
      "raw": "<C-d>",
      "action": "<C-d>",
      "desc": "向下滚动半屏",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "f"
      ],
      "raw": "<C-f>",
      "action": "<C-f>",
      "desc": "向下翻一页",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "i"
      ],
      "raw": "<C-i>",
      "action": "<C-i>",
      "desc": "跳到跳转列表 newer 位置",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "o"
      ],
      "raw": "<C-o>",
      "action": "<C-o>",
      "desc": "跳到跳转列表 older 位置",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "u"
      ],
      "raw": "<C-u>",
      "action": "<C-u>",
      "desc": "向上滚动半屏",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "B"
      ],
      "raw": "B",
      "action": "B",
      "desc": "到上一个 WORD 词首（忽略标点）",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "F",
        "{char}"
      ],
      "raw": "F",
      "action": "F",
      "desc": "跳到本行上一个指定字符",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "G"
      ],
      "raw": "G",
      "action": "G",
      "desc": "到文件最后一行",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "W"
      ],
      "raw": "W",
      "action": "W",
      "desc": "到下一个 WORD 词首（忽略标点）",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "^"
      ],
      "raw": "^",
      "action": "^",
      "desc": "到本行第一个非空字符",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "`",
        "`"
      ],
      "raw": "``",
      "action": "``",
      "desc": "跳回上次跳转位置",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "b"
      ],
      "raw": "b",
      "action": "b",
      "desc": "到上一个单词词首",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "e"
      ],
      "raw": "e",
      "action": "e",
      "desc": "到下一个单词词尾",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "f",
        "{char}"
      ],
      "raw": "f",
      "action": "f",
      "desc": "跳到本行下一个指定字符",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "g"
      ],
      "raw": "gg",
      "action": "gg",
      "desc": "到文件第一行",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "h"
      ],
      "raw": "h",
      "action": "h",
      "desc": "左移一个字符",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "j"
      ],
      "raw": "j",
      "action": "j",
      "desc": "下移一行",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "k"
      ],
      "raw": "k",
      "action": "k",
      "desc": "上移一行",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "l"
      ],
      "raw": "l",
      "action": "l",
      "desc": "右移一个字符",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "t",
        "{char}"
      ],
      "raw": "t",
      "action": "t",
      "desc": "跳到指定字符前",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "w"
      ],
      "raw": "w",
      "action": "w",
      "desc": "到下一个单词词首",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "{"
      ],
      "raw": "{",
      "action": "{",
      "desc": "到上一段落",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "}"
      ],
      "raw": "}",
      "action": "}",
      "desc": "到下一段落",
      "category": "移动",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":"
      ],
      "raw": ":split",
      "action": ":split",
      "desc": "水平分屏",
      "category": "窗口/分屏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ":"
      ],
      "raw": ":vsplit",
      "action": ":vsplit",
      "desc": "垂直分屏",
      "category": "窗口/分屏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "w",
        "h"
      ],
      "raw": "<C-w>h",
      "action": "<C-w>h",
      "desc": "聚焦左侧窗口（本地改为 s h）",
      "category": "窗口/分屏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "w",
        "j"
      ],
      "raw": "<C-w>j",
      "action": "<C-w>j",
      "desc": "聚焦下方窗口（本地改为 s j）",
      "category": "窗口/分屏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "w",
        "k"
      ],
      "raw": "<C-w>k",
      "action": "<C-w>k",
      "desc": "聚焦上方窗口（本地改为 s k）",
      "category": "窗口/分屏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "w",
        "l"
      ],
      "raw": "<C-w>l",
      "action": "<C-w>l",
      "desc": "聚焦右侧窗口（本地改为 s l）",
      "category": "窗口/分屏",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "."
      ],
      "raw": ".",
      "action": ".",
      "desc": "重复上一次修改",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "<",
        "<"
      ],
      "raw": "<<",
      "action": "<<",
      "desc": "左缩进当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "=",
        "="
      ],
      "raw": "==",
      "action": "==",
      "desc": "自动缩进当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        ">",
        ">"
      ],
      "raw": ">>",
      "action": ">>",
      "desc": "右缩进当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "C"
      ],
      "raw": "C",
      "action": "C",
      "desc": "修改到行尾",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "D"
      ],
      "raw": "D",
      "action": "D",
      "desc": "删除到行尾",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "J"
      ],
      "raw": "J",
      "action": "J",
      "desc": "合并下一行到当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "P"
      ],
      "raw": "P",
      "action": "P",
      "desc": "在光标前粘贴",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "R"
      ],
      "raw": "R",
      "action": "R",
      "desc": "进入替换模式",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "c",
        "c"
      ],
      "raw": "cc",
      "action": "cc",
      "desc": "修改当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "d",
        "d"
      ],
      "raw": "dd",
      "action": "dd",
      "desc": "删除当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "p"
      ],
      "raw": "p",
      "action": "p",
      "desc": "在光标后粘贴",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "r"
      ],
      "raw": "r",
      "action": "r",
      "desc": "替换光标下字符",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "x"
      ],
      "raw": "x",
      "action": "x",
      "desc": "删除光标下字符（本地改为不覆盖寄存器）",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "y",
        "y"
      ],
      "raw": "yy",
      "action": "yy",
      "desc": "复制当前行",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "~"
      ],
      "raw": "~",
      "action": "~",
      "desc": "切换光标下字符大小写",
      "category": "编辑",
      "source": "builtin",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "S"
      ],
      "raw": "<C-S>",
      "action": "LSP 签名帮助",
      "desc": "LSP 签名帮助",
      "category": "LSP",
      "source": "official",
      "modes": [
        "v",
        "s",
        "i"
      ]
    },
    {
      "keys": [
        "g",
        "O"
      ],
      "raw": "gO",
      "action": "LSP 文档符号列表",
      "desc": "LSP 文档符号列表",
      "category": "LSP",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "r",
        "a"
      ],
      "raw": "gra",
      "action": "LSP 代码操作",
      "desc": "LSP 代码操作",
      "category": "LSP",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "g",
        "r",
        "i"
      ],
      "raw": "gri",
      "action": "LSP 跳转到实现",
      "desc": "LSP 跳转到实现",
      "category": "LSP",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "r",
        "n"
      ],
      "raw": "grn",
      "action": "LSP 重命名",
      "desc": "LSP 重命名",
      "category": "LSP",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "r",
        "r"
      ],
      "raw": "grr",
      "action": "LSP 引用列表",
      "desc": "LSP 引用列表",
      "category": "LSP",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "r",
        "t"
      ],
      "raw": "grt",
      "action": "LSP 跳转到类型定义",
      "desc": "LSP 跳转到类型定义",
      "category": "LSP",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "r",
        "x"
      ],
      "raw": "grx",
      "action": "运行 CodeLens",
      "desc": "运行 CodeLens",
      "category": "LSP",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "#"
      ],
      "raw": "#",
      "action": "向上搜索光标下的单词",
      "desc": "向上搜索光标下的单词",
      "category": "其他",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "&"
      ],
      "raw": "&",
      "action": ":&&<CR>",
      "desc": "重复上一次 :substitute",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "*"
      ],
      "raw": "*",
      "action": "向下搜索光标下的单词",
      "desc": "向下搜索光标下的单词",
      "category": "其他",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "U"
      ],
      "raw": "<C-U>",
      "action": "<C-G>u<C-U>",
      "desc": "删除光标前到行首的内容",
      "category": "其他",
      "source": "official",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "W"
      ],
      "raw": "<C-W>",
      "action": "<C-G>u<C-W>",
      "desc": "删除光标前的单词",
      "category": "其他",
      "source": "official",
      "modes": [
        "i"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "W",
        "Ctrl",
        "D"
      ],
      "raw": "<C-W><C-D>",
      "action": "<C-W>d",
      "desc": "显示光标下的诊断信息",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "Shift",
        "Tab"
      ],
      "raw": "<S-Tab>",
      "action": "跳转代码片段；无片段时按 Shift-Tab",
      "desc": "跳转代码片段；无片段时按 Shift-Tab",
      "category": "其他",
      "source": "official",
      "modes": [
        "v",
        "s",
        "i"
      ]
    },
    {
      "keys": [
        "Tab"
      ],
      "raw": "<Tab>",
      "action": "跳转代码片段；无片段时按 Tab",
      "desc": "跳转代码片段；无片段时按 Tab",
      "category": "其他",
      "source": "official",
      "modes": [
        "v",
        "s",
        "i"
      ]
    },
    {
      "keys": [
        "@"
      ],
      "raw": "@",
      "action": "mode() ==# 'V' ? ':normal! @'.getcharstr().'<CR>' : '@'",
      "desc": "执行宏",
      "category": "其他",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "Q"
      ],
      "raw": "Q",
      "action": "mode() ==# 'V' ? ':normal! @<C-R>=reg_recorded()<CR><CR>' : 'Q'",
      "desc": "用最近录制的宏执行",
      "category": "其他",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "Y"
      ],
      "raw": "Y",
      "action": "y$",
      "desc": "复制到行尾（等同 y$）",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "Space"
      ],
      "raw": "[ ",
      "action": "在光标上方插入空行",
      "desc": "在光标上方插入空行",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "Ctrl",
        "L"
      ],
      "raw": "[<C-L>",
      "action": "跳到位置列表文件",
      "desc": "跳到位置列表文件",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "Ctrl",
        "Q"
      ],
      "raw": "[<C-Q>",
      "action": "跳到 quickfix 文件",
      "desc": "跳到 quickfix 文件",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "Ctrl",
        "T"
      ],
      "raw": "[<C-T>",
      "action": "上一个预览项",
      "desc": "上一个预览项",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "D"
      ],
      "raw": "[D",
      "action": "跳到当前缓冲区第一个诊断",
      "desc": "跳到当前缓冲区第一个诊断",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "d"
      ],
      "raw": "[d",
      "action": "跳到上一个诊断",
      "desc": "跳到上一个诊断",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "Space"
      ],
      "raw": "] ",
      "action": "在光标下方插入空行",
      "desc": "在光标下方插入空行",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "Ctrl",
        "L"
      ],
      "raw": "]<C-L>",
      "action": "跳到位置列表文件",
      "desc": "跳到位置列表文件",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "Ctrl",
        "Q"
      ],
      "raw": "]<C-Q>",
      "action": "跳到 quickfix 文件",
      "desc": "跳到 quickfix 文件",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "Ctrl",
        "T"
      ],
      "raw": "]<C-T>",
      "action": "下一个预览项",
      "desc": "下一个预览项",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "D"
      ],
      "raw": "]D",
      "action": "跳到当前缓冲区最后一个诊断",
      "desc": "跳到当前缓冲区最后一个诊断",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "d"
      ],
      "raw": "]d",
      "action": "跳到下一个诊断",
      "desc": "跳到下一个诊断",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "c"
      ],
      "raw": "gc",
      "action": "切换注释",
      "desc": "切换注释",
      "category": "其他",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "g",
        "c",
        "c"
      ],
      "raw": "gcc",
      "action": "切换当前行注释",
      "desc": "切换当前行注释",
      "category": "其他",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "g",
        "x"
      ],
      "raw": "gx",
      "action": "用系统程序打开光标下的文件/链接",
      "desc": "用系统程序打开光标下的文件/链接",
      "category": "其他",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v"
      ]
    },
    {
      "keys": [
        "%"
      ],
      "raw": "%",
      "action": "<Plug>(MatchitVisualForward)",
      "desc": "匹配括号：可视模式正向跳转",
      "category": "匹配括号",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "[",
        "%"
      ],
      "raw": "[%",
      "action": "<Plug>(MatchitVisualMultiBackward)",
      "desc": "匹配括号：可视多匹配反向",
      "category": "匹配括号",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "]",
        "%"
      ],
      "raw": "]%",
      "action": "<Plug>(MatchitVisualMultiForward)",
      "desc": "匹配括号：可视多匹配正向",
      "category": "匹配括号",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "a",
        "%"
      ],
      "raw": "a%",
      "action": "<Plug>(MatchitVisualTextObject)",
      "desc": "匹配括号：文本对象",
      "category": "匹配括号",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "g",
        "%"
      ],
      "raw": "g%",
      "action": "<Plug>(MatchitVisualBackward)",
      "desc": "匹配括号：可视模式反向跳转",
      "category": "匹配括号",
      "source": "official",
      "modes": [
        "x",
        "n",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "L"
      ],
      "raw": "<C-L>",
      "action": "<Cmd>nohlsearch|diffupdate|normal! <C-L><CR>",
      "desc": "清除搜索高亮并刷新屏幕",
      "category": "搜索高亮",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "N"
      ],
      "raw": "[N",
      "action": "选中上一个同级语法节点",
      "desc": "选中上一个同级语法节点",
      "category": "文本对象",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "[",
        "n"
      ],
      "raw": "[n",
      "action": "选中上一个语法节点",
      "desc": "选中上一个语法节点",
      "category": "文本对象",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "]",
        "N"
      ],
      "raw": "]N",
      "action": "选中下一个同级语法节点",
      "desc": "选中下一个同级语法节点",
      "category": "文本对象",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "]",
        "n"
      ],
      "raw": "]n",
      "action": "选中下一个语法节点",
      "desc": "选中下一个语法节点",
      "category": "文本对象",
      "source": "official",
      "modes": [
        "x",
        "v"
      ]
    },
    {
      "keys": [
        "a",
        "n"
      ],
      "raw": "an",
      "action": "选中父级（outer）语法节点",
      "desc": "选中父级（outer）语法节点",
      "category": "文本对象",
      "source": "official",
      "modes": [
        "x",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "i",
        "n"
      ],
      "raw": "in",
      "action": "选中子级（inner）语法节点",
      "desc": "选中子级（inner）语法节点",
      "category": "文本对象",
      "source": "official",
      "modes": [
        "x",
        "v",
        "o"
      ]
    },
    {
      "keys": [
        "Ctrl",
        "W",
        "d"
      ],
      "raw": "<C-W>d",
      "action": "显示光标下的诊断信息",
      "desc": "显示光标下的诊断信息",
      "category": "诊断",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "A"
      ],
      "raw": "[A",
      "action": "跳到第一个参数文件",
      "desc": "跳到第一个参数文件",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "B"
      ],
      "raw": "[B",
      "action": "跳到第一个 Buffer",
      "desc": "跳到第一个 Buffer",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "L"
      ],
      "raw": "[L",
      "action": "第一个位置",
      "desc": "第一个位置",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "Q"
      ],
      "raw": "[Q",
      "action": "第一个 quickfix 项",
      "desc": "第一个 quickfix 项",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "T"
      ],
      "raw": "[T",
      "action": "第一个 tag 匹配",
      "desc": "第一个 tag 匹配",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "a"
      ],
      "raw": "[a",
      "action": "上一个文件",
      "desc": "上一个文件",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "b"
      ],
      "raw": "[b",
      "action": "上一个 Buffer",
      "desc": "上一个 Buffer",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "l"
      ],
      "raw": "[l",
      "action": "上一个位置",
      "desc": "上一个位置",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "q"
      ],
      "raw": "[q",
      "action": "上一个 quickfix 项",
      "desc": "上一个 quickfix 项",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "[",
        "t"
      ],
      "raw": "[t",
      "action": "上一个 tag 匹配",
      "desc": "上一个 tag 匹配",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "A"
      ],
      "raw": "]A",
      "action": "跳到最后一个参数文件",
      "desc": "跳到最后一个参数文件",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "B"
      ],
      "raw": "]B",
      "action": "跳到最后一个 Buffer",
      "desc": "跳到最后一个 Buffer",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "L"
      ],
      "raw": "]L",
      "action": "最后一个位置",
      "desc": "最后一个位置",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "Q"
      ],
      "raw": "]Q",
      "action": "最后一个 quickfix 项",
      "desc": "最后一个 quickfix 项",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "T"
      ],
      "raw": "]T",
      "action": "最后一个 tag 匹配",
      "desc": "最后一个 tag 匹配",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "a"
      ],
      "raw": "]a",
      "action": "下一个文件",
      "desc": "下一个文件",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "b"
      ],
      "raw": "]b",
      "action": "下一个 Buffer",
      "desc": "下一个 Buffer",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "l"
      ],
      "raw": "]l",
      "action": "下一个位置",
      "desc": "下一个位置",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "q"
      ],
      "raw": "]q",
      "action": "下一个 quickfix 项",
      "desc": "下一个 quickfix 项",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    },
    {
      "keys": [
        "]",
        "t"
      ],
      "raw": "]t",
      "action": "下一个 tag 匹配",
      "desc": "下一个 tag 匹配",
      "category": "跳转",
      "source": "official",
      "modes": [
        "n"
      ]
    }
  ]
};

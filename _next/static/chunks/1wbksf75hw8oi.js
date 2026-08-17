(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11241,e=>{"use strict";let s=(0,e.i(56420).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",0,s],11241)},68877,e=>{"use strict";let s=(0,e.i(56420).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,s],68877)},51129,e=>{"use strict";var s=e.i(43476),t=e.i(22016),l=e.i(11241),i=e.i(68877),n=e.i(91511),a=e.i(81917);e.s(["default",0,function(){let{lang:e,getLocalizedHref:r}=(0,a.useI18n)();return"en"===e?(0,s.jsxs)("div",{className:"space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-xs font-bold text-blue-400 uppercase tracking-wider mb-2",children:"Developer Reference / Config"}),(0,s.jsx)("h1",{className:"text-3xl font-extrabold text-white mb-3",children:"Config.yaml Manifest Specification"}),(0,s.jsxs)("p",{className:"text-slate-400",children:[(0,s.jsx)("code",{children:"Config.yaml"})," is the core metadata file of a FlyClip extension, defining its name, icon, options, and actions."]})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("h2",{className:"text-xl font-bold text-white border-b border-[#2d3142] pb-2",children:"Core Field Reference"}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-[#2d3142] text-slate-400",children:[(0,s.jsx)("th",{className:"py-2.5 px-3",children:"Field"}),(0,s.jsx)("th",{className:"py-2.5 px-3",children:"Type"}),(0,s.jsx)("th",{className:"py-2.5 px-3",children:"Description"})]})}),(0,s.jsxs)("tbody",{className:"divide-y divide-[#2d3142] text-slate-300",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"name"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String / Map"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Display name of the extension (Required). Supports multilingual key-value mappings."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"identifier"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String"}),(0,s.jsxs)("td",{className:"py-3 px-3",children:["Unique reverse-DNS identifier, e.g. ",(0,s.jsx)("code",{children:"com.flyclip.extension.my-ext"}),"."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"icon"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String"}),(0,s.jsxs)("td",{className:"py-3 px-3",children:["Icon declaration. Supports text (e.g. ",(0,s.jsx)("code",{children:"GT"}),") or Iconify IDs (e.g. ",(0,s.jsx)("code",{children:"iconify:mdi:translate"}),")."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"description"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String / Map"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Brief description of the extension. Supports multilingual key-value mappings."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"options"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Array"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"List of user-configurable settings rendered in preferences."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"platforms"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Array"}),(0,s.jsxs)("td",{className:"py-3 px-3",children:["Target operating systems: ",(0,s.jsx)("code",{children:"[windows, macos, linux]"})," (defaults to all).",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:"WebDAV Sync Friendly"}),": Installs safely across all synced devices, silently disabling actions on unsupported OS without throwing blocking errors."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"actions"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Array / Object"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Defines one or multiple selection actions."})]})]})]})})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("h2",{className:"text-xl font-bold text-white border-b border-[#2d3142] pb-2 flex items-center gap-2",children:[(0,s.jsx)(n.Globe,{className:"text-emerald-400",size:20}),(0,s.jsx)("span",{children:"Multilingual Localization (i18n in Config.yaml)"})]}),(0,s.jsxs)("p",{className:"text-xs sm:text-sm text-slate-300",children:["Both ",(0,s.jsx)("strong",{children:"PopClip"})," and ",(0,s.jsx)("strong",{children:"FlyClip"})," natively support multilingual dictionary maps for ",(0,s.jsx)("code",{children:"name"}),", ",(0,s.jsx)("code",{children:"description"}),", ",(0,s.jsx)("code",{children:"title"}),", and ",(0,s.jsx)("code",{children:"options[].label"}),". The client automatically selects the best matching language based on the user's system/app language (with fallback to ",(0,s.jsx)("code",{children:"en"}),"):"]}),(0,s.jsx)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-[#2d3142] font-mono text-xs text-blue-200",children:(0,s.jsx)("pre",{children:`# Multilingual Extension Example
name:
  en: Case Converter
  zh-CN: 大小写转换
  zh-Hans: 大小写转换
  zh-Hant: 大小寫轉換
  ja: ケース変換

description:
  en: Convert selected text between UPPER, lower, camelCase, snake_case.
  zh-CN: 选中文本在各种大小写与命名风格之间快速转换。

identifier: com.flyclip.extension.case-converter
icon: Aa

options:
  - identifier: target_format
    label:
      en: Default Format
      zh-CN: 默认转换格式
    type: multiple
    values: [upper, lower, camel, snake]
    value labels:
      - Upper (大写)
      - Lower (小写)
      - camelCase (小驼峰)
      - snake_case (下划线)
    default value: upper

actions:
  - title:
      en: Convert to UPPER
      zh-CN: 转换为大写
    javascript: return flyclip.input.text.toUpperCase();
    after: paste-result`})})]}),(0,s.jsxs)("div",{className:"pt-6 border-t border-[#2d3142] flex justify-between items-center text-xs",children:[(0,s.jsxs)(t.default,{href:r("/dev/packages"),className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1c1e27] border border-[#2d3142] text-slate-300 hover:text-white font-semibold transition-colors",children:[(0,s.jsx)(l.ArrowLeft,{size:14}),(0,s.jsx)("span",{children:"Prev: Packages"})]}),(0,s.jsxs)(t.default,{href:r("/dev/options"),className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors",children:[(0,s.jsx)("span",{children:"Next: Options Specification"}),(0,s.jsx)(i.ArrowRight,{size:14})]})]})]}):(0,s.jsxs)("div",{className:"space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"text-xs font-bold text-blue-400 uppercase tracking-wider mb-2",children:"Developer Reference / Config"}),(0,s.jsx)("h1",{className:"text-3xl font-extrabold text-white mb-3",children:"Config.yaml 配置文件规范"}),(0,s.jsxs)("p",{className:"text-slate-400",children:[(0,s.jsx)("code",{children:"Config.yaml"})," 是 FlyClip 扩展的核心元数据文件，定义了扩展名、图标、选项与动作。"]})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsx)("h2",{className:"text-xl font-bold text-white border-b border-[#2d3142] pb-2",children:"核心字段参考表"}),(0,s.jsx)("div",{className:"overflow-x-auto",children:(0,s.jsxs)("table",{className:"w-full text-left border-collapse text-xs sm:text-sm",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-[#2d3142] text-slate-400",children:[(0,s.jsx)("th",{className:"py-2.5 px-3",children:"字段名"}),(0,s.jsx)("th",{className:"py-2.5 px-3",children:"类型"}),(0,s.jsx)("th",{className:"py-2.5 px-3",children:"说明"})]})}),(0,s.jsxs)("tbody",{className:"divide-y divide-[#2d3142] text-slate-300",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"name"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String / Map"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"扩展显示名称（必填）。支持多语言键值对 Map。"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"identifier"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String"}),(0,s.jsxs)("td",{className:"py-3 px-3",children:["全局唯一反向域名标识符，例如 ",(0,s.jsx)("code",{children:"com.flyclip.extension.my-ext"}),"。"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"icon"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String"}),(0,s.jsxs)("td",{className:"py-3 px-3",children:["图标声明。支持纯文本（如 ",(0,s.jsx)("code",{children:"GT"}),"）或 Iconify 图标（如 ",(0,s.jsx)("code",{children:"iconify:mdi:translate"}),"）。"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"description"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"String / Map"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"扩展的简要功能描述。支持多语言键值对 Map。"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"options"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Array"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"在设置界面中可供用户调整的参数列表。"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"platforms"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Array"}),(0,s.jsxs)("td",{className:"py-3 px-3",children:["支持的操作系统平台：",(0,s.jsx)("code",{children:"[windows, macos, linux]"}),"（默认全部支持）。",(0,s.jsx)("br",{}),(0,s.jsx)("strong",{children:"WebDAV 同步友好"}),"：跨设备同步时所有系统均允许正常安装，但在非目标系统上自动静默禁用动作，不产生阻断性错误。"]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"py-3 px-3 font-mono text-blue-400",children:"actions"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"Array / Object"}),(0,s.jsx)("td",{className:"py-3 px-3",children:"定义一个或多个具体的划词动作。"})]})]})]})})]}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("h2",{className:"text-xl font-bold text-white border-b border-[#2d3142] pb-2 flex items-center gap-2",children:[(0,s.jsx)(n.Globe,{className:"text-emerald-400",size:20}),(0,s.jsx)("span",{children:"多语言本地化配置 (i18n 支持)"})]}),(0,s.jsxs)("p",{className:"text-xs sm:text-sm text-slate-300",children:[(0,s.jsx)("strong",{children:"PopClip 与 FlyClip 原生 100% 支持"}),"在 ",(0,s.jsx)("code",{children:"Config.yaml"})," 中直接使用多语言字典映射配置 ",(0,s.jsx)("code",{children:"name"}),"（扩展名）、",(0,s.jsx)("code",{children:"description"}),"（描述）、",(0,s.jsx)("code",{children:"title"}),"（动作标题）以及 ",(0,s.jsx)("code",{children:"options[].label"}),"（设置项标签）。客户端会根据当前用户的系统/软件语言自动匹配显示（缺省回退至 ",(0,s.jsx)("code",{children:"en"}),"）："]}),(0,s.jsx)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-[#2d3142] font-mono text-xs text-blue-200",children:(0,s.jsx)("pre",{children:`# 多语言扩展声明示例
name:
  en: Case Converter
  zh-CN: 大小写转换
  zh-Hans: 大小写转换
  zh-Hant: 大小寫轉換
  ja: ケース変換

description:
  en: Convert selected text between UPPER, lower, camelCase, snake_case.
  zh-CN: 选中文本在各种大小写与命名风格之间快速转换。

identifier: com.flyclip.extension.case-converter
icon: Aa

options:
  - identifier: target_format
    label:
      en: Default Format
      zh-CN: 默认转换格式
    type: multiple
    values: [upper, lower, camel, snake]
    value labels:
      - Upper (大写)
      - Lower (小写)
      - camelCase (小驼峰)
      - snake_case (下划线)
    default value: upper

actions:
  - title:
      en: Convert to UPPER
      zh-CN: 转换为大写
    javascript: return flyclip.input.text.toUpperCase();
    after: paste-result`})})]}),(0,s.jsxs)("div",{className:"pt-6 border-t border-[#2d3142] flex justify-between items-center text-xs",children:[(0,s.jsxs)(t.default,{href:r("/dev/packages"),className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#1c1e27] border border-[#2d3142] text-slate-300 hover:text-white font-semibold transition-colors",children:[(0,s.jsx)(l.ArrowLeft,{size:14}),(0,s.jsx)("span",{children:"上一页：扩展包结构"})]}),(0,s.jsxs)(t.default,{href:r("/dev/options"),className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors",children:[(0,s.jsx)("span",{children:"下一步：参数选项规范"}),(0,s.jsx)(i.ArrowRight,{size:14})]})]})]})}])}]);
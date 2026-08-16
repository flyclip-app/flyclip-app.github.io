(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89664,e=>{"use strict";let t=(0,e.i(56420).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",0,t],89664)},8734,e=>{"use strict";let t=(0,e.i(56420).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",0,t],8734)},24526,e=>{"use strict";var t=e.i(43476),i=e.i(71645),o=e.i(18566),n=e.i(7084),s=e.i(22016),l=e.i(62368),c=e.i(64569),a=e.i(89664),r=e.i(8734),p=e.i(56420);let d=(0,p.default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),m=(0,p.default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);function h(){let e=(0,o.useSearchParams)().get("id")||"",[p,h]=(0,i.useState)(!1),[f,u]=(0,i.useState)(!1),x=n.EXTENSIONS_DATA.find(t=>t.id===e)||n.EXTENSIONS_DATA[0],y=(0,n.getExtensionPackageName)(x.id),g=`https://flyclip-app.github.io/downloads/extensions/${y}.flyclipextz`,b=`flyclip://install-extension?url=${encodeURIComponent(g)}&id=${encodeURIComponent(x.id)}&name=${encodeURIComponent(x.name)}`,w=`# flyclip
${x.configYaml}`,T=`/downloads/extensions/${y}.flyclipextz`;return(0,i.useEffect)(()=>{let e=setTimeout(()=>{try{window.location.href=b,u(!0)}catch(e){}},500);return()=>clearTimeout(e)},[b]),(0,t.jsxs)("div",{className:"min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col justify-center",children:[(0,t.jsx)("div",{className:"mb-8",children:(0,t.jsxs)(s.default,{href:"/extensions",className:"inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors",children:[(0,t.jsx)(d,{size:16}),(0,t.jsx)("span",{children:"返回扩展中心列表"})]})}),(0,t.jsxs)("div",{className:"bg-[#1c1e27] border border-[#2d3142] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8",children:[(0,t.jsxs)("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#2d3142]",children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)("div",{className:"w-16 h-16 rounded-2xl bg-[#14161d] border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-2xl shadow-lg shadow-blue-500/10",children:x.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:x.name}),(0,t.jsx)("p",{className:"text-xs sm:text-sm text-slate-500 font-mono mt-0.5",children:x.id})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("span",{className:"px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold",children:"官方认证扩展"}),(0,t.jsx)("span",{className:"px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold",children:"自动更新就绪"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"扩展功能说明"}),(0,t.jsx)("p",{className:"text-base text-slate-200 leading-relaxed",children:x.descriptionZh||x.description})]}),(0,t.jsxs)("div",{className:"p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 font-bold text-white text-sm",children:[(0,t.jsx)(c.Zap,{size:16,className:"text-amber-400 animate-pulse"}),(0,t.jsx)("span",{children:"正在呼起 FlyClip 客户端一键安装..."})]}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:"若浏览器弹出应用授权窗口，请点击「打开 FlyClip」确认。"})]}),(0,t.jsxs)("button",{onClick:()=>{try{window.location.href=b,u(!0)}catch(e){}},className:"px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all shadow-lg shadow-blue-500/25 flex-shrink-0",children:[(0,t.jsx)(c.Zap,{size:15,className:"text-amber-300"}),(0,t.jsx)("span",{children:"重新呼起 FlyClip"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"p-5 rounded-2xl bg-[#14161d] border border-[#2d3142] space-y-3 flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h3",{className:"font-bold text-white text-sm flex items-center gap-1.5",children:[(0,t.jsx)(l.Download,{size:15,className:"text-blue-400"}),(0,t.jsx)("span",{children:"离线扩展包 (.flyclipextz)"})]}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:"下载后双击文件即可完成安装，无需浏览器协议授权。"})]}),(0,t.jsxs)("a",{href:T,download:`${y}.flyclipextz`,className:"w-full py-2.5 px-4 rounded-xl bg-[#1c1e27] border border-[#2d3142] hover:border-slate-400 text-slate-200 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors",children:[(0,t.jsx)(l.Download,{size:14}),(0,t.jsxs)("span",{children:["下载 ",y,".flyclipextz"]})]})]}),(0,t.jsxs)("div",{className:"p-5 rounded-2xl bg-[#14161d] border border-[#2d3142] space-y-3 flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("h3",{className:"font-bold text-white text-sm flex items-center gap-1.5",children:[(0,t.jsx)(m,{size:15,className:"text-emerald-400"}),(0,t.jsx)("span",{children:"还没有 FlyClip 客户端？"})]}),(0,t.jsx)("p",{className:"text-xs text-slate-400",children:"完全免费开源，单文件 15MB 内存常驻，Windows 划词利器。"})]}),(0,t.jsxs)(s.default,{href:"/download",className:"w-full py-2.5 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 text-blue-400 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all",children:[(0,t.jsx)(l.Download,{size:14}),(0,t.jsx)("span",{children:"下载 FlyClip 客户端"})]})]})]}),(0,t.jsxs)("div",{className:"space-y-3 pt-2",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"扩展配置代码 (支持鼠标划选即装)"}),(0,t.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(w),h(!0),setTimeout(()=>h(!1),2e3)},className:"text-xs text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors",children:[p?(0,t.jsx)(a.Check,{size:13,className:"text-green-400"}):(0,t.jsx)(r.Copy,{size:13}),(0,t.jsx)("span",{children:p?"已复制到剪贴板":"复制代码"})]})]}),(0,t.jsx)("div",{className:"p-5 rounded-2xl bg-[#14161d] border border-[#2d3142] font-mono text-xs text-slate-200 overflow-x-auto leading-relaxed select-all",children:(0,t.jsx)("pre",{children:w})})]})]})]})}e.s(["default",0,function(){return(0,t.jsx)(i.Suspense,{fallback:(0,t.jsx)("div",{className:"min-h-[70vh] flex items-center justify-center text-slate-400 text-sm",children:"正在加载扩展安装页面..."}),children:(0,t.jsx)(h,{})})}],24526)},7084,64569,e=>{"use strict";let t=[{id:"com.flyclip.extension.pot-desktop",name:"Pot 划词翻译",category:"translation",icon:"Pot",description:"Send selected text to Pot Desktop via local HTTP API for instant translation/OCR.",descriptionZh:"通过本地 HTTP 服务将选中文本发送至 Pot Desktop 进行划词翻译或 OCR。",hasOptions:!0,optionsCount:2,type:"url",configYaml:`name: Pot 划词翻译
identifier: com.flyclip.extension.pot-desktop
icon: Pot
options:
  - identifier: port
    label: 本地服务端口
    type: string
    default value: "60828"
actions:
  - title: Pot 翻译
    javascript: |
      const text = flyclip.input.text.trim();
      const port = flyclip.options.port || "60828";
      try {
        await flyclip.fetch(\`http://127.0.0.1:\${port}/api/translate\`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text })
        });
      } catch (e) {
        flyclip.run("cmd", ["/c", "start", \`pot:translate?text=\${encodeURIComponent(text)}\`]);
      }
    requirements: [text]`},{id:"com.flyclip.extension.stranslate",name:"STranslate 翻译",category:"translation",icon:"ST",description:"Trigger Windows open-source STranslate tool for deep translation.",descriptionZh:"通过本地服务或命令行调用 Windows 开源神器 STranslate 进行即时翻译。",hasOptions:!0,optionsCount:2,type:"powershell",configYaml:`name: STranslate 翻译
identifier: com.flyclip.extension.stranslate
icon: ST
platforms: [windows] # 标记 Windows 专属，WebDAV 多端同步自动静默适配
options:
  - identifier: trigger_mode
    label: 唤起方式
    type: multiple
    values: [http, cli]
    default value: http
  - identifier: port
    label: 本地端口
    type: string
    default value: "50020"
actions:
  - title: STranslate
    javascript: |
      const text = flyclip.input.text.trim();
      const mode = flyclip.options.trigger_mode || "http";
      const port = flyclip.options.port || "50020";
      if (mode === "http") {
        await flyclip.fetch(\`http://127.0.0.1:\${port}/text?content=\${encodeURIComponent(text)}\`);
      } else {
        flyclip.run("stranslate", ["-t", text]);
      }
    requirements: [text]`},{id:"com.flyclip.extension.google-translate",name:"Google Translate",category:"translation",icon:"GT",description:"Translate selected text with Google Translate worldwide.",descriptionZh:"使用 Google 翻译选中文本，支持多站点切换与目标语言设定。",hasOptions:!0,optionsCount:2,type:"url",configYaml:`name: Google Translate
identifier: com.flyclip.extension.google-translate
description: Translate selected text with Google Translate
icon: iconify:simple-icons:googletranslate
options:
  - identifier: site
    label: 翻译站点
    type: multiple
    values:
      - translate.google.com
      - translate.google.cn
      - translate.google.com.hk
    default value: translate.google.com
  - identifier: target_lang
    label: 目标语言
    type: multiple
    values: [zh-CN, en, ja, ko, fr, de, es, ru]
    default value: zh-CN
actions:
  - title: Google Translate
    url: https://{flyclip option site}/?sl=auto&tl={flyclip option target_lang}&text={flyclip text}&op=translate
    requirements: [text]`},{id:"com.flyclip.extension.deepl-translate",name:"DeepL Translate",category:"translation",icon:"DL",description:"High-accuracy neural machine translation with DeepL.",descriptionZh:"使用 DeepL 神经网络高质量翻译选中文本。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: DeepL Translate
identifier: com.flyclip.extension.deepl-translate
icon: iconify:simple-icons:deepl
options:
  - identifier: target_lang
    label: 目标语言
    type: multiple
    values: [zh, en, ja, de, fr, es, ru, ko]
    default value: zh
actions:
  - title: DeepL
    url: https://www.deepl.com/translator#auto/{flyclip option target_lang}/{flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.baidu-translate",name:"百度翻译",category:"translation",icon:"百翻",description:"Translate text with Baidu Translate.",descriptionZh:"使用百度翻译引擎翻译选中文本。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: Baidu Translate
identifier: com.flyclip.extension.baidu-translate
icon: iconify:simple-icons:baidu
options:
  - identifier: target_lang
    label: 目标语言
    type: multiple
    values: [zh, en, jp, kor, fra, de, spa, ru]
    default value: zh
actions:
  - title: 百度翻译
    url: https://fanyi.baidu.com/#auto/{flyclip option target_lang}/{flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.youdao-dict",name:"有道词典",category:"translation",icon:"有道",description:"Look up words in Youdao Dictionary.",descriptionZh:"有道词典划词查词与权威翻译释义。",hasOptions:!1,type:"url",configYaml:`name: Youdao Dictionary
identifier: com.flyclip.extension.youdao-dict
icon: 有道
actions:
  - title: 有道词典
    url: https://dict.youdao.com/search?q={flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.wikipedia",name:"Wikipedia",category:"translation",icon:"W",description:"Search Wikipedia encyclopedia in multiple languages.",descriptionZh:"在维基百科中搜索选中文本词条。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: Wikipedia
identifier: com.flyclip.extension.wikipedia
icon: iconify:simple-icons:wikipedia
options:
  - identifier: lang
    label: 语言版本
    type: multiple
    values: [zh, en, ja, de, fr, es, ru]
    default value: zh
actions:
  - title: Wikipedia
    url: https://{flyclip option lang}.wikipedia.org/wiki/{flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.mdn-web-docs",name:"MDN Web Docs",category:"translation",icon:"MDN",description:"Search web APIs, HTML, CSS, and JS reference docs on MDN.",descriptionZh:"搜索 MDN Web Docs 权威开发者文档与 API 规范。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: MDN Web Docs
identifier: com.flyclip.extension.mdn-web-docs
icon: MDN
options:
  - identifier: locale
    label: 文档语言
    type: multiple
    values: [zh-CN, en-US, ja, fr, es]
    default value: zh-CN
actions:
  - title: MDN
    url: https://developer.mozilla.org/{flyclip option locale}/search?q={flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.urban-dictionary",name:"Urban Dictionary",category:"translation",icon:"UD",description:"Look up slang and idioms on Urban Dictionary.",descriptionZh:"在 Urban Dictionary 查询英语流行俚语与俗语含义。",hasOptions:!1,type:"url",configYaml:`name: Urban Dictionary
identifier: com.flyclip.extension.urban-dictionary
icon: UD
actions:
  - title: Urban Dict
    url: https://www.urbandictionary.com/define.php?term={flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.google-search",name:"Google Search",category:"search_ai",icon:"G",description:"Search the web with Google Search.",descriptionZh:"使用 Google 搜索选中的关键词。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: Google Search
identifier: com.flyclip.extension.google-search
icon: iconify:simple-icons:google
options:
  - identifier: site
    label: 搜索域名
    type: multiple
    values: [google.com, google.com.hk, google.co.jp, google.co.uk]
    default value: google.com
actions:
  - title: Google
    url: https://www.{flyclip option site}/search?q=***
    requirements: [text]`},{id:"com.flyclip.extension.baidu-search",name:"百度搜索",category:"search_ai",icon:"百度",description:"Search with Baidu Search Engine.",descriptionZh:"使用百度搜索选中的关键词。",hasOptions:!1,type:"url",configYaml:`name: 百度搜索
identifier: com.flyclip.extension.baidu-search
icon: iconify:simple-icons:baidu
actions:
  - title: 百度
    url: https://www.baidu.com/s?wd=***
    requirements: [text]`},{id:"com.flyclip.extension.bing-search",name:"Bing Search",category:"search_ai",icon:"Bing",description:"Search with Microsoft Bing.",descriptionZh:"使用微软必应 Bing 搜索选中文本。",hasOptions:!1,type:"url",configYaml:`name: Bing Search
identifier: com.flyclip.extension.bing-search
icon: iconify:simple-icons:microsoftbing
actions:
  - title: Bing
    url: https://www.bing.com/search?q=***
    requirements: [text]`},{id:"com.flyclip.extension.duckduckgo",name:"DuckDuckGo",category:"search_ai",icon:"DDG",description:"Privacy search with DuckDuckGo.",descriptionZh:"使用 DuckDuckGo 隐私无追踪搜索引擎。",hasOptions:!1,type:"url",configYaml:`name: DuckDuckGo
identifier: com.flyclip.extension.duckduckgo
icon: iconify:simple-icons:duckduckgo
actions:
  - title: DDG
    url: https://duckduckgo.com/?q=***
    requirements: [text]`},{id:"com.flyclip.extension.github-search",name:"GitHub Search",category:"search_ai",icon:"GH",description:"Search repositories, code, and issues on GitHub.",descriptionZh:"在 GitHub 搜索开源仓库、源码片段或 Issue 问题。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: GitHub Search
identifier: com.flyclip.extension.github-search
icon: iconify:simple-icons:github
options:
  - identifier: search_type
    label: 搜索类型
    type: multiple
    values: [repositories, code, issues, commits, users]
    default value: repositories
actions:
  - title: GitHub
    url: https://github.com/search?q={flyclip text}&type={flyclip option search_type}
    requirements: [text]`},{id:"com.flyclip.extension.chatgpt",name:"ChatGPT",category:"search_ai",icon:"GPT",description:"Ask ChatGPT or analyze text with OpenAI.",descriptionZh:"快速将选中文本发送给 ChatGPT 进行提问或智能分析。",hasOptions:!1,type:"url",configYaml:`name: ChatGPT
identifier: com.flyclip.extension.chatgpt
icon: iconify:simple-icons:openai
actions:
  - title: ChatGPT
    url: https://chatgpt.com/?q=***
    requirements: [text]`},{id:"com.flyclip.extension.claude",name:"Claude",category:"search_ai",icon:"Claude",description:"Send selected text to Anthropic Claude AI.",descriptionZh:"发送选中文本给 Anthropic Claude 对话交互。",hasOptions:!1,type:"url",configYaml:`name: Claude
identifier: com.flyclip.extension.claude
icon: iconify:simple-icons:anthropic
actions:
  - title: Claude
    url: https://claude.ai/new?q=***
    requirements: [text]`},{id:"com.flyclip.extension.deepseek",name:"DeepSeek",category:"search_ai",icon:"DS",description:"Ask DeepSeek AI with selected text.",descriptionZh:"发送选中文本给 DeepSeek 深度求索 AI 助手分析。",hasOptions:!1,type:"url",configYaml:`name: DeepSeek
identifier: com.flyclip.extension.deepseek
icon: DS
actions:
  - title: DeepSeek
    url: https://chat.deepseek.com/?q=***
    requirements: [text]`},{id:"com.flyclip.extension.zhihu-search",name:"知乎搜索",category:"search_ai",icon:"知",description:"Search questions and discussions on Zhihu.",descriptionZh:"在知乎搜索相关问题、高赞回答与专栏文章。",hasOptions:!1,type:"url",configYaml:`name: 知乎搜索
identifier: com.flyclip.extension.zhihu-search
icon: iconify:simple-icons:zhihu
actions:
  - title: 知乎
    url: https://www.zhihu.com/search?type=content&q=***
    requirements: [text]`},{id:"com.flyclip.extension.bilibili-search",name:"哔哩哔哩",category:"search_ai",icon:"B站",description:"Search anime, tutorials, and creators on Bilibili.",descriptionZh:"在哔哩哔哩搜索精选视频、教程与UP主。",hasOptions:!1,type:"url",configYaml:`name: 哔哩哔哩
identifier: com.flyclip.extension.bilibili-search
icon: iconify:simple-icons:bilibili
actions:
  - title: 哔哩哔哩
    url: https://search.bilibili.com/all?keyword=***
    requirements: [text]`},{id:"com.flyclip.extension.youtube-search",name:"YouTube",category:"search_ai",icon:"YT",description:"Search videos on YouTube.",descriptionZh:"在 YouTube 上搜索全球精彩视频。",hasOptions:!1,type:"url",configYaml:`name: YouTube
identifier: com.flyclip.extension.youtube-search
icon: iconify:simple-icons:youtube
actions:
  - title: YouTube
    url: https://www.youtube.com/results?search_query=***
    requirements: [text]`},{id:"com.flyclip.extension.case-converter",name:"Case Converter",category:"text_tools",icon:"Aa",description:"Convert text between UPPER, lower, Title, camelCase, snake_case, kebab-case.",descriptionZh:"全能大小写命名风格转换（大写/小写/词首/小驼峰/下划线/连字符）。",hasOptions:!1,type:"powershell",configYaml:`name: Case Converter
identifier: com.flyclip.extension.case-converter
icon: Aa
actions:
  - title: 大写 (UPPER)
    shell script: Write-Host -NoNewline $env:FLYCLIP_TEXT.ToUpper()
    after: paste-result
  - title: 小写 (lower)
    shell script: Write-Host -NoNewline $env:FLYCLIP_TEXT.ToLower()
    after: paste-result
  - title: 驼峰 (camelCase)
    shell script: |
      $words = [regex]::Split($env:FLYCLIP_TEXT, '[^a-zA-Z0-9]+') | Where-Object { $_ }
      $first = $words[0].ToLower()
      $rest = $words | Select-Object -Skip 1 | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower() }
      Write-Host -NoNewline ($first + ($rest -join ''))
    after: paste-result`},{id:"com.flyclip.extension.base64",name:"Base64",category:"text_tools",icon:"B64",description:"Encode or decode Base64 strings with optional URL-safe mode.",descriptionZh:"Base64 快速编码与解码，支持 URL 安全模式开关。",hasOptions:!0,optionsCount:1,type:"powershell",configYaml:`name: Base64
identifier: com.flyclip.extension.base64
icon: B64
options:
  - identifier: url_safe
    label: URL 安全模式 (- 和 _)
    type: boolean
    default value: false
actions:
  - title: Base64 编码
    shell script: |
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($env:FLYCLIP_TEXT)
      $b64 = [Convert]::ToBase64String($bytes)
      if ($env:FLYCLIP_OPTION_URL_SAFE -eq "1") { $b64 = $b64.Replace('+','-').Replace('/','_').TrimEnd('=') }
      Write-Host -NoNewline $b64
    after: paste-result
  - title: Base64 解码
    shell script: |
      $s = $env:FLYCLIP_TEXT.Trim()
      if ($env:FLYCLIP_OPTION_URL_SAFE -eq "1") { $s = $s.Replace('-','+').Replace('_','/') }
      Write-Host -NoNewline ([System.Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($s)))
    after: paste-result`},{id:"com.flyclip.extension.url-encode",name:"URL Encode",category:"text_tools",icon:"%20",description:"Percent-encode and decode URL parameters.",descriptionZh:"URL 百分号编码与反向解码。",hasOptions:!1,type:"powershell",configYaml:`name: URL Encode
identifier: com.flyclip.extension.url-encode
icon: "%20"
actions:
  - title: URL 编码
    shell script: Write-Host -NoNewline ([System.Uri]::EscapeDataString($env:FLYCLIP_TEXT))
    after: paste-result
  - title: URL 解码
    shell script: Write-Host -NoNewline ([System.Uri]::UnescapeDataString($env:FLYCLIP_TEXT))
    after: paste-result`},{id:"com.flyclip.extension.html-encode",name:"HTML Encode",category:"text_tools",icon:"<&>",description:"Encode or decode HTML special character entities.",descriptionZh:"HTML 特殊实体符号转义与反转义。",hasOptions:!1,type:"powershell",configYaml:`name: HTML Encode
identifier: com.flyclip.extension.html-encode
icon: "<&>"
actions:
  - title: HTML 转义
    shell script: Write-Host -NoNewline ([System.Net.WebUtility]::HtmlEncode($env:FLYCLIP_TEXT))
    after: paste-result
  - title: HTML 反转义
    shell script: Write-Host -NoNewline ([System.Net.WebUtility]::HtmlDecode($env:FLYCLIP_TEXT))
    after: paste-result`},{id:"com.flyclip.extension.json-formatter",name:"JSON Formatter",category:"text_tools",icon:"{}",description:"Prettify or minify JSON text in place.",descriptionZh:"JSON 格式化美化排版或单行压缩。",hasOptions:!1,type:"powershell",configYaml:`name: JSON Formatter
identifier: com.flyclip.extension.json-formatter
icon: "{}"
actions:
  - title: 格式化 JSON
    shell script: |
      $obj = $env:FLYCLIP_TEXT | ConvertFrom-Json
      Write-Host -NoNewline ($obj | ConvertTo-Json -Depth 100)
    after: paste-result
  - title: 压缩 JSON
    shell script: |
      $obj = $env:FLYCLIP_TEXT | ConvertFrom-Json
      Write-Host -NoNewline ($obj | ConvertTo-Json -Compress -Depth 100)
    after: paste-result`},{id:"com.flyclip.extension.text-statistics",name:"Text Statistics",category:"text_tools",icon:"123",description:"Count characters, words, lines, and bytes in selected text.",descriptionZh:"实时统计字符数、词数、行数与字节大小并展示于提示栏。",hasOptions:!1,type:"powershell",configYaml:`name: Text Statistics
identifier: com.flyclip.extension.text-statistics
icon: "123"
actions:
  - title: 字数统计
    shell script: |
      $t = $env:FLYCLIP_TEXT
      $chars = $t.Length
      $lines = ($t -split "\`r\`n|\`r|\`n").Length
      $words = ($t -split 's+' | Where-Object { $_ }).Length
      $bytes = [System.Text.Encoding]::UTF8.GetByteCount($t)
      Write-Host -NoNewline "$chars 字符 \xb7 $words 词 \xb7 $lines 行 \xb7 $bytes B"
    after: show-result`},{id:"com.flyclip.extension.sort-lines",name:"Sort Lines",category:"text_tools",icon:"AZ",description:"Sort lines ascending, descending, or remove duplicate lines.",descriptionZh:"多行文本升序、降序排序与行去重。",hasOptions:!0,optionsCount:1,type:"powershell",configYaml:`name: Sort Lines
identifier: com.flyclip.extension.sort-lines
icon: AZ
options:
  - identifier: case_sensitive
    label: 区分大小写
    type: boolean
    default value: false
actions:
  - title: 升序排序 (A-Z)
    shell script: |
      $lines = $env:FLYCLIP_TEXT -split "\`r\`n|\`r|\`n"
      Write-Host -NoNewline (($lines | Sort-Object) -join "\`r\`n")
    after: paste-result`},{id:"com.flyclip.extension.join-lines",name:"Join Lines",category:"text_tools",icon:"->",description:"Join multi-line text into a single line with custom delimiters.",descriptionZh:"多行合并为单行，支持指定逗号、空格、分号等分隔符。",hasOptions:!0,optionsCount:1,type:"powershell",configYaml:`name: Join Lines
identifier: com.flyclip.extension.join-lines
icon: ->
options:
  - identifier: delimiter
    label: 分隔符
    type: multiple
    values: [comma_space, comma, space, semicolon]
    default value: comma_space
actions:
  - title: 合并单行
    shell script: |
      $lines = $env:FLYCLIP_TEXT -split "\`r\`n|\`r|\`n" | Where-Object { $_.Trim() }
      $delim = switch ($env:FLYCLIP_OPTION_DELIMITER) { "comma" {","} "space" {" "} default {", "} }
      Write-Host -NoNewline ($lines -join $delim)
    after: paste-result`},{id:"com.flyclip.extension.remove-spaces",name:"Remove Spaces",category:"text_tools",icon:"␣",description:"Collapse duplicate spaces or strip all whitespace characters.",descriptionZh:"消除所有多余空格或压缩连续空白字符。",hasOptions:!1,type:"powershell",configYaml:`name: Remove Spaces
identifier: com.flyclip.extension.remove-spaces
icon: "␣"
actions:
  - title: 压缩空格
    shell script: Write-Host -NoNewline ([regex]::Replace($env:FLYCLIP_TEXT, 's+', ' ').Trim())
    after: paste-result
  - title: 消除所有空格
    shell script: Write-Host -NoNewline ([regex]::Replace($env:FLYCLIP_TEXT, 's+', ''))
    after: paste-result`},{id:"com.flyclip.extension.full-half-width",name:"全角半角转换",category:"text_tools",icon:"全半",description:"Convert between Full-width and Half-width characters.",descriptionZh:"全角标点字符与半角英文字符双向转换。",hasOptions:!1,type:"powershell",configYaml:`name: 全角半角转换
identifier: com.flyclip.extension.full-half-width
icon: 全半
actions:
  - title: 全角转半角
    shell script: |
      $chars = $env:FLYCLIP_TEXT.ToCharArray()
      for ($i=0; $i -lt $chars.Length; $i++) {
        $c = [int]$chars[$i]
        if ($c -eq 12288) { $chars[$i] = [char]32 }
        elseif ($c -ge 65281 -and $c -le 65374) { $chars[$i] = [char]($c - 65248) }
      }
      Write-Host -NoNewline (New-Object String(,$chars))
    after: paste-result`},{id:"com.flyclip.extension.timestamp-converter",name:"Timestamp Converter",category:"text_tools",icon:"⏱️",description:"Convert Unix epoch timestamps to local date-time strings.",descriptionZh:"Unix 时间戳转换为本地日期时间，或获取当前秒级时间戳。",hasOptions:!1,type:"powershell",configYaml:`name: Timestamp Converter
identifier: com.flyclip.extension.timestamp-converter
icon: ⏱️
actions:
  - title: 转日期
    shell script: |
      $s = $env:FLYCLIP_TEXT.Trim()
      if ($s -match '^d{10}$') {
        Write-Host -NoNewline ([DateTimeOffset]::FromUnixTimeSeconds([int64]$s).ToLocalTime().ToString("yyyy-MM-dd HH:mm:ss"))
      }
    after: paste-result
  - title: 当前时间戳
    shell script: Write-Host -NoNewline ([DateTimeOffset]::UtcNow.ToUnixTimeSeconds())
    after: paste-result`},{id:"com.flyclip.extension.markdown-tools",name:"Markdown Tools",category:"text_tools",icon:"MD",description:"Wrap text in Markdown bold, inline code, code blocks, or blockquotes.",descriptionZh:"快速为选中文本添加 Markdown 粗体、行内代码、代码块或引用标记。",hasOptions:!1,type:"powershell",configYaml:`name: Markdown Tools
identifier: com.flyclip.extension.markdown-tools
icon: MD
actions:
  - title: 粗体
    shell script: Write-Host -NoNewline ("**" + $env:FLYCLIP_TEXT + "**")
    after: paste-result
  - title: 行内代码
    shell script: Write-Host -NoNewline ("\`" + $env:FLYCLIP_TEXT + "\`")
    after: paste-result
  - title: 引用
    shell script: |
      $lines = $env:FLYCLIP_TEXT -split "\`r\`n|\`r|\`n"
      Write-Host -NoNewline (($lines | ForEach-Object { "> $_" }) -join "\`r\`n")
    after: paste-result`},{id:"com.flyclip.extension.calculate",name:"Calculate",category:"developer",icon:"=?",description:"Evaluate math expressions instantly (e.g. 128*1024, (50+20)/3).",descriptionZh:"即时计算选中的数学表达式并显示结果。",hasOptions:!1,type:"powershell",configYaml:`name: Calculate
identifier: com.flyclip.extension.calculate
icon: "=?"
actions:
  - title: 计算结果
    shell script: |
      $expr = $env:FLYCLIP_TEXT.Trim()
      $res = Invoke-Expression $expr
      Write-Host -NoNewline "$expr = $res"
    after: show-result`},{id:"com.flyclip.extension.regex101",name:"Regex101",category:"developer",icon:".*",description:"Test and debug regular expressions in Regex101.",descriptionZh:"在 Regex101 中测试并分析正则表达式。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: Regex101
identifier: com.flyclip.extension.regex101
icon: ".*"
options:
  - identifier: flavor
    label: 正则引擎
    type: multiple
    values: [pcre2, javascript, python, golang, rust]
    default value: pcre2
actions:
  - title: Regex101
    url: https://regex101.com/?regex={flyclip text}&flavor={flyclip option flavor}
    requirements: [text]`},{id:"com.flyclip.extension.ip-lookup",name:"IP Lookup",category:"developer",icon:"IP",description:"Query IP address geolocation and WHOIS info.",descriptionZh:"查询 IP 地址的地理位置、归属地与网络 ASN 信息。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: IP Lookup
identifier: com.flyclip.extension.ip-lookup
icon: IP
actions:
  - title: IP 查询
    url: https://ipinfo.io/{flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.hash-generator",name:"Hash Generator",category:"developer",icon:"#",description:"Calculate MD5 and SHA-256 hashes of selected text.",descriptionZh:"快速计算文本的 MD5 与 SHA-256 哈希值。",hasOptions:!0,optionsCount:1,type:"powershell",configYaml:`name: Hash Generator
identifier: com.flyclip.extension.hash-generator
icon: "#"
options:
  - identifier: uppercase
    label: 大写十六进制
    type: boolean
    default value: false
actions:
  - title: MD5
    shell script: |
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($env:FLYCLIP_TEXT)
      $md5 = [System.Security.Cryptography.MD5]::Create().ComputeHash($bytes)
      $hex = [BitConverter]::ToString($md5).Replace('-','')
      if ($env:FLYCLIP_OPTION_UPPERCASE -ne "1") { $hex = $hex.ToLower() }
      Write-Host -NoNewline $hex
    after: paste-result
  - title: SHA256
    shell script: |
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($env:FLYCLIP_TEXT)
      $sha = [System.Security.Cryptography.SHA256]::Create().ComputeHash($bytes)
      $hex = [BitConverter]::ToString($sha).Replace('-','')
      if ($env:FLYCLIP_OPTION_UPPERCASE -ne "1") { $hex = $hex.ToLower() }
      Write-Host -NoNewline $hex
    after: paste-result`},{id:"com.flyclip.extension.iconify-search",name:"Iconify Icons",category:"developer",icon:"Icon",description:"Search 200,000+ open source vector icons on Iconify.",descriptionZh:"在 Iconify 搜索超过 20 万个开源矢量图标与 SVG 代码。",hasOptions:!1,type:"url",configYaml:`name: Iconify Search
identifier: com.flyclip.extension.iconify-search
icon: iconify:simple-icons:iconify
actions:
  - title: Iconify
    url: https://icon-sets.iconify.design/?query=***
    requirements: [text]`},{id:"com.flyclip.extension.jd-search",name:"京东搜索",category:"shopping",icon:"JD",description:"Search products on JD.com.",descriptionZh:"在京东商城搜索选中的商品与数码好物。",hasOptions:!1,type:"url",configYaml:`name: 京东搜索
identifier: com.flyclip.extension.jd-search
icon: iconify:simple-icons:jd
actions:
  - title: 京东
    url: https://search.jd.com/Search?keyword=***
    requirements: [text]`},{id:"com.flyclip.extension.taobao-search",name:"淘宝搜索",category:"shopping",icon:"淘",description:"Search items and deals on Taobao.",descriptionZh:"在淘宝网搜索选中的商品宝贝与优惠。",hasOptions:!1,type:"url",configYaml:`name: 淘宝搜索
identifier: com.flyclip.extension.taobao-search
icon: iconify:simple-icons:taobao
actions:
  - title: 淘宝
    url: https://s.taobao.com/search?q=***
    requirements: [text]`},{id:"com.flyclip.extension.douban-search",name:"豆瓣搜索",category:"shopping",icon:"豆",description:"Search movies, books, and music on Douban.",descriptionZh:"在豆瓣搜索高分电影、热门图书与音乐条目。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: 豆瓣搜索
identifier: com.flyclip.extension.douban-search
icon: iconify:simple-icons:douban
options:
  - identifier: cat
    label: 搜索分类
    type: multiple
    values: ["1001", "1002", "1003"]
    default value: "1001"
actions:
  - title: 豆瓣
    url: https://www.douban.com/search?cat={flyclip option cat}&q=***
    requirements: [text]`},{id:"com.flyclip.extension.imdb",name:"IMDb",category:"shopping",icon:"IMDb",description:"Search movies, TV shows, and cast on IMDb.",descriptionZh:"在 IMDb 数据库搜索电影、剧集与演员资料。",hasOptions:!1,type:"url",configYaml:`name: IMDb
identifier: com.flyclip.extension.imdb
icon: iconify:simple-icons:imdb
actions:
  - title: IMDb
    url: https://www.imdb.com/find?q=***
    requirements: [text]`},{id:"com.flyclip.extension.amazon",name:"Amazon",category:"shopping",icon:"Amz",description:"Search Amazon worldwide with site selection.",descriptionZh:"在全球 Amazon 亚马逊商城（美/中/日/英/德）搜索商品。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name: Amazon
identifier: com.flyclip.extension.amazon
icon: iconify:simple-icons:amazon
options:
  - identifier: site
    label: 亚马逊商城站点
    type: multiple
    values: [amazon.com, amazon.cn, amazon.co.jp, amazon.co.uk, amazon.de]
    default value: amazon.com
actions:
  - title: Amazon
    url: https://www.{flyclip option site}/s?k=***
    spaces as plus: true
    requirements: [text]`}];e.s(["EXTENSIONS_DATA",0,t,"getExtensionPackageName",0,function(e){return({"com.flyclip.extension.pot-desktop":"PotTranslate","com.flyclip.extension.stranslate":"STranslate","com.flyclip.extension.google-translate":"GoogleTranslate","com.flyclip.extension.deepl":"DeepLTranslate","com.flyclip.extension.baidu-translate":"BaiduTranslate","com.flyclip.extension.youdao":"YoudaoTranslate","com.flyclip.extension.chatgpt":"ChatGPT","com.flyclip.extension.claude":"Claude","com.flyclip.extension.deepseek":"DeepSeek","com.flyclip.extension.google-search":"GoogleSearch","com.flyclip.extension.bing":"BingSearch","com.flyclip.extension.baidu":"BaiduSearch","com.flyclip.extension.duckduckgo":"DuckDuckGo","com.flyclip.extension.github":"GitHubSearch","com.flyclip.extension.wikipedia":"Wikipedia","com.flyclip.extension.zhihu":"ZhihuSearch","com.flyclip.extension.bilibili":"BilibiliSearch","com.flyclip.extension.youtube":"YouTubeSearch","com.flyclip.extension.mdn":"MDNWebDocs","com.flyclip.extension.case-converter":"CaseConverter","com.flyclip.extension.remove-spaces":"RemoveSpaces","com.flyclip.extension.join-lines":"JoinLines","com.flyclip.extension.sort-lines":"SortLines","com.flyclip.extension.full-half-width":"FullHalfWidth","com.flyclip.extension.text-statistics":"TextStatistics","com.flyclip.extension.base64":"Base64","com.flyclip.extension.url-encode":"URLEncode","com.flyclip.extension.html-encode":"HTMLEncode","com.flyclip.extension.json-formatter":"JSONFormatter","com.flyclip.extension.hash-generator":"HashGenerator","com.flyclip.extension.timestamp-convert":"TimestampConvert","com.flyclip.extension.calculate":"Calculate","com.flyclip.extension.regex-test":"RegexTest","com.flyclip.extension.markdown-tools":"MarkdownTools","com.flyclip.extension.ip-lookup":"IPLookup","com.flyclip.extension.search-icons":"SearchIcons","com.flyclip.extension.taobao":"Taobao","com.flyclip.extension.jd":"JD","com.flyclip.extension.douban":"Douban","com.flyclip.extension.imdb":"IMDb","com.flyclip.extension.urban-dictionary":"UrbanDictionary","com.flyclip.extension.amazon":"Amazon"})[e]||e.split(".").pop()||"Extension"}],7084);let i=(0,e.i(56420).default)("zap",[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]);e.s(["Zap",0,i],64569)}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89664,e=>{"use strict";let t=(0,e.i(56420).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",0,t],89664)},8734,e=>{"use strict";let t=(0,e.i(56420).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",0,t],8734)},66595,e=>{"use strict";let t=(0,e.i(56420).default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);e.s(["Search",0,t],66595)},28623,e=>{"use strict";let t=(0,e.i(56420).default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",0,t],28623)},93063,e=>{"use strict";var t=e.i(43476),i=e.i(71645);function o(e){return({"com.flyclip.extension.pot-desktop":"PotTranslate","com.flyclip.extension.stranslate":"STranslate","com.flyclip.extension.google-translate":"GoogleTranslate","com.flyclip.extension.deepl":"DeepLTranslate","com.flyclip.extension.baidu-translate":"BaiduTranslate","com.flyclip.extension.youdao":"YoudaoTranslate","com.flyclip.extension.chatgpt":"ChatGPT","com.flyclip.extension.claude":"Claude","com.flyclip.extension.deepseek":"DeepSeek","com.flyclip.extension.google-search":"GoogleSearch","com.flyclip.extension.bing":"BingSearch","com.flyclip.extension.baidu":"BaiduSearch","com.flyclip.extension.duckduckgo":"DuckDuckGo","com.flyclip.extension.github":"GitHubSearch","com.flyclip.extension.wikipedia":"Wikipedia","com.flyclip.extension.zhihu":"ZhihuSearch","com.flyclip.extension.bilibili":"BilibiliSearch","com.flyclip.extension.youtube":"YouTubeSearch","com.flyclip.extension.mdn":"MDNWebDocs","com.flyclip.extension.case-converter":"CaseConverter","com.flyclip.extension.remove-spaces":"RemoveSpaces","com.flyclip.extension.join-lines":"JoinLines","com.flyclip.extension.sort-lines":"SortLines","com.flyclip.extension.full-half-width":"FullHalfWidth","com.flyclip.extension.text-statistics":"TextStatistics","com.flyclip.extension.base64":"Base64","com.flyclip.extension.url-encode":"URLEncode","com.flyclip.extension.html-encode":"HTMLEncode","com.flyclip.extension.json-formatter":"JSONFormatter","com.flyclip.extension.hash-generator":"HashGenerator","com.flyclip.extension.timestamp-convert":"TimestampConvert","com.flyclip.extension.calculate":"Calculate","com.flyclip.extension.regex-test":"RegexTest","com.flyclip.extension.markdown-tools":"MarkdownTools","com.flyclip.extension.ip-lookup":"IPLookup","com.flyclip.extension.search-icons":"SearchIcons","com.flyclip.extension.taobao":"Taobao","com.flyclip.extension.jd":"JD","com.flyclip.extension.douban":"Douban","com.flyclip.extension.imdb":"IMDb","com.flyclip.extension.urban-dictionary":"UrbanDictionary","com.flyclip.extension.amazon":"Amazon"})[e]||e.split(".").pop()||"Extension"}let s=[{id:"com.flyclip.extension.pot-desktop",name:"Pot 划词翻译",category:"translation",icon:"Pot",description:"Send selected text to Pot Desktop via local HTTP API for instant translation/OCR.",descriptionZh:"通过本地 HTTP 服务将选中文本发送至 Pot Desktop 进行划词翻译或 OCR。",hasOptions:!0,optionsCount:2,type:"url",configYaml:`name: Pot 划词翻译
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
    requirements: [text]`}];var n=e.i(62368),l=e.i(56420);let a=(0,l.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,l.default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);function r({extension:e,onOpenModal:s}){let[l,p]=(0,i.useState)(!1),d=o(e.id),m=`/downloads/extensions/${d}.flyclipextz`;return(0,t.jsxs)("div",{className:"bg-[#1c1e27] border border-[#2d3142] hover:border-blue-500/60 rounded-xl p-5 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl group",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-start gap-3.5 mb-3",children:[(0,t.jsx)("div",{className:"w-11 h-11 rounded-lg bg-[#14161d] border border-[#2d3142] flex items-center justify-center font-bold text-base text-blue-400 group-hover:border-blue-500/40 transition-colors flex-shrink-0",children:e.icon}),(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("h3",{className:"font-bold text-slate-100 text-base leading-snug truncate",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-slate-500 font-mono truncate",children:e.id})]})]}),(0,t.jsx)("p",{className:"text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2",children:e.descriptionZh||e.description})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4 flex-wrap",children:[(0,t.jsx)("span",{className:"text-xs px-2 py-0.5 rounded bg-[#14161d] text-slate-400 border border-[#2d3142]",children:(e=>{switch(e){case"translation":return"翻译词典";case"search_ai":return"搜索与AI";case"text_tools":return"文本处理";case"developer":return"开发工具";case"shopping":return"电商媒体";default:return"通用"}})(e.category)}),(0,t.jsx)("span",{className:"text-xs px-2 py-0.5 rounded bg-[#14161d] text-slate-400 border border-[#2d3142]",children:e.type.toUpperCase()}),e.hasOptions&&(0,t.jsxs)("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1",children:[(0,t.jsx)(c,{size:11})," 选项配置"]})]}),(0,t.jsxs)("div",{className:"pt-3 border-t border-[#2d3142] flex items-center gap-2",children:[(0,t.jsxs)("a",{href:m,download:`${d}.flyclipextz`,className:"flex-1 py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/20",children:[(0,t.jsx)(n.Download,{size:13}),(0,t.jsx)("span",{children:"下载扩展包"})]}),(0,t.jsxs)("button",{onClick:()=>s(e),className:"py-1.5 px-3 rounded-lg bg-[#14161d] border border-[#2d3142] hover:border-slate-400 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors",children:[(0,t.jsx)(a,{size:13}),(0,t.jsx)("span",{children:"详情 / 源码"})]})]})]})]})}var p=e.i(63676),d=e.i(8734),m=e.i(89664),x=e.i(28623);function h({extension:e,onClose:s}){let[l,a]=(0,i.useState)(!1);if(!e)return null;let c=o(e.id),r=`/downloads/extensions/${c}.flyclipextz`,u=`# flyclip
${e.configYaml}`,f=()=>{navigator.clipboard.writeText(u),a(!0),setTimeout(()=>a(!1),2e3)};return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200",children:(0,t.jsxs)("div",{className:"w-full max-w-2xl bg-[#1c1e27] border border-[#2d3142] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[(0,t.jsxs)("div",{className:"p-5 border-b border-[#2d3142] flex items-center justify-between bg-[#14161d]",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-lg bg-[#1c1e27] border border-[#2d3142] flex items-center justify-center font-bold text-blue-400",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-bold text-slate-100 text-lg",children:e.name}),(0,t.jsx)("p",{className:"text-xs text-slate-500 font-mono",children:e.id})]})]}),(0,t.jsx)("button",{onClick:s,className:"w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:(0,t.jsx)(p.X,{size:18})})]}),(0,t.jsxs)("div",{className:"p-6 overflow-y-auto space-y-6 text-sm text-slate-300",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1",children:"功能描述"}),(0,t.jsx)("p",{className:"text-slate-300",children:e.descriptionZh||e.description})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block",children:"推荐安装方式"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[(0,t.jsxs)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-blue-500/30 space-y-2 flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5 font-bold text-white text-xs",children:[(0,t.jsx)(n.Download,{size:14,className:"text-blue-400"}),(0,t.jsx)("span",{children:"方式一：下载扩展包 (推荐)"})]}),(0,t.jsxs)("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:["下载 ",(0,t.jsxs)("code",{children:[c,".flyclipextz"]}),"，双击或拖入 FlyClip 即可自动安装并支持后续版本检查更新。"]})]}),(0,t.jsxs)("a",{href:r,download:`${c}.flyclipextz`,className:"w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-blue-500/20",children:[(0,t.jsx)(n.Download,{size:13}),(0,t.jsx)("span",{children:"下载 .flyclipextz 包"})]})]}),(0,t.jsxs)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-[#2d3142] space-y-2 flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5 font-bold text-white text-xs",children:[(0,t.jsx)(x.Sparkles,{size:14,className:"text-amber-400"}),(0,t.jsx)("span",{children:"方式二：划词即装 Snippet"})]}),(0,t.jsxs)("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:["用鼠标直接",(0,t.jsx)("strong",{children:"划选下方配置代码块"}),"，FlyClip 动作栏会自动亮起「安装扩展」魔法按钮，点击即刻安装！"]})]}),(0,t.jsxs)("button",{onClick:f,className:"w-full py-2 px-3 rounded-lg bg-[#1c1e27] border border-[#2d3142] hover:border-slate-400 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors",children:[l?(0,t.jsx)(m.Check,{size:13,className:"text-green-400"}):(0,t.jsx)(d.Copy,{size:13}),(0,t.jsx)("span",{children:l?"已复制 Snippet":"复制 Snippet 代码"})]})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,t.jsx)("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"扩展配置源码 (可直接鼠标划选安装)"}),(0,t.jsxs)("button",{onClick:f,className:"text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium",children:[l?(0,t.jsx)(m.Check,{size:12,className:"text-green-400"}):(0,t.jsx)(d.Copy,{size:12}),(0,t.jsx)("span",{children:l?"已复制":"复制代码"})]})]}),(0,t.jsx)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-[#2d3142] overflow-x-auto font-mono text-xs text-slate-200 leading-relaxed select-all",children:(0,t.jsx)("pre",{children:u})})]})]}),(0,t.jsxs)("div",{className:"p-4 border-t border-[#2d3142] bg-[#14161d] flex items-center justify-between gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-slate-500 hidden sm:inline",children:"文件格式：.flyclipext / .flyclipextz"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 w-full sm:w-auto justify-end",children:[(0,t.jsxs)("a",{href:r,download:`${c}.flyclipextz`,className:"px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/20",children:[(0,t.jsx)(n.Download,{size:15}),(0,t.jsx)("span",{children:"下载安装包"})]}),(0,t.jsx)("button",{onClick:s,className:"px-4 py-2 rounded-lg bg-[#1c1e27] border border-[#2d3142] hover:bg-[#242733] text-slate-300 font-medium text-xs sm:text-sm transition-colors",children:"关闭"})]})]})]})})}var u=e.i(66595);e.s(["default",0,function(){let[e,o]=(0,i.useState)(""),[n,l]=(0,i.useState)("all"),[a,c]=(0,i.useState)(null),p=s.filter(t=>{let i="all"===n||t.category===n,o=e.toLowerCase().trim(),s=!o||t.name.toLowerCase().includes(o)||t.id.toLowerCase().includes(o)||t.description&&t.description.toLowerCase().includes(o)||t.descriptionZh&&t.descriptionZh.toLowerCase().includes(o);return i&&s});return(0,t.jsxs)("div",{className:"py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[(0,t.jsxs)("div",{className:"text-center max-w-2xl mx-auto mb-10 space-y-2",children:[(0,t.jsx)("span",{className:"text-xs font-bold text-blue-400 uppercase tracking-wider",children:"Extension Marketplace"}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"官方与社区扩展中心"}),(0,t.jsx)("p",{className:"text-slate-400 text-sm sm:text-base",children:"已为 Windows 深度优化 40+ 个原生扩展，点击「复制 Snippet」或查看配置即可秒级使用。"})]}),(0,t.jsxs)("div",{className:"space-y-4 mb-10",children:[(0,t.jsxs)("div",{className:"relative w-full max-w-2xl mx-auto",children:[(0,t.jsx)(u.Search,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-500",size:18}),(0,t.jsx)("input",{type:"text",placeholder:"搜索扩展名称、标识符、功能描述或关键词...",value:e,onChange:e=>o(e.target.value),className:"w-full pl-11 pr-4 py-3 rounded-xl bg-[#1c1e27] border border-[#2d3142] text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500 shadow-lg"})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-2",children:[(0,t.jsx)("div",{className:"flex items-center gap-2 flex-wrap",children:[{id:"all",label:"全部"},{id:"translation",label:"翻译词典"},{id:"search_ai",label:"搜索与 AI"},{id:"text_tools",label:"文本处理"},{id:"developer",label:"开发工具"},{id:"shopping",label:"电商媒体"}].map(e=>(0,t.jsx)("button",{onClick:()=>l(e.id),className:`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${n===e.id?"bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20":"bg-[#1c1e27] border border-[#2d3142] text-slate-400 hover:text-white hover:border-slate-400"}`,children:e.label},e.id))}),(0,t.jsxs)("span",{className:"text-xs text-slate-500 font-medium",children:["找到 ",p.length," 个扩展"]})]})]}),p.length>0?(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(e=>(0,t.jsx)(r,{extension:e,onOpenModal:c},e.id))}):(0,t.jsxs)("div",{className:"text-center py-20 bg-[#14161d] border border-[#2d3142] rounded-2xl p-8",children:[(0,t.jsx)(x.Sparkles,{className:"w-10 h-10 text-slate-500 mx-auto mb-3"}),(0,t.jsx)("h3",{className:"text-lg font-bold text-white mb-1",children:"没有找到匹配的扩展"}),(0,t.jsx)("p",{className:"text-sm text-slate-400",children:"尝试更换搜索词或选择其他分类"})]}),(0,t.jsx)(h,{extension:a,onClose:()=>c(null)})]})}],93063)}]);
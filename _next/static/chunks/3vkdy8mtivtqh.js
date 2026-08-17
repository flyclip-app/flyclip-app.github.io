(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,93063,e=>{"use strict";var t=e.i(43476),i=e.i(71645);function n(e){return({"com.flyclip.extension.pot-desktop":"PotTranslate","com.flyclip.extension.stranslate":"STranslate","com.flyclip.extension.google-translate":"GoogleTranslate","com.flyclip.extension.deepl":"DeepLTranslate","com.flyclip.extension.baidu-translate":"BaiduTranslate","com.flyclip.extension.youdao":"YoudaoTranslate","com.flyclip.extension.chatgpt":"ChatGPT","com.flyclip.extension.claude":"Claude","com.flyclip.extension.deepseek":"DeepSeek","com.flyclip.extension.google-search":"GoogleSearch","com.flyclip.extension.bing":"BingSearch","com.flyclip.extension.baidu":"BaiduSearch","com.flyclip.extension.duckduckgo":"DuckDuckGo","com.flyclip.extension.github":"GitHubSearch","com.flyclip.extension.wikipedia":"Wikipedia","com.flyclip.extension.zhihu":"ZhihuSearch","com.flyclip.extension.bilibili":"BilibiliSearch","com.flyclip.extension.youtube":"YouTubeSearch","com.flyclip.extension.mdn":"MDNWebDocs","com.flyclip.extension.case-converter":"CaseConverter","com.flyclip.extension.remove-spaces":"RemoveSpaces","com.flyclip.extension.join-lines":"JoinLines","com.flyclip.extension.sort-lines":"SortLines","com.flyclip.extension.full-half-width":"FullHalfWidth","com.flyclip.extension.text-statistics":"TextStatistics","com.flyclip.extension.base64":"Base64","com.flyclip.extension.url-encode":"URLEncode","com.flyclip.extension.html-encode":"HTMLEncode","com.flyclip.extension.json-formatter":"JSONFormatter","com.flyclip.extension.hash-generator":"HashGenerator","com.flyclip.extension.timestamp-convert":"TimestampConvert","com.flyclip.extension.calculate":"Calculate","com.flyclip.extension.regex-test":"RegexTest","com.flyclip.extension.markdown-tools":"MarkdownTools","com.flyclip.extension.ip-lookup":"IPLookup","com.flyclip.extension.search-icons":"SearchIcons","com.flyclip.extension.taobao":"Taobao","com.flyclip.extension.jd":"JD","com.flyclip.extension.douban":"Douban","com.flyclip.extension.imdb":"IMDb","com.flyclip.extension.urban-dictionary":"UrbanDictionary","com.flyclip.extension.amazon":"Amazon"})[e]||e.split(".").pop()||"Extension"}let o=[{id:"com.flyclip.extension.pot-desktop",name:"Pot 划词翻译",nameZh:"Pot 划词翻译",nameEn:"Pot Translate",category:"translation",icon:"Pot",description:"Send selected text to Pot Desktop via local HTTP API for instant translation/OCR.",descriptionZh:"通过本地 HTTP 服务将选中文本发送至 Pot Desktop 进行划词翻译或 OCR。",hasOptions:!0,optionsCount:2,type:"js",configYaml:`name:
  en: Pot Translate
  zh-CN: Pot 划词翻译
description:
  en: Send selected text to Pot Desktop via local HTTP API for instant translation/OCR.
  zh-CN: 通过本地 HTTP 服务将选中文本发送至 Pot Desktop 进行划词翻译或 OCR。
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
    requirements: [text]`},{id:"com.flyclip.extension.stranslate",name:"STranslate 翻译",nameZh:"STranslate 翻译",nameEn:"STranslate",category:"translation",icon:"ST",description:"Trigger Windows open-source STranslate tool for deep translation.",descriptionZh:"通过本地服务或命令行调用 Windows 开源神器 STranslate 进行即时翻译。",hasOptions:!0,optionsCount:2,type:"js",configYaml:`name:
  en: STranslate
  zh-CN: STranslate 翻译
description:
  en: Trigger Windows open-source STranslate tool for deep translation.
  zh-CN: 通过本地服务或命令行调用 Windows 开源神器 STranslate 进行即时翻译。
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
    requirements: [text]`},{id:"com.flyclip.extension.google-translate",name:"Google Translate",nameZh:"Google 翻译",nameEn:"Google Translate",category:"translation",icon:"GT",description:"Translate selected text with Google Translate worldwide.",descriptionZh:"使用 Google 翻译选中文本，支持多站点切换与目标语言设定。",hasOptions:!0,optionsCount:2,type:"url",configYaml:`name:
  en: Google Translate
  zh-CN: Google 翻译
description:
  en: Translate selected text with Google Translate worldwide.
  zh-CN: 使用 Google 翻译选中文本，支持多站点切换与目标语言设定。
identifier: com.flyclip.extension.google-translate
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
    requirements: [text]`},{id:"com.flyclip.extension.deepl-translate",name:"DeepL Translate",nameZh:"DeepL 翻译",nameEn:"DeepL Translate",category:"translation",icon:"DL",description:"High-accuracy neural machine translation with DeepL.",descriptionZh:"使用 DeepL 神经网络高质量翻译选中文本。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: DeepL Translate
  zh-CN: DeepL 翻译
description:
  en: High-accuracy neural machine translation with DeepL.
  zh-CN: 使用 DeepL 神经网络高质量翻译选中文本。
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
    requirements: [text]`},{id:"com.flyclip.extension.baidu-translate",name:"百度翻译",nameZh:"百度翻译",nameEn:"Baidu Translate",category:"translation",icon:"百翻",description:"Translate text with Baidu Translate.",descriptionZh:"使用百度翻译引擎翻译选中文本。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: Baidu Translate
  zh-CN: 百度翻译
description:
  en: Translate text with Baidu Translate.
  zh-CN: 使用百度翻译引擎翻译选中文本。
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
    requirements: [text]`},{id:"com.flyclip.extension.youdao-dict",name:"有道词典",nameZh:"有道词典",nameEn:"Youdao Dictionary",category:"translation",icon:"有道",description:"Look up words in Youdao Dictionary.",descriptionZh:"有道词典划词查词与权威翻译释义。",hasOptions:!1,type:"url",configYaml:`name:
  en: Youdao Dictionary
  zh-CN: 有道词典
description:
  en: Look up words in Youdao Dictionary.
  zh-CN: 有道词典划词查词与权威翻译释义。
identifier: com.flyclip.extension.youdao-dict
icon: 有道
actions:
  - title: 有道词典
    url: https://dict.youdao.com/search?q={flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.wikipedia",name:"Wikipedia",nameZh:"维基百科",nameEn:"Wikipedia",category:"translation",icon:"W",description:"Search Wikipedia encyclopedia in multiple languages.",descriptionZh:"在维基百科中搜索选中文本词条。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: Wikipedia
  zh-CN: 维基百科
description:
  en: Search Wikipedia encyclopedia in multiple languages.
  zh-CN: 在维基百科中搜索选中文本词条。
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
    requirements: [text]`},{id:"com.flyclip.extension.mdn-web-docs",name:"MDN Web Docs",nameZh:"MDN 开发者文档",nameEn:"MDN Web Docs",category:"translation",icon:"MDN",description:"Search web APIs, HTML, CSS, and JS reference docs on MDN.",descriptionZh:"搜索 MDN Web Docs 权威开发者文档与 API 规范。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: MDN Web Docs
  zh-CN: MDN 开发者文档
description:
  en: Search web APIs, HTML, CSS, and JS reference docs on MDN.
  zh-CN: 搜索 MDN Web Docs 权威开发者文档与 API 规范。
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
    requirements: [text]`},{id:"com.flyclip.extension.urban-dictionary",name:"Urban Dictionary",nameZh:"Urban 俚语词典",nameEn:"Urban Dictionary",category:"translation",icon:"UD",description:"Look up slang and idioms on Urban Dictionary.",descriptionZh:"在 Urban Dictionary 查询英语流行俚语与俗语含义。",hasOptions:!1,type:"url",configYaml:`name:
  en: Urban Dictionary
  zh-CN: Urban 俚语词典
description:
  en: Look up slang and idioms on Urban Dictionary.
  zh-CN: 在 Urban Dictionary 查询英语流行俚语与俗语含义。
identifier: com.flyclip.extension.urban-dictionary
icon: UD
actions:
  - title: Urban Dict
    url: https://www.urbandictionary.com/define.php?term={flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.google-search",name:"Google Search",nameZh:"Google 搜索",nameEn:"Google Search",category:"search_ai",icon:"G",description:"Search the web with Google Search.",descriptionZh:"使用 Google 搜索选中的关键词。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: Google Search
  zh-CN: Google 搜索
description:
  en: Search the web with Google Search.
  zh-CN: 使用 Google 搜索选中的关键词。
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
    requirements: [text]`},{id:"com.flyclip.extension.baidu-search",name:"百度搜索",nameZh:"百度搜索",nameEn:"Baidu Search",category:"search_ai",icon:"百度",description:"Search with Baidu Search Engine.",descriptionZh:"使用百度搜索选中的关键词。",hasOptions:!1,type:"url",configYaml:`name:
  en: Baidu Search
  zh-CN: 百度搜索
description:
  en: Search with Baidu Search Engine.
  zh-CN: 使用百度搜索选中的关键词。
identifier: com.flyclip.extension.baidu-search
icon: iconify:simple-icons:baidu
actions:
  - title: 百度
    url: https://www.baidu.com/s?wd=***
    requirements: [text]`},{id:"com.flyclip.extension.bing-search",name:"Bing Search",nameZh:"必应搜索",nameEn:"Bing Search",category:"search_ai",icon:"Bing",description:"Search with Microsoft Bing.",descriptionZh:"使用微软必应 Bing 搜索选中文本。",hasOptions:!1,type:"url",configYaml:`name:
  en: Bing Search
  zh-CN: 必应搜索
description:
  en: Search with Microsoft Bing.
  zh-CN: 使用微软必应 Bing 搜索选中文本。
identifier: com.flyclip.extension.bing-search
icon: iconify:simple-icons:microsoftbing
actions:
  - title: Bing
    url: https://www.bing.com/search?q=***
    requirements: [text]`},{id:"com.flyclip.extension.duckduckgo",name:"DuckDuckGo",nameZh:"DuckDuckGo",nameEn:"DuckDuckGo",category:"search_ai",icon:"DDG",description:"Privacy search with DuckDuckGo.",descriptionZh:"使用 DuckDuckGo 隐私无追踪搜索引擎。",hasOptions:!1,type:"url",configYaml:`name:
  en: DuckDuckGo
  zh-CN: DuckDuckGo
description:
  en: Privacy search with DuckDuckGo.
  zh-CN: 使用 DuckDuckGo 隐私无追踪搜索引擎。
identifier: com.flyclip.extension.duckduckgo
icon: iconify:simple-icons:duckduckgo
actions:
  - title: DDG
    url: https://duckduckgo.com/?q=***
    requirements: [text]`},{id:"com.flyclip.extension.github-search",name:"GitHub Search",nameZh:"GitHub 搜索",nameEn:"GitHub Search",category:"search_ai",icon:"GH",description:"Search repositories, code, and issues on GitHub.",descriptionZh:"在 GitHub 搜索开源仓库、源码片段或 Issue 问题。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: GitHub Search
  zh-CN: GitHub 搜索
description:
  en: Search repositories, code, and issues on GitHub.
  zh-CN: 在 GitHub 搜索开源仓库、源码片段或 Issue 问题。
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
    requirements: [text]`},{id:"com.flyclip.extension.chatgpt",name:"ChatGPT",nameZh:"ChatGPT",nameEn:"ChatGPT",category:"search_ai",icon:"GPT",description:"Ask ChatGPT or analyze text with OpenAI.",descriptionZh:"快速将选中文本发送给 ChatGPT 进行提问或智能分析。",hasOptions:!1,type:"url",configYaml:`name:
  en: ChatGPT
  zh-CN: ChatGPT
description:
  en: Ask ChatGPT or analyze text with OpenAI.
  zh-CN: 快速将选中文本发送给 ChatGPT 进行提问或智能分析。
identifier: com.flyclip.extension.chatgpt
icon: iconify:simple-icons:openai
actions:
  - title: ChatGPT
    url: https://chatgpt.com/?q=***
    requirements: [text]`},{id:"com.flyclip.extension.claude",name:"Claude",nameZh:"Claude",nameEn:"Claude",category:"search_ai",icon:"Claude",description:"Send selected text to Anthropic Claude AI.",descriptionZh:"发送选中文本给 Anthropic Claude 对话交互。",hasOptions:!1,type:"url",configYaml:`name:
  en: Claude
  zh-CN: Claude
description:
  en: Send selected text to Anthropic Claude AI.
  zh-CN: 发送选中文本给 Anthropic Claude 对话交互。
identifier: com.flyclip.extension.claude
icon: iconify:simple-icons:anthropic
actions:
  - title: Claude
    url: https://claude.ai/new?q=***
    requirements: [text]`},{id:"com.flyclip.extension.deepseek",name:"DeepSeek",nameZh:"DeepSeek 深度求索",nameEn:"DeepSeek",category:"search_ai",icon:"DS",description:"Ask DeepSeek AI with selected text.",descriptionZh:"发送选中文本给 DeepSeek 深度求索 AI 助手分析。",hasOptions:!1,type:"url",configYaml:`name:
  en: DeepSeek
  zh-CN: DeepSeek 深度求索
description:
  en: Ask DeepSeek AI with selected text.
  zh-CN: 发送选中文本给 DeepSeek 深度求索 AI 助手分析。
identifier: com.flyclip.extension.deepseek
icon: DS
actions:
  - title: DeepSeek
    url: https://chat.deepseek.com/?q=***
    requirements: [text]`},{id:"com.flyclip.extension.zhihu-search",name:"知乎搜索",nameZh:"知乎搜索",nameEn:"Zhihu Search",category:"search_ai",icon:"知",description:"Search questions and discussions on Zhihu.",descriptionZh:"在知乎搜索相关问题、高赞回答与专栏文章。",hasOptions:!1,type:"url",configYaml:`name:
  en: Zhihu Search
  zh-CN: 知乎搜索
description:
  en: Search questions and discussions on Zhihu.
  zh-CN: 在知乎搜索相关问题、高赞回答与专栏文章。
identifier: com.flyclip.extension.zhihu-search
icon: iconify:simple-icons:zhihu
actions:
  - title: 知乎
    url: https://www.zhihu.com/search?type=content&q=***
    requirements: [text]`},{id:"com.flyclip.extension.bilibili-search",name:"哔哩哔哩",nameZh:"哔哩哔哩",nameEn:"Bilibili Search",category:"search_ai",icon:"B站",description:"Search anime, tutorials, and creators on Bilibili.",descriptionZh:"在哔哩哔哩搜索精选视频、教程与UP主。",hasOptions:!1,type:"url",configYaml:`name:
  en: Bilibili Search
  zh-CN: 哔哩哔哩
description:
  en: Search anime, tutorials, and creators on Bilibili.
  zh-CN: 在哔哩哔哩搜索精选视频、教程与UP主。
identifier: com.flyclip.extension.bilibili-search
icon: iconify:simple-icons:bilibili
actions:
  - title: 哔哩哔哩
    url: https://search.bilibili.com/all?keyword=***
    requirements: [text]`},{id:"com.flyclip.extension.youtube-search",name:"YouTube",nameZh:"YouTube",nameEn:"YouTube Search",category:"search_ai",icon:"YT",description:"Search videos on YouTube.",descriptionZh:"在 YouTube 上搜索全球精彩视频。",hasOptions:!1,type:"url",configYaml:`name:
  en: YouTube Search
  zh-CN: YouTube
description:
  en: Search videos on YouTube.
  zh-CN: 在 YouTube 上搜索全球精彩视频。
identifier: com.flyclip.extension.youtube-search
icon: iconify:simple-icons:youtube
actions:
  - title: YouTube
    url: https://www.youtube.com/results?search_query=***
    requirements: [text]`},{id:"com.flyclip.extension.case-converter",name:"Case Converter",nameZh:"大小写转换",nameEn:"Case Converter",category:"text_tools",icon:"Aa",description:"Convert text between UPPER, lower, Title, camelCase, snake_case, kebab-case.",descriptionZh:"全能大小写命名风格转换（大写/小写/词首/小驼峰/下划线/连字符）。",hasOptions:!1,type:"js",configYaml:`name:
  en: Case Converter
  zh-CN: 大小写转换
description:
  en: Convert text between UPPER, lower, Title, camelCase, snake_case, kebab-case.
  zh-CN: 全能大小写命名风格转换（大写/小写/词首/小驼峰/下划线/连字符）。
identifier: com.flyclip.extension.case-converter
icon: Aa
actions:
  - title: 大写 (UPPER)
    javascript: return flyclip.input.text.toUpperCase();
    after: paste-result
  - title: 小写 (lower)
    javascript: return flyclip.input.text.toLowerCase();
    after: paste-result
  - title: 词首大写 (Title)
    javascript: return flyclip.input.text.replace(/\\w\\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
    after: paste-result
  - title: 驼峰 (camelCase)
    javascript: |
      const words = flyclip.input.text.split(/[^a-zA-Z0-9]+/).filter(Boolean);
      if (words.length === 0) return flyclip.input.text;
      const first = words[0].toLowerCase();
      const rest = words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
      return first + rest;
    after: paste-result
  - title: 下划线 (snake_case)
    javascript: |
      return flyclip.input.text
        .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
        .replace(/[^a-zA-Z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .toLowerCase();
    after: paste-result
  - title: 连字符 (kebab-case)
    javascript: |
      return flyclip.input.text
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();
    after: paste-result`},{id:"com.flyclip.extension.base64",name:"Base64",nameZh:"Base64 编解码",nameEn:"Base64",category:"text_tools",icon:"B64",description:"Encode or decode Base64 strings with optional URL-safe mode.",descriptionZh:"Base64 快速编码与解码，支持 URL 安全模式开关。",hasOptions:!0,optionsCount:1,type:"js",configYaml:`name:
  en: Base64
  zh-CN: Base64 编解码
description:
  en: Encode or decode Base64 strings with optional URL-safe mode.
  zh-CN: Base64 快速编码与解码，支持 URL 安全模式开关。
identifier: com.flyclip.extension.base64
icon: B64
options:
  - identifier: url_safe
    label: URL 安全模式 (- 和 _)
    type: boolean
    default value: false
actions:
  - title: Base64 编码
    javascript: |
      const str = flyclip.input.text;
      let b64 = btoa(unescape(encodeURIComponent(str)));
      if (flyclip.options.url_safe === "1" || flyclip.options.url_safe === true) {
        b64 = b64.replace(/\\+/g, '-').replace(/\\//g, '_').replace(/=+$/, '');
      }
      return b64;
    after: paste-result
  - title: Base64 解码
    javascript: |
      let s = flyclip.input.text.trim();
      if (flyclip.options.url_safe === "1" || flyclip.options.url_safe === true) {
        s = s.replace(/-/g, '+').replace(/_/g, '/');
        while (s.length % 4 !== 0) { s += '='; }
      }
      try {
        return decodeURIComponent(escape(atob(s)));
      } catch (e) {
        return "[Base64 解码错误: 格式不合法]";
      }
    after: paste-result`},{id:"com.flyclip.extension.url-encode",name:"URL Encode",nameZh:"URL 编解码",nameEn:"URL Encode",category:"text_tools",icon:"%20",description:"Percent-encode and decode URL parameters.",descriptionZh:"URL 百分号编码与反向解码。",hasOptions:!1,type:"js",configYaml:`name:
  en: URL Encode
  zh-CN: URL 编解码
description:
  en: Percent-encode and decode URL parameters.
  zh-CN: URL 百分号编码与反向解码。
identifier: com.flyclip.extension.url-encode
icon: "%20"
actions:
  - title: URL 编码
    javascript: return encodeURIComponent(flyclip.input.text);
    after: paste-result
  - title: URL 解码
    javascript: |
      try {
        return decodeURIComponent(flyclip.input.text);
      } catch (e) {
        return flyclip.input.text;
      }
    after: paste-result`},{id:"com.flyclip.extension.html-encode",name:"HTML Encode",nameZh:"HTML 实体转义",nameEn:"HTML Encode",category:"text_tools",icon:"<&>",description:"Encode or decode HTML special character entities.",descriptionZh:"HTML 特殊实体符号转义与反转义。",hasOptions:!1,type:"js",configYaml:`name:
  en: HTML Encode
  zh-CN: HTML 实体转义
description:
  en: Encode or decode HTML special character entities.
  zh-CN: HTML 特殊实体符号转义与反转义。
identifier: com.flyclip.extension.html-encode
icon: "<&>"
actions:
  - title: HTML 转义
    javascript: |
      return flyclip.input.text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    after: paste-result
  - title: HTML 反转义
    javascript: |
      return flyclip.input.text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&#39;/g, "'");
    after: paste-result`},{id:"com.flyclip.extension.json-formatter",name:"JSON Formatter",nameZh:"JSON 格式化",nameEn:"JSON Formatter",category:"text_tools",icon:"{}",description:"Prettify or minify JSON text in place.",descriptionZh:"JSON 格式化美化排版或单行压缩。",hasOptions:!1,type:"js",configYaml:`name:
  en: 
  zh-CN: 
description:
  en: Prettify or minify JSON text in place.
  zh-CN: JSON 格式化美化排版或单行压缩。
identifier: com.flyclip.extension.json-formatter
icon: "{}"
actions:
  - title: 格式化 JSON
    javascript: |
      try {
        const obj = JSON.parse(flyclip.input.text);
        return JSON.stringify(obj, null, 2);
      } catch (e) {
        return "[JSON 解析失败: 语法格式有误]";
      }
    after: paste-result
  - title: 压缩 JSON
    javascript: |
      try {
        const obj = JSON.parse(flyclip.input.text);
        return JSON.stringify(obj);
      } catch (e) {
        return "[JSON 解析失败: 语法格式有误]";
      }
    after: paste-result`},{id:"com.flyclip.extension.text-statistics",name:"Text Statistics",nameZh:"字数与文本统计",nameEn:"Text Statistics",category:"text_tools",icon:"123",description:"Count characters, words, lines, and bytes in selected text.",descriptionZh:"实时统计字符数、词数、行数与字节大小并展示于提示栏。",hasOptions:!1,type:"js",configYaml:`name:
  en: Text Statistics
  zh-CN: 字数与文本统计
description:
  en: Count characters, words, lines, and bytes in selected text.
  zh-CN: 实时统计字符数、词数、行数与字节大小并展示于提示栏。
identifier: com.flyclip.extension.text-statistics
icon: "123"
actions:
  - title: 字数统计
    javascript: |
      const t = flyclip.input.text;
      const chars = t.length;
      const words = (t.match(/\\S+/g) || []).length;
      const lines = t.split(/\\r\\n|\\r|\\n/).length;
      const bytes = new TextEncoder().encode(t).length;
      return \`\${chars} 字符 \xb7 \${words} 词 \xb7 \${lines} 行 \xb7 \${bytes} B\`;
    after: show-result`},{id:"com.flyclip.extension.sort-lines",name:"Sort Lines",nameZh:"文本行排序与去重",nameEn:"Sort Lines",category:"text_tools",icon:"AZ",description:"Sort lines ascending, descending, or remove duplicate lines.",descriptionZh:"多行文本升序、降序排序与行去重。",hasOptions:!0,optionsCount:1,type:"js",configYaml:`name:
  en: Sort Lines
  zh-CN: 文本行排序与去重
description:
  en: Sort lines ascending, descending, or remove duplicate lines.
  zh-CN: 多行文本升序、降序排序与行去重。
identifier: com.flyclip.extension.sort-lines
icon: AZ
options:
  - identifier: case_sensitive
    label: 区分大小写
    type: boolean
    default value: false
actions:
  - title: 升序排序 (A-Z)
    javascript: |
      const cs = flyclip.options.case_sensitive === "1" || flyclip.options.case_sensitive === true;
      const lines = flyclip.input.text.split(/\\r\\n|\\r|\\n/);
      lines.sort((a, b) => cs ? a.localeCompare(b, undefined, { sensitivity: 'case' }) : a.localeCompare(b));
      return lines.join("\\n");
    after: paste-result
  - title: 降序排序 (Z-A)
    javascript: |
      const cs = flyclip.options.case_sensitive === "1" || flyclip.options.case_sensitive === true;
      const lines = flyclip.input.text.split(/\\r\\n|\\r|\\n/);
      lines.sort((a, b) => cs ? b.localeCompare(a, undefined, { sensitivity: 'case' }) : b.localeCompare(a));
      return lines.join("\\n");
    after: paste-result
  - title: 行去重 (Unique)
    javascript: |
      const cs = flyclip.options.case_sensitive === "1" || flyclip.options.case_sensitive === true;
      const lines = flyclip.input.text.split(/\\r\\n|\\r|\\n/);
      if (cs) {
        return Array.from(new Set(lines)).join("\\n");
      } else {
        const seen = new Set();
        const result = [];
        for (const line of lines) {
          const lower = line.toLowerCase();
          if (!seen.has(lower)) { seen.add(lower); result.push(line); }
        }
        return result.join("\\n");
      }
    after: paste-result`},{id:"com.flyclip.extension.join-lines",name:"Join Lines",nameZh:"多行合并为单行",nameEn:"Join Lines",category:"text_tools",icon:"->",description:"Join multi-line text into a single line with custom delimiters.",descriptionZh:"多行合并为单行，支持指定逗号、空格、分号等分隔符。",hasOptions:!0,optionsCount:1,type:"js",configYaml:`name:
  en: Join Lines
  zh-CN: 多行合并为单行
description:
  en: Join multi-line text into a single line with custom delimiters.
  zh-CN: 多行合并为单行，支持指定逗号、空格、分号等分隔符。
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
    javascript: |
      const lines = flyclip.input.text.split(/\\r\\n|\\r|\\n/).filter(l => l.trim().length > 0);
      const delimMap = { comma: ",", space: " ", semicolon: "; ", comma_space: ", " };
      const delim = delimMap[flyclip.options.delimiter] || ", ";
      return lines.join(delim);
    after: paste-result`},{id:"com.flyclip.extension.remove-spaces",name:"Remove Spaces",nameZh:"清除多余空格",nameEn:"Remove Spaces",category:"text_tools",icon:"␣",description:"Collapse duplicate spaces or strip all whitespace characters.",descriptionZh:"消除所有多余空格或压缩连续空白字符。",hasOptions:!1,type:"js",configYaml:`name:
  en: Remove Spaces
  zh-CN: 清除多余空格
description:
  en: Collapse duplicate spaces or strip all whitespace characters.
  zh-CN: 消除所有多余空格或压缩连续空白字符。
identifier: com.flyclip.extension.remove-spaces
icon: "␣"
actions:
  - title: 压缩空格
    javascript: return flyclip.input.text.replace(/\\s+/g, ' ').trim();
    after: paste-result
  - title: 消除所有空格
    javascript: return flyclip.input.text.replace(/\\s+/g, '');
    after: paste-result`},{id:"com.flyclip.extension.full-half-width",name:"全角半角转换",nameZh:"全角半角转换",nameEn:"Full/Half Width",category:"text_tools",icon:"全半",description:"Convert between Full-width and Half-width characters.",descriptionZh:"全角标点字符与半角英文字符双向转换。",hasOptions:!1,type:"js",configYaml:`name:
  en: Full/Half Width
  zh-CN: 全角半角转换
description:
  en: Convert between Full-width and Half-width characters.
  zh-CN: 全角标点字符与半角英文字符双向转换。
identifier: com.flyclip.extension.full-half-width
icon: 全半
actions:
  - title: 全角转半角
    javascript: |
      let str = "";
      for (let i = 0; i < flyclip.input.text.length; i++) {
        let code = flyclip.input.text.charCodeAt(i);
        if (code === 12288) str += String.fromCharCode(32);
        else if (code >= 65281 && code <= 65374) str += String.fromCharCode(code - 65248);
        else str += flyclip.input.text[i];
      }
      return str;
    after: paste-result
  - title: 半角转全角
    javascript: |
      let str = "";
      for (let i = 0; i < flyclip.input.text.length; i++) {
        let code = flyclip.input.text.charCodeAt(i);
        if (code === 32) str += String.fromCharCode(12288);
        else if (code >= 33 && code <= 126) str += String.fromCharCode(code + 65248);
        else str += flyclip.input.text[i];
      }
      return str;
    after: paste-result`},{id:"com.flyclip.extension.timestamp-converter",name:"Timestamp Converter",nameZh:"时间戳转换",nameEn:"Timestamp Converter",category:"text_tools",icon:"⏱️",description:"Convert Unix epoch timestamps to local date-time strings.",descriptionZh:"Unix 时间戳转换为本地日期时间，或获取当前秒级时间戳。",hasOptions:!1,type:"js",configYaml:`name:
  en: Timestamp Converter
  zh-CN: 时间戳转换
description:
  en: Convert Unix epoch timestamps to local date-time strings.
  zh-CN: Unix 时间戳转换为本地日期时间，或获取当前秒级时间戳。
identifier: com.flyclip.extension.timestamp-converter
icon: ⏱️
actions:
  - title: 转日期
    javascript: |
      const s = flyclip.input.text.trim();
      if (/^\\d{10}$/.test(s)) {
        const d = new Date(parseInt(s, 10) * 1000);
        return d.getFullYear() + '-' +
          String(d.getMonth() + 1).padStart(2, '0') + '-' +
          String(d.getDate()).padStart(2, '0') + ' ' +
          String(d.getHours()).padStart(2, '0') + ':' +
          String(d.getMinutes()).padStart(2, '0') + ':' +
          String(d.getSeconds()).padStart(2, '0');
      } else if (/^\\d{13}$/.test(s)) {
        const d = new Date(parseInt(s, 10));
        return d.getFullYear() + '-' +
          String(d.getMonth() + 1).padStart(2, '0') + '-' +
          String(d.getDate()).padStart(2, '0') + ' ' +
          String(d.getHours()).padStart(2, '0') + ':' +
          String(d.getMinutes()).padStart(2, '0') + ':' +
          String(d.getSeconds()).padStart(2, '0') + '.' +
          String(d.getMilliseconds()).padStart(3, '0');
      } else {
        return "[无效的时间戳: 需为 10 位秒级或 13 位毫秒级数字]";
      }
    after: paste-result
  - title: 当前时间戳
    javascript: return Math.floor(Date.now() / 1000).toString();
    after: paste-result`},{id:"com.flyclip.extension.markdown-tools",name:"Markdown Tools",nameZh:"Markdown 格式化",nameEn:"Markdown Tools",category:"text_tools",icon:"MD",description:"Wrap text in Markdown bold, inline code, code blocks, or blockquotes.",descriptionZh:"快速为选中文本添加 Markdown 粗体、行内代码、代码块或引用标记。",hasOptions:!1,type:"js",configYaml:`name:
  en: Markdown Tools
  zh-CN: Markdown 格式化
description:
  en: Wrap text in Markdown bold, inline code, code blocks, or blockquotes.
  zh-CN: 快速为选中文本添加 Markdown 粗体、行内代码、代码块或引用标记。
identifier: com.flyclip.extension.markdown-tools
icon: MD
actions:
  - title: 粗体
    javascript: return \`**\${flyclip.input.text}**\`;
    after: paste-result
  - title: 行内代码
    javascript: return \`\\\`\${flyclip.input.text}\\\`\`;
    after: paste-result
  - title: 引用
    javascript: |
      return flyclip.input.text
        .split(/\\r\\n|\\r|\\n/)
        .map(line => \`> \${line}\`)
        .join("\\n");
    after: paste-result`},{id:"com.flyclip.extension.calculate",name:"Calculate",nameZh:"即时数学计算",nameEn:"Calculate",category:"developer",icon:"=?",description:"Evaluate math expressions instantly (e.g. 128*1024, (50+20)/3).",descriptionZh:"即时计算选中的数学表达式并显示结果。",hasOptions:!1,type:"js",configYaml:`name:
  en: Calculate
  zh-CN: 即时数学计算
description:
  en: Evaluate math expressions instantly (e.g. 128*1024, (50+20)/3).
  zh-CN: 即时计算选中的数学表达式并显示结果。
identifier: com.flyclip.extension.calculate
icon: "=?"
actions:
  - title: 计算结果
    javascript: |
      const expr = flyclip.input.text.trim();
      try {
        const res = Function(\`'use strict'; return (\${expr})\`)();
        return \`\${expr} = \${res}\`;
      } catch (e) {
        return "[计算出错: 表达式无效]";
      }
    after: show-result`},{id:"com.flyclip.extension.regex101",name:"Regex101",nameZh:"Regex101 正则测试",nameEn:"Regex101",category:"developer",icon:".*",description:"Test and debug regular expressions in Regex101.",descriptionZh:"在 Regex101 中测试并分析正则表达式。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: Regex101
  zh-CN: Regex101 正则测试
description:
  en: Test and debug regular expressions in Regex101.
  zh-CN: 在 Regex101 中测试并分析正则表达式。
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
    requirements: [text]`},{id:"com.flyclip.extension.ip-lookup",name:"IP Lookup",nameZh:"IP 归属地查询",nameEn:"IP Lookup",category:"developer",icon:"IP",description:"Query IP address geolocation and WHOIS info.",descriptionZh:"查询 IP 地址的地理位置、归属地与网络 ASN 信息。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: IP Lookup
  zh-CN: IP 归属地查询
description:
  en: Query IP address geolocation and WHOIS info.
  zh-CN: 查询 IP 地址的地理位置、归属地与网络 ASN 信息。
identifier: com.flyclip.extension.ip-lookup
icon: IP
actions:
  - title: IP 查询
    url: https://ipinfo.io/{flyclip text}
    requirements: [text]`},{id:"com.flyclip.extension.hash-generator",name:"Hash Generator",nameZh:"哈希值计算",nameEn:"Hash Generator",category:"developer",icon:"#",description:"Calculate MD5 and SHA-256 hashes of selected text.",descriptionZh:"快速计算文本的 MD5 与 SHA-256 哈希值。",hasOptions:!0,optionsCount:1,type:"powershell",configYaml:`name:
  en: Hash Generator
  zh-CN: 哈希值计算
description:
  en: Calculate MD5 and SHA-256 hashes of selected text.
  zh-CN: 快速计算文本的 MD5 与 SHA-256 哈希值。
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
    after: paste-result`},{id:"com.flyclip.extension.iconify-search",name:"Iconify Icons",nameZh:"Iconify 矢量图标",nameEn:"Iconify Icons",category:"developer",icon:"Icon",description:"Search 200,000+ open source vector icons on Iconify.",descriptionZh:"在 Iconify 搜索超过 20 万个开源矢量图标与 SVG 代码。",hasOptions:!1,type:"url",configYaml:`name:
  en: Iconify Icons
  zh-CN: Iconify 矢量图标
description:
  en: Search 200,000+ open source vector icons on Iconify.
  zh-CN: 在 Iconify 搜索超过 20 万个开源矢量图标与 SVG 代码。
identifier: com.flyclip.extension.iconify-search
icon: iconify:simple-icons:iconify
actions:
  - title: Iconify
    url: https://icon-sets.iconify.design/?query=***
    requirements: [text]`},{id:"com.flyclip.extension.jd-search",name:"京东搜索",nameZh:"京东搜索",nameEn:"JD Search",category:"shopping",icon:"JD",description:"Search products on JD.com.",descriptionZh:"在京东商城搜索选中的商品与数码好物。",hasOptions:!1,type:"url",configYaml:`name:
  en: JD Search
  zh-CN: 京东搜索
description:
  en: Search products on JD.com.
  zh-CN: 在京东商城搜索选中的商品与数码好物。
identifier: com.flyclip.extension.jd-search
icon: iconify:simple-icons:jd
actions:
  - title: 京东
    url: https://search.jd.com/Search?keyword=***
    requirements: [text]`},{id:"com.flyclip.extension.taobao-search",name:"淘宝搜索",nameZh:"淘宝搜索",nameEn:"Taobao Search",category:"shopping",icon:"淘",description:"Search items and deals on Taobao.",descriptionZh:"在淘宝网搜索选中的商品宝贝与优惠。",hasOptions:!1,type:"url",configYaml:`name:
  en: Taobao Search
  zh-CN: 淘宝搜索
description:
  en: Search items and deals on Taobao.
  zh-CN: 在淘宝网搜索选中的商品宝贝与优惠。
identifier: com.flyclip.extension.taobao-search
icon: iconify:simple-icons:taobao
actions:
  - title: 淘宝
    url: https://s.taobao.com/search?q=***
    requirements: [text]`},{id:"com.flyclip.extension.douban-search",name:"豆瓣搜索",nameZh:"豆瓣搜索",nameEn:"Douban Search",category:"shopping",icon:"豆",description:"Search movies, books, and music on Douban.",descriptionZh:"在豆瓣搜索高分电影、热门图书与音乐条目。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: Douban Search
  zh-CN: 豆瓣搜索
description:
  en: Search movies, books, and music on Douban.
  zh-CN: 在豆瓣搜索高分电影、热门图书与音乐条目。
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
    requirements: [text]`},{id:"com.flyclip.extension.imdb",name:"IMDb",nameZh:"IMDb 影视资料",nameEn:"IMDb",category:"shopping",icon:"IMDb",description:"Search movies, TV shows, and cast on IMDb.",descriptionZh:"在 IMDb 数据库搜索电影、剧集与演员资料。",hasOptions:!1,type:"url",configYaml:`name:
  en: IMDb
  zh-CN: IMDb 影视资料
description:
  en: Search movies, TV shows, and cast on IMDb.
  zh-CN: 在 IMDb 数据库搜索电影、剧集与演员资料。
identifier: com.flyclip.extension.imdb
icon: iconify:simple-icons:imdb
actions:
  - title: IMDb
    url: https://www.imdb.com/find?q=***
    requirements: [text]`},{id:"com.flyclip.extension.amazon",name:"Amazon",nameZh:"亚马逊商城",nameEn:"Amazon",category:"shopping",icon:"Amz",description:"Search Amazon worldwide with site selection.",descriptionZh:"在全球 Amazon 亚马逊商城（美/中/日/英/德）搜索商品。",hasOptions:!0,optionsCount:1,type:"url",configYaml:`name:
  en: Amazon
  zh-CN: 亚马逊商城
description:
  en: Search Amazon worldwide with site selection.
  zh-CN: 在全球 Amazon 亚马逊商城（美/中/日/英/德）搜索商品。
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
    requirements: [text]`}];var s=e.i(62368),a=e.i(56420);let l=(0,a.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),r=(0,a.default)("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var c=e.i(64569),p=e.i(81917);function d({extension:e,onOpenModal:i}){let{lang:o,t:a}=(0,p.useI18n)(),m=n(e.id),h=`https://flyclip-app.github.io/downloads/extensions/${m}.flyclipextz`,u=`flyclip://install-extension?url=${encodeURIComponent(h)}&id=${encodeURIComponent(e.id)}&name=${encodeURIComponent(e.name)}`,x=`/downloads/extensions/${m}.flyclipextz`;return(0,t.jsxs)("div",{className:"bg-[#1c1e27] border border-[#2d3142] hover:border-blue-500/60 rounded-xl p-5 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl group",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-start gap-3.5 mb-3",children:[(0,t.jsx)("div",{className:"w-11 h-11 rounded-lg bg-[#14161d] border border-[#2d3142] flex items-center justify-center font-bold text-base text-blue-400 group-hover:border-blue-500/40 transition-colors flex-shrink-0",children:e.icon}),(0,t.jsxs)("div",{className:"min-w-0 flex-1",children:[(0,t.jsx)("h3",{className:"font-bold text-slate-100 text-base leading-snug truncate",children:"en"===o?e.nameEn||e.name:e.nameZh||e.name}),(0,t.jsx)("p",{className:"text-xs text-slate-500 font-mono truncate",children:e.id})]})]}),(0,t.jsx)("p",{className:"text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2",children:"en"===o?e.description||e.descriptionZh:e.descriptionZh||e.description})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4 flex-wrap",children:[(0,t.jsx)("span",{className:"text-xs px-2 py-0.5 rounded bg-[#14161d] text-slate-400 border border-[#2d3142]",children:(e=>{if("en"===o)switch(e){case"translation":return"Translation";case"search_ai":return"Search & AI";case"text_tools":return"Productivity";case"developer":return"Developer";case"shopping":return"Utilities";default:return"General"}switch(e){case"translation":return"翻译词典";case"search_ai":return"搜索与AI";case"text_tools":return"文本处理";case"developer":return"开发工具";case"shopping":return"电商媒体";default:return"通用"}})(e.category)}),(0,t.jsx)("span",{className:`text-xs px-2 py-0.5 rounded border font-medium ${"js"===e.type?"bg-emerald-500/10 text-emerald-400 border-emerald-500/20":"url"===e.type?"bg-blue-500/10 text-blue-400 border-blue-500/20":"powershell"===e.type?"bg-amber-500/10 text-amber-400 border-amber-500/20":"bg-[#14161d] text-slate-400 border-[#2d3142]"}`,children:(e=>{if("en"===o)switch(e){case"js":return"JavaScript";case"url":return"URL Action";case"powershell":return"PowerShell";case"keys":return"Key Combo";default:return e.toUpperCase()}switch(e){case"js":return"JavaScript";case"url":return"URL 模板";case"powershell":return"PowerShell";case"keys":return"快捷键";default:return e.toUpperCase()}})(e.type)}),e.hasOptions&&(0,t.jsxs)("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1",children:[(0,t.jsx)(r,{size:11})," ","zh"===o?"选项配置":"Options"]})]}),(0,t.jsxs)("div",{className:"pt-3 border-t border-[#2d3142] flex items-center gap-2",children:[(0,t.jsxs)("button",{onClick:t=>{t.preventDefault();try{window.open(u,"_blank")}catch(e){}i(e,!0)},title:"zh"===o?"一键打开安装引导并唤起客户端":"One-click install into FlyClip",className:"flex-1 py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/20 active:scale-95",children:[(0,t.jsx)(c.Zap,{size:13,className:"text-amber-300"}),(0,t.jsx)("span",{children:a("extensions.installBtn")})]}),(0,t.jsx)("a",{href:x,download:`${m}.flyclipextz`,title:"zh"===o?"下载离线 .flyclipextz 文件":"Download offline .flyclipextz file",className:"p-1.5 rounded-lg bg-[#14161d] border border-[#2d3142] hover:border-slate-400 text-slate-300 hover:text-white transition-colors",children:(0,t.jsx)(s.Download,{size:14})}),(0,t.jsxs)("button",{onClick:()=>i(e,!1),title:"zh"===o?"查看扩展详情与源码":"View details and source",className:"py-1.5 px-2.5 rounded-lg bg-[#14161d] border border-[#2d3142] hover:border-slate-400 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors",children:[(0,t.jsx)(l,{size:13}),(0,t.jsx)("span",{children:"zh"===o?"详情":"Details"})]})]})]})]})}var m=e.i(63676),h=e.i(8734),u=e.i(89664),x=e.i(68877),f=e.i(82022),y=e.i(22016);function g({extension:e,autoTriggerInstall:o,onClose:a}){let[l,r]=(0,i.useState)(!1),[d,b]=(0,i.useState)(!1),{lang:w,t:C}=(0,p.useI18n)();if((0,i.useEffect)(()=>{e&&o?b(!0):b(!1)},[e,o]),!e)return null;let v=n(e.id),j=`https://flyclip-app.github.io/downloads/extensions/${v}.flyclipextz`,N=`flyclip://install-extension?url=${encodeURIComponent(j)}&id=${encodeURIComponent(e.id)}&name=${encodeURIComponent(e.name)}`,S=`# flyclip
${e.configYaml}`,z=`flyclip://install-extension?name=${encodeURIComponent(e.name)}&data=${encodeURIComponent(S)}`,k=`/downloads/extensions/${v}.flyclipextz`;return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200",children:(0,t.jsxs)("div",{className:"w-full max-w-2xl bg-[#1c1e27] border border-[#2d3142] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[(0,t.jsxs)("div",{className:"p-5 border-b border-[#2d3142] flex items-center justify-between bg-[#14161d]",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-10 h-10 rounded-lg bg-[#1c1e27] border border-[#2d3142] flex items-center justify-center font-bold text-blue-400",children:e.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-bold text-slate-100 text-lg",children:"en"===w?e.nameEn||e.name:e.nameZh||e.name}),(0,t.jsx)("p",{className:"text-xs text-slate-500 font-mono",children:e.id})]})]}),(0,t.jsx)("button",{onClick:a,className:"w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors",children:(0,t.jsx)(m.X,{size:18})})]}),(0,t.jsxs)("div",{className:"p-6 overflow-y-auto space-y-6 text-sm text-slate-300",children:[d&&(0,t.jsxs)("div",{className:"p-4 rounded-xl bg-blue-500/15 border border-blue-500/30 text-xs sm:text-sm text-blue-200 space-y-2 animate-in fade-in duration-300",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 font-bold text-white",children:[(0,t.jsx)(c.Zap,{size:16,className:"text-amber-400 animate-pulse"}),(0,t.jsx)("span",{children:"zh"===w?"正在尝试呼起 FlyClip 客户端安装...":"Attempting to launch FlyClip client..."})]}),(0,t.jsxs)("button",{onClick:()=>{b(!0);try{window.open(N,"_blank")}catch(e){}},className:"px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-1",children:[(0,t.jsx)(f.ExternalLink,{size:12}),(0,t.jsx)("span",{children:"zh"===w?"重新呼起":"Re-trigger"})]})]}),(0,t.jsx)("p",{className:"text-xs text-slate-400 leading-relaxed",children:"zh"===w?(0,t.jsxs)(t.Fragment,{children:["若您的浏览器弹出授权提示，请点击「打开 FlyClip」。若您的电脑尚未安装 FlyClip，可"," ",(0,t.jsx)(y.default,{href:"/download",className:"text-blue-400 underline hover:text-blue-300",children:"下载客户端"})," ","或直接选择下方【方式二：下载离线扩展包】。"]}):(0,t.jsxs)(t.Fragment,{children:['If prompted by your browser, click "Open FlyClip". If FlyClip is not yet installed on your PC, you can'," ",(0,t.jsx)(y.default,{href:"/download",className:"text-blue-400 underline hover:text-blue-300",children:"Download Client"})," ","or choose Method 2 below to download offline package."]})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1",children:"zh"===w?"功能描述":"Description"}),(0,t.jsx)("p",{className:"text-slate-300",children:"en"===w?e.description||e.descriptionZh:e.descriptionZh||e.description})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider block",children:"zh"===w?"安装与更新方式":"Installation Methods"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[(0,t.jsxs)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-blue-500/40 space-y-2 flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5 font-bold text-white text-xs",children:[(0,t.jsx)(c.Zap,{size:14,className:"text-amber-400"}),(0,t.jsx)("span",{children:"zh"===w?"方式一：一键唤起安装 (绑定更新源)":"Method 1: One-Click Install (Auto Updates)"})]}),(0,t.jsx)("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"zh"===w?"呼出 flyclip:// 协议，自动绑定官方更新源，支持后续无感自动更新。":"Triggers flyclip:// protocol, automatically connects to official update source for updates."})]}),(0,t.jsxs)("a",{href:N,target:"_blank",rel:"noopener noreferrer",onClick:()=>b(!0),className:"w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-blue-500/20",children:[(0,t.jsx)(c.Zap,{size:13,className:"text-amber-300"}),(0,t.jsx)("span",{children:"zh"===w?"一键安装到 FlyClip":"Install to FlyClip"}),(0,t.jsx)(f.ExternalLink,{size:12})]})]}),(0,t.jsxs)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-[#2d3142] space-y-2 flex flex-col justify-between",children:[(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1.5 font-bold text-white text-xs",children:[(0,t.jsx)(s.Download,{size:14,className:"text-blue-400"}),(0,t.jsx)("span",{children:"zh"===w?"方式二：下载离线包 (.flyclipextz)":"Method 2: Offline Package (.flyclipextz)"})]}),(0,t.jsx)("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"zh"===w?`下载 ${v}.flyclipextz 文件，双击或拖入 FlyClip 窗口即可完成安装。`:`Download ${v}.flyclipextz and double-click or drag into FlyClip to install.`})]}),(0,t.jsxs)("a",{href:k,download:`${v}.flyclipextz`,className:"w-full py-2 px-3 rounded-lg bg-[#1c1e27] border border-[#2d3142] hover:border-slate-400 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors",children:[(0,t.jsx)(s.Download,{size:13}),(0,t.jsx)("span",{children:"zh"===w?"下载离线文件":"Download File"})]})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-1.5",children:[(0,t.jsx)("span",{className:"text-xs font-semibold text-slate-400 uppercase tracking-wider",children:"zh"===w?"方式三：划选即装 Snippet (直接用鼠标划选下方文本)":"Method 3: Text Snippet (Select text below to install)"}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)("a",{href:z,target:"_blank",rel:"noopener noreferrer",className:"text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium",children:[(0,t.jsx)(c.Zap,{size:12}),(0,t.jsx)("span",{children:"zh"===w?"载入 Snippet":"Load Snippet"}),(0,t.jsx)(f.ExternalLink,{size:11})]}),(0,t.jsxs)("button",{onClick:()=>{navigator.clipboard.writeText(S),r(!0),setTimeout(()=>r(!1),2e3)},className:"text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium",children:[l?(0,t.jsx)(u.Check,{size:12,className:"text-green-400"}):(0,t.jsx)(h.Copy,{size:12}),(0,t.jsx)("span",{children:l?"zh"===w?"已复制":"Copied":"zh"===w?"复制代码":"Copy Code"})]})]})]}),(0,t.jsx)("div",{className:"p-4 rounded-xl bg-[#14161d] border border-[#2d3142] overflow-x-auto font-mono text-xs text-slate-200 leading-relaxed select-all",children:(0,t.jsx)("pre",{children:S})})]})]}),(0,t.jsxs)("div",{className:"p-4 border-t border-[#2d3142] bg-[#14161d] flex items-center justify-between gap-3",children:[(0,t.jsxs)(y.default,{href:"/download",className:"text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium",children:[(0,t.jsx)("span",{children:"zh"===w?"还没有 FlyClip 客户端？立即下载":"Need FlyClip client? Download now"}),(0,t.jsx)(x.ArrowRight,{size:13})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsxs)("a",{href:N,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 shadow-md shadow-blue-500/20",children:[(0,t.jsx)(c.Zap,{size:14,className:"text-amber-300"}),(0,t.jsx)("span",{children:"zh"===w?"一键安装":"Install"}),(0,t.jsx)(f.ExternalLink,{size:12})]}),(0,t.jsx)("button",{onClick:a,className:"px-4 py-2 rounded-lg bg-[#1c1e27] border border-[#2d3142] hover:bg-[#242733] text-slate-300 font-medium text-xs sm:text-sm transition-colors",children:"zh"===w?"关闭":"Close"})]})]})]})})}var b=e.i(66595),w=e.i(28623);e.s(["default",0,function(){let[e,n]=(0,i.useState)(""),[s,a]=(0,i.useState)("all"),[l,r]=(0,i.useState)(null),[c,m]=(0,i.useState)(!1),{t:h,lang:u}=(0,p.useI18n)(),x=(e,t=!1)=>{r(e),m(t)},f=[{id:"all",label:h("extensions.all")},{id:"translation",label:h("extensions.trans")},{id:"search_ai",label:h("extensions.search")},{id:"text_tools",label:h("extensions.prod")},{id:"developer",label:h("extensions.dev")},{id:"shopping",label:h("extensions.util")}],y=o.filter(t=>{let i="all"===s||t.category===s,n=e.toLowerCase().trim(),o=!n||t.name.toLowerCase().includes(n)||t.id.toLowerCase().includes(n)||t.description&&t.description.toLowerCase().includes(n)||t.descriptionZh&&t.descriptionZh.toLowerCase().includes(n);return i&&o});return(0,t.jsxs)("div",{className:"py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[(0,t.jsxs)("div",{className:"text-center max-w-2xl mx-auto mb-10 space-y-2",children:[(0,t.jsx)("span",{className:"text-xs font-bold text-blue-400 uppercase tracking-wider",children:"Extension Marketplace"}),(0,t.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:h("extensions.title")}),(0,t.jsx)("p",{className:"text-slate-400 text-sm sm:text-base",children:h("extensions.subtitle")})]}),(0,t.jsxs)("div",{className:"space-y-4 mb-10",children:[(0,t.jsxs)("div",{className:"relative w-full max-w-2xl mx-auto",children:[(0,t.jsx)(b.Search,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-slate-500",size:18}),(0,t.jsx)("input",{type:"text",placeholder:h("extensions.searchPlaceholder"),value:e,onChange:e=>n(e.target.value),className:"w-full pl-11 pr-4 py-3 rounded-xl bg-[#1c1e27] border border-[#2d3142] text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500 shadow-lg"})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between flex-wrap gap-3 pt-2",children:[(0,t.jsx)("div",{className:"flex items-center gap-2 flex-wrap",children:f.map(e=>(0,t.jsx)("button",{onClick:()=>a(e.id),className:`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${s===e.id?"bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20":"bg-[#1c1e27] border border-[#2d3142] text-slate-400 hover:text-white hover:border-slate-400"}`,children:e.label},e.id))}),(0,t.jsx)("span",{className:"text-xs text-slate-500 font-medium",children:"zh"===u?`找到 ${y.length} 个扩展`:`Found ${y.length} extensions`})]})]}),y.length>0?(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:y.map(e=>(0,t.jsx)(d,{extension:e,onOpenModal:x},e.id))}):(0,t.jsxs)("div",{className:"text-center py-20 bg-[#14161d] border border-[#2d3142] rounded-2xl p-8",children:[(0,t.jsx)(w.Sparkles,{className:"w-10 h-10 text-slate-500 mx-auto mb-3"}),(0,t.jsx)("h3",{className:"text-lg font-bold text-white mb-1",children:"zh"===u?"没有找到匹配的扩展":"No matching extensions"}),(0,t.jsx)("p",{className:"text-sm text-slate-400",children:"zh"===u?"尝试更换搜索词或选择其他分类":"Try searching another term or choosing another category"})]}),l&&(0,t.jsx)(g,{extension:l,onClose:()=>r(null),autoTriggerInstall:c})]})}],93063)}]);
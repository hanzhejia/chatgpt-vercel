export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 本项目是基于chatgpt开发的聊天bot，由 [@hanzhejia](https://github.com/hanzhejia) 开发，目前只是测试使用。
- 如果本项目对你有所帮助，可以请 jhz [喝杯咖啡](http://rr96e4m7o.bkt.clouddn.com/IMG_8323.JPG)。
- 本网站的 API Key 由我自己免费提供，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false

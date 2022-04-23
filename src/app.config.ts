export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#ab87f7',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar":{
    "selectedColor": "#1769FF",
    "borderStyle": "white",
    "list":[{
      pagePath: "",
      text: "",
      iconPath: "",
      selectedIconPath: "",
    },
    {
      pagePath: "",
      text: "",
      iconPath: "",
      selectedIconPath: "",
    },
    {
      pagePath: "",
      text: "",
      iconPath: "",
      selectedIconPath: "",
    }],
    custom: true,
  }
})

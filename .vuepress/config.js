module.exports = {
  title: "CSC3206",
  base: "/ai-labs/",
  head: [
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" }],
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" }],
  ],
  themeConfig: {
    nav: [
      { text: 'AI', link: '/' },
      { text: 'CI', link: 'https://ricwtk.github.io/ci-labs' },
    ],
    sidebarDepth: 2,
    sidebar: [
      '/',
      {
        title: '2020 August',
        collapsable: false,
        children: [
          '/get-start',
          '/lab1',
          '/lab2',
          '/lab3',
          '/lab4',
          '/lab5',
          '/lab6',
          '/lab7',
          '/lab8',
          '/lab9'
        ]
      },
      {
        title: 'Archive',
        collapsible: true,
        children: [
          {
            title: '2019 August',
            collapsable: true,
            children: [
              '/archive/201908/lab1',
              '/archive/201908/lab2',
              '/archive/201908/lab3',
              '/archive/201908/lab4',
              '/archive/201908/lab5',
              '/archive/201908/lab6',
              '/archive/201908/lab7',
              '/archive/201908/lab8',
              '/archive/201908/lab9'
            ]
          },
          {
            title: '2020 March',
            collapsable: true,
            children: [
              '/archive/202003/get-start',
              '/archive/202003/lab1',
              '/archive/202003/lab2',
              '/archive/202003/lab3',
              '/archive/202003/lab4',
              '/archive/202003/lab5',
              '/archive/202003/lab6',
              '/archive/202003/lab7',
              '/archive/202003/lab8',
              '/archive/202003/lab9'
            ]
          },
        ]
      },      
    ],
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'mathjax'
  ],
}

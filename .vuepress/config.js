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
        title: '2019 August',
        collapsable: false,
        children: [
          '/lab1',
          '/lab2',
          '/lab3',
          '/lab4',
          '/lab5',
          '/lab6',
          '/lab7'
        ]
      }
    ],
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
  ]
}
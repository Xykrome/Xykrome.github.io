import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head:[['link', { rel: 'icon', href: '炸弹.png' }]],
  title: "前端大王--JS做题网站",
  description: "A VitePress Site",
  themeConfig: {
    search: {
      provider: 'local'
    },

    outlineTitle:'目录',
    outline:'deep',
    logo:'/题库.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术文章', items:[
          {text:'MDN', link: 'https://developer.mozilla.org/zh-CN/'},
          {text:'菜鸟网站',link:'https://www.runoob.com/'}]},
      { text: '在线工具', link: 'https://www.wetools.com/js-run' },
      { text: '视频教程', link: 'https://www.bilibili.com/video/BV1Z84y1K7jG/' },
      { text: '登录', link: '/1' },
      { text: '注册', link: '/2' },

    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: '原生JS', link: '/javascript' },
          { text: 'jQuery', link: '/jQuery' },
        ]
      },
      {
        text: '进阶',
        items: [
          { text: 'vue', link: '/vue' },
          { text: 'react', link: '/react' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      copyright: "Copyright © 2024 Xykrome"
    }
  },
})


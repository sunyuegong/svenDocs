import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sven Docs",
  description: "Sven Docs",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: 'Sven',
    nav: [
      { text: '主页', link: '/' },
      { text: '计算机组成原理', link: '/src/Computer-Organization-and-Architecture' },
      { text: 'api', link: '/src/api-examples' },
      { text: 'md', link: '/src/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', 
        link: 'https://github.com/vuejs/vitepress' },
      { icon: {svg:'<svg t="1764141469095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7121" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="7122"></path></svg>'}, 
        link: 'https://github.com/vuejs/vitepress' },
      { icon: {svg:'<svg t="1764141497802" class="icon" viewBox="0 0 1078 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8183" width="200" height="200"><path d="M894.597 152.050147h-188.943502l91.836749-91.836749A34.615603 34.615603 0 0 0 748.562423 11.285574l-140.764573 140.764573h-138.545624L328.487653 11.285574a34.615603 34.615603 0 1 0-48.927824 48.927824l91.836749 91.836749H182.425339A182.425339 182.425339 0 0 0 0 334.586434v447.950317a182.425339 182.425339 0 0 0 182.425339 182.425339h26.655124a58.996305 58.996305 0 0 0 117.99261 0h422.876193a58.996305 58.996305 0 0 0 117.99261 0h26.655124a182.425339 182.425339 0 0 0 182.42534-182.425339v-447.950317a182.425339 182.425339 0 0 0-182.42534-182.425339m58.24741 639.889399a67.872101 67.872101 0 0 1-67.872101 67.872101H192.105504a67.872101 67.872101 0 0 1-67.8721-67.872101V325.072691a67.872101 67.872101 0 0 1 67.8721-67.872101H884.805888a67.872101 67.872101 0 0 1 67.872101 67.872101z" p-id="8184"></path><path d="M413.556608 412.000015l-222.727 44.378979 17.252328 83.51569 222.699263-43.74103z" p-id="8185"></path><path d="M646.213404 496.18139l222.726999 43.741031 17.224591-83.51569-222.726999-44.378979z" p-id="8186"></path><path d="M599.504529 698.937849c-21.884384 0-45.987717-29.844863-60.771464-61.631306l-0.221895 1.026264-0.194158-1.026264c-14.783747 31.81418-38.831606 61.631307-60.771464 61.631306s-47.735139-34.476919-47.735139-34.476919l-33.811235 22.550069a102.626388 102.626388 0 0 0 86.844114 54.364249 95.886331 95.886331 0 0 0 55.667882-29.567495 95.997278 95.997278 0 0 0 55.695618 29.567495 102.626388 102.626388 0 0 0 86.844114-54.364249l-33.811234-22.550069s-25.850755 34.476919-47.735139 34.476919" p-id="8187"></path></svg>'}, 
        link: 'https://github.com/vuejs/vitepress' },
      
    ],

    footer: {
      message: 'Created by Sven ❤️',
      copyright: 'Copyright © 2025-present Sven'
    },

    search: {
      provider: 'local',
    },

    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // }

    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
})

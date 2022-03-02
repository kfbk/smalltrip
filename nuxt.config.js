import colors from 'vuetify/es5/util/colors'
//追記
import axios from 'axios'
require("dotenv").config();
const { API_KEY } = process.env;

export default {
  //追記
  env: {
    API_KEY
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  sitemap: {
    path: '/sitemap.xml',
    //hostname: 'http://localhost:3000/',
    hostname: 'https://smalltrip.netlify.app/',
// routes(callback) {
    //   axios.get('https://smalltrip.microcms.io/api/v1/blog?limit=100', {
    //       headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
    //     })
    //     .then((res) => {
    //       const routes = res.data.contents.map((content) => {
    //         return '/blog/' + blog.id
    //       })
    //       callback(null, routes)
    //     })
    //     .catch(callback)
    //}
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - smalltrip',
    titleTemplate: '%s',
    title: '小さな旅友の会',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '小さな旅友の会' },
      { hid: 'keywords', name: 'keywords', content: '高崎,北関東,山,旅,友,会,山登り,ハイキング,本庄,深谷,伊勢崎,低山,グループ,埼玉,群馬,登山,中高年' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/x-icon', href: '/mount.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // 使ってない（microCMS日付は別方法で取り出せる）
    // '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    //'@nuxtjs/auth'  // これを生かすと、エラーになる
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    async routes() {
      const pages = await axios
        .get('https://smalltrip.microcms.io/api/v1/blog?limit=100', {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content
          }))
        )
      return pages
    }
  },
}

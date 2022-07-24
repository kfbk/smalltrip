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
      { hid: 'keywords', name: 'keywords', content: '高崎,北関東,山,旅,友,会,山登り,ハイキング,本庄,深谷,岡部,上里町,伊勢崎,低山,グループ,埼玉,群馬,登山,中高年' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/x-icon', href: '/mount.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
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
    '@nuxtjs/auth'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // ローカルデバッグ・実働の切り替えは、ここだけ変更すること
    //baseURL: 'http://localhost:5000/',
    baseURL: 'https://mongo-trip.herokuapp.com/',
  },

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
    routes() {
      const blogs = axios
        .get('https://smalltrip.microcms.io/api/v1/blog?limit=10', {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
        })
        .then((res) => {
          return res.data.contents.map((blogs) => {
            return "/article/" + blogs.id;
          })
        })
        const news = axios
        .get('https://smalltrip.microcms.io/api/v1/news?limit=10', {
          headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
        })
        .then((res) => {
          return res.data.contents.map((news) => {
            return "/news/" + news.id;
          })
        })
      return Promise.all([blogs,news]).then(values => {
        return values.join().split(",")
      })
    }
  },
  auth: {
    redirect: {
      // login: '/login',
    //   logout: '/',
    //   callback: false,
    //   home: '/'
      // ログイン正常後、表示するページ
      home: '/kaiin',
    },
    //次の説明＝https://qiita.com/kj455/items/66a1aab1524af51160ff
    //strategiesの中身に認証ロジックを書いていく
    strategies: {
      //localという認証方法「emailアドレスとパスワードを入力してログイン」を使う場合
      local: {
        //axiosでアクセスする際の設定
        endpoints: {
          login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          logout: false,
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
          // user: false, // これを生かすと、起動時に「/api/auth/user」しない
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  }
}

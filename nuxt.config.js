import axios from 'axios'
require("dotenv").config();
const { API_KEY } = process.env;

export default {
  env: {
    API_KEY
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  sitemap: {
    path: '/sitemap.xml',
    //hostname: 'http://localhost:3000/',
    hostname: 'https://smalltrip.netlify.app/',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '小さな旅友の会',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: '高崎,北関東,山,旅,友,会,山登り,ハイキング,本庄,深谷,岡部,上里町,伊勢崎,低山,グループ,埼玉,群馬,登山,中高年' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/mount.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss'
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
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    //baseURL: 'http://localhost:5000/',
    // baseURL: 'https://t0zlc9.deta.dev/',
    baseURL: 'https://mongodb-ewn9.onrender.com/',
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
          logout: false,
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      }
    }
  }
}

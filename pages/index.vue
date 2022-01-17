<template>
  <section>
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">

          <v-card>
            <v-card-title>
              つぶやき最新情報
            </v-card-title>
            <v-card-content>
              <ul>
                <li v-for="content in contents" :key="content.id">
                  <span>{{ new Date(content.publishedAt).toLocaleDateString() }}</span> {{ content.title }}
                </li>
                <!-- <li>
                  2021/12/23:「過去の月例山行」ページ追加
                </li>
                <li>
                  2021/11/30：つぶやき「赤城山（黒檜）」
                </li>
                <li>
                  2021/11/24：つぶやき「2022年最初は桐生吾妻山）」
                </li>
                <li>
                  2021/11/17：つぶやき「初参加」
                </li>
                <li>
                  2021/11/17：ホームページ開設
                </li> -->
              </ul>
            </v-card-content>
          </v-card>

          <table class="mt-5">
            <tr>
              <td><h1>小さな旅友の会 会員募集</h1></td>
            </tr>
          </table>
            <p class="ml-5 mt-1">
              本会で、新規の仲間を募集しています<br/>
              入会金・年会費 無料<br>
              月例山行の参加費 基本５０００円<br>
              スポーツ安全保険：<br>&nbsp;&nbsp;&nbsp;1200円／年（65歳以上）、1850円／年（65歳未満）<br>
              問い合わせページから問い合わせてください
            </p>
          <table class="mt-5">
            <tr>
              <td><h1>小さな旅友の会 紹介</h1></td>
              <td>2021年12月作成</td>
            </tr>
          </table>

          <img src="~assets/img/2021-12-04 08.07.38.jpg" class="mt-1">
          <p class="mt-1">
            平成4年1月に高崎市の山登り仲間を中心として結成され、<br>
            30年の歴史がある楽しい山登りの会です。<br>
            現在は、主に群馬県・埼玉県の日帰り登山をしております。<br>
            会員は、65歳以上の高齢者ばかりの23名が加入しております。<br>
            若手がいないのが悩みの種です。<br>
          <p/>
          <p>
            <strong>最近（2021年）の活動について</strong><br>
            毎月 第3日曜日<br>
            高崎駅東口　7:30　集合、出発<br>
            貸切バスをチャーター<br>
            歩行時間は3時間半前後<br>
            山登り・日帰り入浴・懇親会（アルコールは各自実費）<br>
            バス代・日帰り入浴代込みで、参加費5,000円　当日徴収<br>
            年1回10月に一泊二日でゆっくりと山登り<br>
          <p/>
          <p>
            楽しい仲間とゆっくり山登りも良いのではないでしょうか？<br>
            一人で登る山もよし、仲間と登る山もよし！！<br>
          </p>
        </v-col>
       </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://smalltrip.microcms.io/api/v1/blog?limit=5',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return data
  },
  mounted() {
    console.log(this.$store.getters.isAuthenticated)
  }
}
</script>

<style scoped>
th,td {
  border: solid 1px;              /* 枠線指定 */
  padding: 10px;      /* 余白指定 */
}
table {
  border-collapse:  collapse;     /* セルの線を重ねる */
  /* width: 350px; */
}
thead {
  background-color: aqua;
}
span {
  display: inline-block;
  width: 7em;
}
</style>

<!--<template>
  <article class="container-fluid">
    <div class="row mt-2 justify-content-md-center">
      <div class="col-8">
        <p>2021/11/14 赤城荒山にて</p>
        <img src="~assets/img/2021-11-14 10.06.56.jpg">
      </div>
    </div>
    <div class="row mt-4 justify-content-md-center">
      <div class="col-8">
        群馬県高崎市を中心に北関東から集まった山登りの会です。<br>
        2021年現在、約30年前から活動しています。会員は約20名です。<br>
        小さな記憶を温めるため、ここに記録を残すとともに、<br>
        新しい会員を募集します。<br>
        ただし、新しい会員は、問合せページにて公募しますが、<br>
        現会員と会ってその人の推薦方式にしたいと考えています。<br>
        会員は、「つぶやき」ページでつぶやくことが出来ます。
      </div>
    </div>
  </article>
</template>
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <NuxtLogo />
        <VuetifyLogo />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>
            For more information on Vuetify, check out the <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation
            </a>.
          </p>
          <p>
            If you have questions, please join the official <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord
            </a>.
          </p>
          <p>
            Find a bug? Report it on the github <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board
            </a>.
          </p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/inspire"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>-->

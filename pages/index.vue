<template>
  <div class="tw-page">
    <div class="tw-card">
      <div class="border border-red-500">
        <div class="text-red-500">
        新「小さな旅友の会」ホームページを作りました。違いは、つぶやきにコメントを付けられるようにした事です。<br />
        次のURLをクリックして下さい。
        </div>
        <a href="https://smalltrip.vercel.app">
        https://smalltrip.vercel.app
        </a>
      </div>
      <div class="tw-card-title">
        つぶやき最新情報
      </div>
      <div class="tw-card-body">
        <ul>
          <li v-for="(item,key) in items" :key="key">
            <span>{{ new Date(item.publishedAt).toLocaleDateString() }}</span>
            <nuxt-link :to="'blogs/article/' + item.id" class="no-underline text-blue-600">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="tw-card">
      <h1 class="tw-card-title">
        「小さな旅友の会」会員募集 <br />
        お試し参加も可・お一人様も歓迎
      </h1>
      <div class="tw-card-body">
        <div>
          本会で、新規の仲間を募集しています<br/>
          入会金・年会費 無料<br>
          月例山行の参加費 基本６０００円<br>
          スポーツ安全保険：<br>
          &nbsp;&nbsp;&nbsp;1200円／年（65歳以上）、<br />
          &nbsp;&nbsp;&nbsp;1850円／年（65歳未満）<br>
          問い合わせページから問い合わせてください
        </div>
      </div>
    </div>
    <div class="tw-card">
      <h1 class="tw-card-title">
        「小さな旅友の会」紹介
      </h1>
      <div class="tw-card-body">
        <figure><img src="~assets/img/DSC02471top.JPG"  /></figure>
        <p>
          平成4年1月に高崎市の山登り仲間を中心として結成され、
          30年の歴史がある楽しい山登りの会です。
          現在は、主に群馬県・埼玉県の日帰り登山をしております。
          会員は、元気な高齢者20人前後を中心に、若手も少しずつ増えていまが、<br>
          若手が少ないのが悩みの種です。<br>
        </p>
        <hr class="mb-2">
        <p>
          <strong>最近の活動について</strong><br>
          毎月 1回<br>
          高崎駅東口　出発<br>
          貸切バスをチャーター<br>
          歩行時間は3時間半前後<br>
          山登り・日帰り入浴・懇親会（アルコールは各自実費）<br>
          バス代・日帰り入浴代込みの参加費で、当日徴収<br>
          年1回、一泊二日でゆっくりと山登り<br>
        </p>
        <p>
          新しくできる仲間とゆっくり山登りも良いのではないでしょうか？<br>
          一人で登る山もよし、仲間と登る山もよし！！<br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: []
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://smalltrip.microcms.io/api/v1/blog?limit=5',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return {
      items: data.contents
    }
  }
}
</script>

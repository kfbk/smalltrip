<template>
  <div class="tw-page">
    <div class="tw-card">
      <p>本サイトは&nbsp;<span style="color:#e74c3c"><span style="font-size:22px"><strong>閉 鎖&nbsp;</strong></span></span>しました。</p>
      <p>自動的に移動しない場合は、下記のリンクをクリックして移動して下さい。</p>
      <p><a href="https://smalltrip.vercel.app">
        <input style="background-color:#e74c3c;font-size:22px;color:white" type="button" value="新サイトへ行く" />
      </a></p>
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

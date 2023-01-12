<template>
  <div class="tw-page">
    <div class="tw-card">
      <div class="tw-card-title">
        会長の注意事項
      </div>
      <div class="tw-card-body">
        <div>{{ title }}</div>
        <div class="text-right mb-5">{{ new Date(updatedAt).toLocaleDateString() }}</div>
        <nuxt-link to="/kaiin" class="tw-btn-primary">戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    console.log(params)
    const { data } = await axios.get(
      `https://smalltrip.microcms.io/api/v1/news/${params.id}`,
      {
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return data
  }
}
</script>

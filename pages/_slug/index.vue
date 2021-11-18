<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p>
      {{ new Date(publishedAt).toLocaleDateString() }} {{ nickname }}</p>
    <div class="post" v-html="body"></div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://smalltrip.microcms.io/api/v1/blog/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return data
  }
}
</script>

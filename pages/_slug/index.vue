<template>
  <main class="main">
    <v-card>
      <v-card-title>
        {{ title }}
              <v-spacer />
      <v-btn to="/blog" nuxt>戻る</v-btn>
    </v-card-title>
    <v-card-subtitle>
      {{ new Date(publishedAt).toLocaleDateString() }} {{ nickname }}
    </v-card-subtitle>
    <hr>
    <v-card-text>
    <div class="post" v-html="body"></div>
    </v-card-text>
    </v-card>
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

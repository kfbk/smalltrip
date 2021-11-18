<template>
  <div>
    <h1>つぶやき一覧</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          <v-card>
            <v-card-title>
              {{ content.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ content.nickname}}
            </v-card-subtitle>
          </v-card>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://smalltrip.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return data
  }
}
</script>

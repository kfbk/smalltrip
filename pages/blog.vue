<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
    <h1>つぶやき一覧</h1>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`" style="text-decoration: none;">
          <v-card class="mt-2">
            <v-card-title>
              {{ content.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ new Date(content.publishedAt).toLocaleDateString() }} {{ content.nickname}}
            </v-card-subtitle>
          </v-card>
        </nuxt-link>
      </li>
    </ul>
        </v-col>
      </v-row>
    </v-container>
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

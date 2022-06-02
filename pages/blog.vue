<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
    <h1>つぶやき一覧</h1>
    <ul>
      <!-- 何故か、次はエラーになる。下は、index.vueから持ってきた
      <li v-for="(item,key) in items" :key="key">
        <nuxt-link :to="'article/' + item.id" style="text-decoration: none;">
          <v-card class="mt-2">
            <v-card-title>
              {{ item.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ new Date(item.publishedAt).toLocaleDateString() }} {{ content.nickname}}
            </v-card-subtitle>
          </v-card>
        </nuxt-link>
      </li> -->
                <li v-for="(item,key) in items" :key="key">
                  <span>{{ new Date(item.publishedAt).toLocaleDateString() }}</span>
                  <nuxt-link :to="'article/' + item.id" style="text-decoration: none;">
                    {{ item.title }}
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
  data() {
    return {
      items: []
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://smalltrip.microcms.io/api/v1/blog?limit=100',
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

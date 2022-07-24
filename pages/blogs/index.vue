<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
    <h1>つぶやき一覧
      <span style="font-size: 16px;">（最大1000件）</span>
    </h1>

    <!-- 何故か、次はエラーになる。
    <ul>
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
      </li>
    </ul> -->
    <table>
      <tbody>
      <tr v-for="(item,key) in items" :key="key">
        <td>{{ new Date(item.publishedAt).toLocaleDateString() }}</td>
        <td>
          <nuxt-link :to="'article/' + item.id" style="text-decoration: none;">
            {{ item.title }}
          </nuxt-link>
        </td>
        <td>{{ item.nickname }}</td>
      </tr>
      </tbody>
    </table>
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
      'https://smalltrip.microcms.io/api/v1/blog?limit=1000',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return {
      items: data.contents
    }
  },
  mounted() {
    // 「blog/」となる場合がある。これはエラーになるので避けるため
    // 次を考えたが、ダメだった。
    // if (!this.$route.fullPath.endsWith('/blog')) {
    //   this.$router.push('/blog')
    // }
  }
}
</script>

<style scoped>
table, td, th {
    border-bottom: 1px solid black;
}
table {
    border-collapse: collapse;
}
</style>

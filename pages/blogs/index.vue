<template>
  <div class="container mx-auto max-w-sm">
    <h1 class="text-2xl mb-4">つぶやき一覧
      <span class="text-xs">（最大1000件）</span>
    </h1>
    <table>
      <tbody>
      <tr v-for="(item,key) in items" :key="key" class="border-t border-black">
        <td>{{ new Date(item.publishedAt).toLocaleDateString() }}</td>
        <td>
          <nuxt-link :to="'article/' + item.id" class="no-underline text-blue-600">
            {{ item.title }}
          </nuxt-link>
        </td>
        <td>{{ item.nickname }}</td>
      </tr>
      </tbody>
    </table>
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
}
</script>

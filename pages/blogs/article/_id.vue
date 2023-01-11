<template>
  <div class="container mx-auto max-w-sm">
    <div class="flex justify-between">
      <div class="font-bold">
        {{ title }}
      </div>
      <div>
        <button @click="$router.back()" class="bg-gradient-to-b from-blue-300 to-blue-800 hover:bg-gradient-to-l text-white rounded px-4 py-2">
          戻る
        </button>
      </div>
    </div>
    <div>
      {{ new Date(publishedAt).toLocaleDateString() }} {{ nickname }}
    </div>
    <hr class="my-2">
    <div class="post" v-html="body"></div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      // `https://smalltrip.microcms.io/api/v1/blog/${params.slug}`,
      `https://smalltrip.microcms.io/api/v1/blog/${params.id}`,
      {
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    return data
  }
}
</script>

// scoped を付けると画像がレシポンシブにならない
<style>
.post img {
  width:100%;
  max-width: 100%;
  height: auto;
}
</style>

<template>
  <main class="main">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
    <v-card>
      <v-card-title>
        {{ title }}
              <v-spacer />
      <v-btn to="/kaiin" color="primary">戻る</v-btn>
      <!-- <a @click="$router.back()">戻る</a> -->
    </v-card-title>
    <v-card-subtitle>
      {{ new Date(updatedAt).toLocaleDateString() }}
    </v-card-subtitle>
    <hr>
    <v-card-text>
    <div class="post" v-html="content"></div>
    </v-card-text>
    </v-card>
        </v-col>
      </v-row>
    </v-container>
  </main>
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

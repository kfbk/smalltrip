<template>
  <div class="tw-page">
    <div class="tw-card">
      <div class="tw-card-title">
        {{$store.getters.joinMonth}} 月の月例山行 参加状態 <span style="color: red;">{{errMsg}}</span>
      </div>
      <div class="tw-card-body">
        <div v-if="!errMsg">
          <table class="table-fixed mb-5">
            <thead>
              <tr>
                <th class="w-1/4 px-4 py-2">登録順</th>
                <th class="w-1/2 px-4 py-2">名前</th>
                <th class="w-1/4 px-4 py-2">参加状態</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="join in joins" :key="join.order">
                <td class="border px-4 py-2">{{join.order}}</td>
                <td class="border px-4 py-2">{{join.name}}</td>
                <td class="border px-4 py-2">{{join.join}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nuxt-link class="mt-5 tw-btn-primary " to="/kaiin">戻る</nuxt-link>
      </div>
    </div>
  </div>
  <!-- <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="13">
        <v-card-title>
          {{$store.getters.joinMonth}} 月の月例山行 参加状態 <span style="color: red;">{{errMsg}}</span>
        </v-card-title>
        <v-card-text>
              <v-data-table
                  :headers="headers"
                  :items="joins"
                  :sort-by="'order'"
                  :sort-desc="false"
                  mobile-breakpoint="10"
                  class="mt-5 elevation-13"
              ></v-data-table> -->
              <!-- mobile-breakpoint：モバイル環境でのビューは縦方向になるので、ありえない10を設定 -->
            <!-- <v-btn color="primary mt-5" to="/kaiin">戻る</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row> -->
</template>

<script>
  export default {
    middleware: 'auth',
    data(){
      return {
        joins: [],  // 参加状態ボタンONでここに入れる
        // headers: [
        //   {
        //     text: '登録順',
        //     align: 'start',
        //     sortable: false,
        //     value: 'order',
        //     width: '30%'
        //   },
        //   {
        //     text: '名前',
        //     sortable: false,
        //     value: 'name',
        //     width: '40%'
        //   },
        //   {
        //     text: '参加状態',
        //     sortable: false,
        //     value: 'join',
        //   },
        // ],
        errMsg: '',
      }
    },
    // 現月の全員の「参加状態」button
    async mounted() {
      const joins = [];
      // 指定の年月の全員のデータを取る
      if (this.$store.getters.joinMonth == 0) {
        this.errMsg = '更新ボタンを使わないで！'
        return
      }
      let response = await this.$axios.post('/api/joins/get', {
          joinYear: this.$store.getters.joinYear,
          joinMonth: this.$store.getters.joinMonth
      })
      if (response.status == 200) {
        // 会員番号・会員名を得る
        let nameSets = []
        nameSets = this.$store.getters.nameSets   // 退会者は除いてある
        // console.log(nameSets)
        response.data.forEach(function(join) {
            // nameSetsの2次元配列から、orderに対するnameを求める
            let index = nameSets.findIndex( item => item[ 0 ] == join.order);
            // 会員番号・会員名・出欠を配列に入れる
            // console.log(nameSets[index])
            // (2) [1, '柳井　強', __ob__: Observer]
            // console.log(nameSets[index][1])
            joins.push({
              order: join.order,   // 2022.4.24
              name: String(nameSets[index][1]),
              join: join.join,
            })
        })
        this.joins = joins
      } else {
        errMsg = 'エラー発生 status='+ response.status
      }
    },
    methods:{
    }
  }
</script>

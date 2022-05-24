<template>
<div>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="13">
        <v-card-title>
          {{$store.getters.joinMonth}} 月の月例山行 参加状態
        </v-card-title>
        <v-card-text>
              <v-data-table
                  :headers="headers"
                  :items="joins"
                  :sort-by="'order'"
                  :sort-desc="false"
                  mobile-breakpoint="10"
                  class="mt-5 elevation-13"
              ></v-data-table>
              <!-- mobile-breakpoint：モバイル環境でのビューは縦方向になるので、ありえない10を設定 -->
            <v-btn color="primary mt-5" to="/kaiin">戻る</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
  export default {
    middleware: 'auth',
    data(){
      return {
        joins: [],  // 参加状態ボタンONでここに入れる
        headers: [
          {
            text: '登録順',
            align: 'start',
            sortable: false,
            value: 'order',
            width: '30%'
          },
          {
            text: '名前',
            sortable: false,
            value: 'name',
            width: '40%'
          },
          {
            text: '参加状態',
            sortable: false,
            value: 'join',
          },
        ],
      }
    },
    async mounted() {
    // 現月の全員の「参加状態」button
    // 変更前：userテーブルに、level・order・name・joinがあった
    // 変更後：Confirmテーブルにある今年・今月のものを求める
      // const users = [];
      // this.$axios.get('/api/users')
      // .then((response) => {
      //   response.data.forEach(function(user){
      //     if (user.level != 9) {  // 9=退会者
      //       users.push({
      //         order: user.order,   // 2022.4.24
      //         name: user.name,
      //         join: user.join,
      //       })
      //     }
      //   })
      //   this.users = users
      // })
      const joins = [];
      // 指定の年月の全員のデータを取る
      let response = await this.$axios.post('/api/joins/get', {
          joinYear: this.$store.getters.joinYear,
          joinMonth: this.$store.getters.joinMonth
      })
      // .then((response) => {
      if (response.status == 200) {
        // 会員番号・会員名を得る
        let nameSets = []
        nameSets = this.$store.getters.nameSets   // 退会者は除いてある
        // console.log(nameSets)
        response.data.forEach(function(join) {
          //if (user.level != 9) {    // 9=退会者 --> 後で考えること
            // nameSetsの2次元配列から、orderに対するnameを求める
            let index = nameSets.findIndex( item => item[ 0 ] == join.order);
            // console.log(nameSet[index])
            // 会員番号・会員名・出欠を配列に入れる
            joins.push({
              order: join.order,   // 2022.4.24
              // name: 'satou',
              name: nameSets[index][1],
              join: join.join,
            })
        })
        // console.log(joins)
        this.joins = joins
      // })
      // .catch(err => {
      //   console.log('err:', err);
      // });
      } else {
        // 未処理
      }
    },
    methods:{
    }
  }
</script>

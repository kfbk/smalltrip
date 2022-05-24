<template>
<div>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="13">
        <v-card-title>
              年の参加状態
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
            text: '１',
            sortable: false,
            value: 'm1',
          },
          {
            text: '２',
            sortable: false,
            value: 'm2',
          },
          {
            text: '３',
            sortable: false,
            value: 'm3',
          },
          {
            text: '４',
            sortable: false,
            value: 'm4',
          },
          {
            text: '５',
            sortable: false,
            value: 'm5',
          },
          {
            text: '６',
            sortable: false,
            value: 'm6',
          },
          {
            text: '７',
            sortable: false,
            value: 'm7',
          },
          {
            text: '８',
            sortable: false,
            value: 'm8',
          },
          {
            text: '９',
            sortable: false,
            value: 'm9',
          },
          {
            text: '10',
            sortable: false,
            value: 'm10',
          },
          {
            text: '11',
            sortable: false,
            value: 'm11',
          },
          {
            text: '12',
            sortable: false,
            value: 'm12',
          },
        ],
        joins: [],
      }
    },
    async mounted() {
      let joins = [];
      let nameSets = []
      nameSets = this.$store.getters.nameSets   // 退会者は除いてある
      // joins.foreach(function(j) {
      //   joins.push({
      //     order: j.order,
      //     name: j.name
      //   })
      // })
      for (let i=0; i<nameSets.length; i++ ) {
        joins.push({
          order: nameSets[i][0],
          name: nameSets[i][1],
          m1: ' ',
          m2: ' ',
          m3: ' ',
          m4: ' ',
          m5: ' ',
          m6: ' ',
          m7: ' ',
          m8: ' ',
          m9: ' ',
          m10: ' ',
          m11: ' ',
          m12: ' ',
        })
      }
      // console.log(joins)
      this.joins = joins
      // for (let i=1; i<2; i++) {
      //   // 指定の年月の全員のデータを取る
  let i=6
  try {
        let response = await this.$axios.post('/api/joins/get', {
            joinYear: this.$store.getters.joinYear,
            joinMonth: i
        })
        // .then((response) => {
        // order, join が得られる
        if (response.status == 200) {
          console.log(response.data)
          console.log(response.data[i-1].order)     // 受信データの会員番号
          console.log(response.data.length)
          // 受信データの会員番号（order）と月データ（i）の交点に、受信データの出欠（join）が参加の場合のみ’１’を入れる
          for (let j=0; j<response.data.length; j++) {
            // テーブルデータ（joins）から、受信データの会員番号と同じものを探す
            let index = this.joins.findIndex( item => item.order == response.data[i-1].order);
            if (index != -1) {
              console.log(joins[index])
              console.log(response.data[i-1].join)
              let month = 'm' + String(i)
              console.log(month)
              if (response.data[i-1].join === '参加') {
                // console.log('>>>', this.joins[index].month, '<<<')
                // this.joins[index].month = '1'
                // console.log('>>>', this.joins[index].month, '<<<')
                // オブジェクト名を変数にする方法が分からないので、ずらずら書いた
                switch (i) {
                  case 1:
                    this.joins[index].m1 = 1;
                    break;
                  case 2:
                    this.joins[index].m2 = 1;
                    break;
                  case 3:
                    this.joins[index].m3 = 1;
                    break;
                  case 4:
                    this.joins[index].m4 = 1;
                    break;
                  case 5:
                    this.joins[index].m5 = 1;
                    break;
                  case 6:
                    this.joins[index].m6 = 1;
                    break;
                  case 7:
                    this.joins[index].m7 = 1;
                    break;
                  case 8:
                    this.joins[index].m8 = 1;
                    break;
                  case 9:
                    this.joins[index].m9 = 1;
                    break;
                  case 10:
                    this.joins[index].m10 = 1;
                    break;
                  case 11:
                    this.joins[index].m11 = 1;
                    break;
                  case 12:
                    this.joins[index].m12 = 1;
                    break;
                }
              }
              break;
            }
          }
        } else {
          console.log(response.status)
        }
      } catch (e) {
        console.log('エラー発生', e);
        return;
      }
      //     // 会員番号・会員名を得る
      //     let nameSets = []
      //     nameSets = this.$store.getters.nameSets   // 退会者は除いてある
      //     console.log(response.data)
      //     if (response.data.length) {
      //       response.data.forEach(function(join) {
      //           // nameSetsの2次元配列から、orderに対するnameを求める
      //           let index = nameSets.findIndex( item => item[ 0 ] == join.order);
      //           // console.log(nameSet[index])
      //           // 会員番号・会員名・出欠を配列に入れる
      //           joins.push({
      //             order: join.order,          // 会員番号
      //             name: nameSets[index][1],   // 名前
      //             join: (join.join === '参加')? '〇': '☓',            // 出欠
      //           })
      //       })
      //     } else {
      //       // 最初だけなので、考えない（データを作成しておく）
      //     }
      //     console.log(joins)
      //     this.joins[i] = joins
      //   } else {
      //     // 未処理
      //     console.log('axios err: 1')
      //   }
      // }
    },
    methods:{
    }
  }
</script>

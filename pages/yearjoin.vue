<template>
<div>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="13">
        <v-card-title>
            <span v-if="isLoading">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </span>
              年の参加状態
        </v-card-title>
        <v-card-subtitle>
          1：参加　0：不参加　空白：未定
        </v-card-subtitle>
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
        isLoading:true,
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
    for (let rx_month=1; rx_month<=12; rx_month++) {
      try {
        let response = await this.$axios.post('/api/joins/get', {
            joinYear: this.$store.getters.joinYear,
            joinMonth: rx_month
        })
        // .then((response) => {
        // order, join が得られる
        if (response.length == 0) continue;
        if (response.status == 200) {
          // console.log(response.data)
          // 受信データの会員番号（order）と月データ（i）の交点に、受信データの出欠（join）が参加の場合のみ’１’を入れる
          for (let j=0; j<response.data.length; j++) {
            // テーブルデータ（joins）から、受信データの会員番号と同じものを探す
            let rx_order = response.data[j].order     // 受信データの会員番号
            let index = this.joins.findIndex( item => item.order == rx_order);
            if (index != -1) {
              // console.log(joins[index].order)
              // console.log(response.data[j].join)
              let month = 'm' + String(rx_month)
              let val
              // console.log(month)
              if (response.data[j].join === '参加') val = 1
              else if (response.data[j].join === '不参加') val = 0
              else continue
            //     // console.log('>>>', this.joins[index].month, '<<<')
            //     // this.joins[index].month = '1'
            //     // console.log('>>>', this.joins[index].month, '<<<')
            //     // オブジェクト名を変数にする方法が分からないので、ずらずら書いた
                switch (rx_month) {
                  case 1:
                    this.joins[index].m1 = val;
                    break;
                  case 2:
                    this.joins[index].m2 = val;
                    break;
                  case 3:
                    this.joins[index].m3 = val;
                    break;
                  case 4:
                    this.joins[index].m4 = val;
                    break;
                  case 5:
                    this.joins[index].m5 = val;
                    break;
                  case 6:
                    this.joins[index].m6 = val;
                    break;
                  case 7:
                    this.joins[index].m7 = val;
                    break;
                  case 8:
                    this.joins[index].m8 = val;
                    break;
                  case 9:
                    this.joins[index].m9 = val;
                    break;
                  case 10:
                    this.joins[index].m10 = val;
                    break;
                  case 11:
                    this.joins[index].m11 = val;
                    break;
                  case 12:
                    this.joins[index].m12 = val;
                    break;
                }
            }
          }
        } else {
          console.log('エラー発生 status=', response.status)
          return
        }
      } catch (e) {
        console.log('エラー発生 ', rx_month, '月');
        return;
      }
    }
    this.isLoading = false
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

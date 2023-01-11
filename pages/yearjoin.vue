<template>
  <div class="tw-page">
    <div class="tw-card">
      <div class="tw-card-title">
        年の参加状態 <span style="color: red;">{{errMsg}}</span><br />
        1：参加　0：不参加　空白：未定
      </div>
      <div class="tw-card-body">
        <div v-if="!errMsg" class="overflow-x-auto mb-5">
          <table class="table-fixed mb-5">
            <thead>
              <tr>
                <th class="w-1/4 px-4 py-2">登録順</th>
                <th class="w-1/2 px-4 py-2">名前</th>
                <th class="w-1/4 px-4 py-2">１</th>
                <th class="w-1/4 px-4 py-2">２</th>
                <th class="w-1/4 px-4 py-2">３</th>
                <th class="w-1/4 px-4 py-2">４</th>
                <th class="w-1/4 px-4 py-2">５</th>
                <th class="w-1/4 px-4 py-2">６</th>
                <th class="w-1/4 px-4 py-2">７</th>
                <th class="w-1/4 px-4 py-2">８</th>
                <th class="w-1/4 px-4 py-2">９</th>
                <th class="w-1/4 px-4 py-2">10</th>
                <th class="w-1/4 px-4 py-2">11</th>
                <th class="w-1/4 px-4 py-2">12</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="join in joins" :key="join.order">
                <td class="border px-4 py-2">{{join.order}}</td>
                <td class="border px-4 py-2">{{join.name}}</td>
                <td class="border px-4 py-2">{{join.m1}}</td>
                <td class="border px-4 py-2">{{join.m2}}</td>
                <td class="border px-4 py-2">{{join.m3}}</td>
                <td class="border px-4 py-2">{{join.m4}}</td>
                <td class="border px-4 py-2">{{join.m5}}</td>
                <td class="border px-4 py-2">{{join.m6}}</td>
                <td class="border px-4 py-2">{{join.m7}}</td>
                <td class="border px-4 py-2">{{join.m8}}</td>
                <td class="border px-4 py-2">{{join.m9}}</td>
                <td class="border px-4 py-2">{{join.m10}}</td>
                <td class="border px-4 py-2">{{join.m11}}</td>
                <td class="border px-4 py-2">{{join.m12}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <nuxt-link class="mt-5 tw-btn-primary " to="/kaiin">戻る</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',
    data(){
      return {
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
        //     text: '１',
        //     sortable: false,
        //     value: 'm1',
        //   },
        //   {
        //     text: '２',
        //     sortable: false,
        //     value: 'm2',
        //   },
        //   {
        //     text: '３',
        //     sortable: false,
        //     value: 'm3',
        //   },
        //   {
        //     text: '４',
        //     sortable: false,
        //     value: 'm4',
        //   },
        //   {
        //     text: '５',
        //     sortable: false,
        //     value: 'm5',
        //   },
        //   {
        //     text: '６',
        //     sortable: false,
        //     value: 'm6',
        //   },
        //   {
        //     text: '７',
        //     sortable: false,
        //     value: 'm7',
        //   },
        //   {
        //     text: '８',
        //     sortable: false,
        //     value: 'm8',
        //   },
        //   {
        //     text: '９',
        //     sortable: false,
        //     value: 'm9',
        //   },
        //   {
        //     text: '10',
        //     sortable: false,
        //     value: 'm10',
        //   },
        //   {
        //     text: '11',
        //     sortable: false,
        //     value: 'm11',
        //   },
        //   {
        //     text: '12',
        //     sortable: false,
        //     value: 'm12',
        //   },
        // ],
        joins: [],
        isLoading:true,
        errMsg: '',
      }
    },
    async mounted() {
      let joins = [];
      let nameSets = []
      nameSets = this.$store.getters.nameSets   // 退会者は除いてある
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
      this.joins = joins
      //   // 指定の年月の全員のデータを取る
    for (let rx_month=1; rx_month<=12; rx_month++) {
      try {
        let response = await this.$axios.post('/api/joins/get', {
            joinYear: this.$store.getters.joinYear,
            joinMonth: rx_month
        })
        // order, join が得られる
        if (response.length == 0) continue;
        if (response.status == 200) {
          // 受信データの会員番号（order）と月データ（i）の交点に、受信データの出欠（join）が参加の場合のみ’１’を入れる
          for (let j=0; j<response.data.length; j++) {
            // テーブルデータ（joins）から、受信データの会員番号と同じものを探す
            let rx_order = response.data[j].order     // 受信データの会員番号
            let index = this.joins.findIndex( item => item.order == rx_order);
            if (index != -1) {
              let month = 'm' + String(rx_month)
              let val
              if (response.data[j].join === '参加') val = 1
              else if (response.data[j].join === '不参加') val = 0
              else continue
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
          errMsg = 'エラー発生 status='+ response.status
          this.isLoading = false
          return
        }
      } catch (e) {
        errMsg = 'エラー発生 '+ rx_month+ '月'
        this.isLoading = false
        return;
      }
    }
    this.isLoading = false
    },
  }
</script>

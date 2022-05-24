<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1>会員専用のページ</h1>

        <!-- 山登りの予定 -->
        <v-card elevation="13">
          <v-card-title>
            {{$store.getters.joinMonth}} 月の予定
            <div v-if="isLoading">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
          </v-card-title>
          <v-card-text>
            <!-- <v-btn @click="test1Btn">btn1</v-btn>
            <v-btn @click="test2Btn">btn2</v-btn> -->
            <v-radio-group v-model="join" row>
              <v-radio value="未定" label="未定"></v-radio>
              <v-radio value="参加" label="参加"></v-radio>
              <v-radio value="不参加" label="不参加"></v-radio>
            </v-radio-group>
            <v-btn :disabled="diSanka" color="primary" @click="sankaBtn">決定</v-btn>
            {{sankaMsg}}
            <div class="mt-5" v-if="Administrators">
              <!-- <input
                type="text"
                size="2"
                style="border: 2px solid #0a0;"
                 v-model="monthInput"> 月 -->
              <v-btn :disabled="btnMonth" color="primary" @click="monthBtn">今月の締め切り</v-btn>
              {{ monthMessage }}
            </div>
          </v-card-text>
        </v-card>
        <!-- 決算報告書 -->
        <!-- <v-card
          elevation="13"
          class="mt-5"
        >
          <v-card-text>
            <div>
              <a href="/kessan21.pdf" download="kessan21.pdf">前年度の決算報告書 ダウンロード</a>
            </div>
            <div v-if="Administrators">
              <v-btn @click="tesetBtn">test</v-btn>
            </div>
          </v-card-text>
        </v-card> -->

        <!-- 参加状態 -->
        <v-card
            elevation="13"
            class="mt-5"
        >
          <v-card-title>
            {{$store.getters.joinMonth}} 月の月例山行 参加状態
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" to="/monthjoin">月参加状態</v-btn>
            <!-- <v-btn color="primary" to="/yearjoin">年参加状態</v-btn> -->
            <v-btn color="primary" to="/yearjoin">年参加状態</v-btn>
          </v-card-text>
        </v-card>

        <!-- 会員情報変更/会員登録 -->
        <v-card
          elevation="13"
          class="mt-5"
        >
          <v-card-title>会員情報</v-card-title>
          <v-card-text>
            <v-btn color="primary" to="/changeinfo">
              自分の情報変更
            </v-btn>
            <v-btn color="primary" @click="taikai">
              退会
            </v-btn>
            <v-btn color="primary" to="/register" v-if="Administrators">
              会員登録
            </v-btn>
          </v-card-text>
        </v-card>

        <v-card
          elevation="13"
          class="mt-5"
        >
          <v-card-title>「つぶやき」への掲載方法</v-card-title>
          <v-card-text>
            次の3点の掲載内容を、佐藤にメールください。<br>
            １．タイトル<br>
            ２．本文<br>
            ３．ニックネーム（本名でもなんでもOK）<br>
            もし写真を載せたい場合、撮ったままメールに添付してください。
            写真は2枚まで、加工は佐藤が行います。<br>
            別の方法もあります。自分でmicroCMSというサイトにアクセスして、
            つぶやきを書きます。詳細はメールください。<br>
            佐藤メール：satou1497@gmail.com
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware: 'auth',
  data() {
    return {
      users: [],  // 全員の「参加状態」
      // level: '',  // 管理者（２）を特定する
      join: '',     // $store.getters.join に保存してある
      // joinMonth: 0,                    // 2022.5.12
      // post: {
      //   "title": "8度目のデータ登録",
      //   "content": "8度目のクライアントからデータを保存します。"
      // }
      // file: null,
      diSanka: false,
      btnMonth: false,
      // monthInput: '',
      monthMessage: '翌月予定を「未定」にする',
      sankaMsg: '参加・不参加を決めたら「決定」ボタンを押して下さい',
      isLoading:true,
    }
  },
  // created() {
  // mounted() {
  async mounted() {
    if (this.$store.getters.joinMonth == 0) {                               // 初めてのログインか？
    // if (1) {
      //  全会員のorder（会員番号）を求める（退会者は除く）
      // const nameSets = [];
      let response = await this.$axios.get('/api/users')
      if (response.status == 200) {
        let nameSets = []
        response.data.forEach(function(user){
          // let nameSet = []
          if (user.level != 9) {    // 9=退会者
            let nameSet = [
              user.order,
              user.name
            ]
            // this.$store.commit("nameSets", nameSet);  // こちらにするとエラーになる
            nameSets.push(nameSet)
          }
        })
        this.$store.commit("nameSets", nameSets);
        // console.log(nameSets)
        // console.log(this.$store.getters.nameSets)
      } else {
        // 未処理
      }
      // 現実行中の日付を得る
      response = await this.$axios.post('/api/get/setvalue', {                // 2022.5.12
        name: "Setvalue"
      })
      if (response.status == 200) {
        // console.log('response=', response)
        this.$store.commit("joinYear", response.data.joinYear);
        this.$store.commit("joinMonth", response.data.joinMonth);
      } else {
        // 未処理
      }
    }
    // 現ユーザのデータを得る（上の中にあるのだが、）
    // 次の'/api/user/join'は、'/api/user/get'の方がよい
    let response = await this.$axios.post('/api/user/join', {
      _id: this.$auth.user.id
    })
    // .then((response) => {
    if (response.status == 200) {
      this.$store.commit("level", response.data.level);
      this.$store.commit("tel", response.data.tel);
      this.$store.commit("order", response.data.order);  // 2022.4.24
      // this.join = response.data.join;    // userの中のjoinは使わない（削除すること）
    } else {
        // 未処理
    }
    // console.log(this.$store.getters.order)
    // console.log(this.$store.getters.joinYear)
    // console.log(this.$store.getters.joinMonth)
    // orderと年月から出欠を得る
    response = await this.$axios.post('/api/join/get', {
      order: this.$store.getters.order,
      joinYear: this.$store.getters.joinYear,
      joinMonth: this.$store.getters.joinMonth
    })
    // .then((response) => {
    if (response.status == 200) {
      this.join = response.data.join
      this.$store.commit("join", response.data.join);
    } else {
        // 未処理
    }
    this.isLoading = false
  },
            // this.$store.commit("joinYear", response.data.joinYear);
            // this.$store.commit("joinMonth", response.data.joinMonth);
      // この時点で次の変数は入っている
      //    this.$auth.user.id
      //    this.$auth.user.name
      //    this.$auth.user.email
      // 次は入ってない
      //    this.$auth.user.password
      //    this.$store.getters.order
      // 出欠一ヶ月保存を毎月保存することに変更した。
      // そのため、user.joinMonth-->setvalue.joinYear ＆ joinMonth にした
      // ここではまず、oreder・tel・levelを得るため'/api/user/join'を実行
      // 次に、joinYear・joinMonthを得るため'/api/get/setvalue'を実行
  //   this.join = this.$store.getters.join  // 2022.5.14
  //   // if (this.joinMonth == 0) {   // 2022.5.12
  //   if (this.$store.getters.userName !== this.$auth.user.name) {
  //     console.log(this.$store.getters.userName)
  //     console.log(this.$auth.user.name)
  //     this.$store.commit("userName", this.$auth.user.name)
  //     //次の'/api/user/join'は、'/api/user/get'の方がよい
  //     this.$axios.post('/api/user/join', {
  //         _id: this.$auth.user.id,
  //       }).then((response) => {
  //         // console.log('user=', response)
  //         //this.level = response.data.level;
  //         this.$store.commit("level", response.data.level);
  //         this.$store.commit("tel", response.data.tel);
  //         this.$store.commit("order", response.data.order);  // 2022.4.24
  //         this.join = response.data.join;
  //         // this.joinMonth = response.data.joinMonth;          // 2022.5.12
  //         // this.$store.commit("joinMonth", this.joinMonth);   // 2022.5.12
  //         // this.$store.commit("joinMonth", response.data.joinMonth);
  //         this.$axios.post('/api/get/setvalue', {                // 2022.5.12
  //           name: "Setvalue"
  //         }).then((response) => {
  //           // console.log('setvalue=', response)
  //           this.$store.commit("joinYear", response.data.joinYear);
  //           this.$store.commit("joinMonth", response.data.joinMonth);
  //           // console.log("joinYear=", this.$store.getters.joinYear)
  //           // console.log("joinMonth=", this.$store.getters.joinMonth)
  //           this.$axios.post('/api/join/get', {
  //             order: this.$store.getters.order,
  //             joinYear: this.$store.getters.joinYear,
  //             joinMonth: this.$store.getters.joinMonth
  //           }).then((response) => {
  //             // console.log('user=', response)
  //             this.$store.commit("join", response.data.join);
  //           })
  //         })
  //       })
  //   }
  // },
  computed: {
    // 管理者を得る（ここで登録する）
    Administrators() {
      let kanri = false;
      // switch (this.$auth.user.email) {
      //   case 'satou1497@gmail.com':
      //   case 'kevin6@test.com':
      //     kanri = true;
      //     break;
      // }
      if (this.$store.getters.level == 2) kanri = true
      return kanri
    },
    joinInit() {
      return '未定'
    }
  },
  methods: {
    // tesetBtn() {
    //   if (window.File) {
    //     // File APIに関する処理を記述
    //     window.alert("File APIが実装されてます。");
    //   } else {
    //     window.alert("本ブラウザではFile APIが使えません");
    //   }
    // },
    // async updateJoin(id, month) {
    //   let result = {
    //     err: '',
    //     stat: 0
    //   }
      // 応答は、join・joinMonthは変更前のものが返る
        //   "_id": "6228503840fb3f69ffb729fa",
        //   "name": "kevin6",
        //   "email": "kevin6@test.com",
        //   "password": "$2b$10$1iy09kFWheI.4jrg4.IJqOYlLsgqODvIWqoOOrrRDj.wfaLw1R2he",
        //   "join": "参加",
        //   "joinMonth": 3,
        //   "__v": 0
      // let err, stat;
      // try {
      //   const response = await this.$axios.put('/api/update/join', {
      //     _id: id,
      //     join: '未定',
      //     joinMonth: month
      //   })
      //   stat = response.status
      //   console.log('satou1 %d', stat)
      //   err = ''
      // } catch(e) {
      //   err = e.message
      //   console.log('satou2 %s', err)
      //   stat = 0
      // }
      // this.$forceUpdate();
    //   location.reload()
    //   return {
    //     err: err,
    //     stat:  stat
    //   }
    // },
    //-----------------------------
    // 「今月の締め切り」ボタン
    //  １．ほんとに実行するか、聞く
    //  ２．今月を＋１する
    //  ３．既に求めてない場合、全会員のorder（会員番号）を求める（退会者は除く）
    //  ４．1人ずつ新しい月と未定を全員に対し行う
    //-----------------------------
    // monthBtn() {
    async monthBtn() {
      this.btnMonth = true
      // let month = Number(this.monthInput)
      // // console.log(month)
      // if (1<=month && month<=12) {

      //  １．ほんとに実行するか、聞く
      var result = window.confirm("本当に今月を閉め切って良いですか");
      if (!result) {
        this.btnMonth = false
        return
      }
      // ２．今月を＋１する
      let month = this.$store.getters.joinMonth + 1
      let year = this.$store.getters.joinYear
      if (month > 12) {
        month = 1;
        year = year + 1
        this.$store.commit("joinYear", year)
      }
      this.$store.commit("joinMonth", month)
      // データベースを更新する
      const response = this.$axios.put('/api/update/setvalue', {
        name: "Setvalue",
        joinYear: year,
        joinMonth: month
      }).then((response) => {
        // console.log('response=', response)
      })
      .catch(err => {
        console.log('satou4 ' + 'err:', err);
      });

      //  ３．全会員のorder（会員番号）を求める（退会者は除く）
      let nameSets = []
      let orders = [];
      nameSets = this.$store.getters.nameSets   // 2次元配列 [order][name]
      // console.log(nameSets)
      nameSets.forEach(function(order) {
        orders.push(order[0])
      })
      // console.log(orders)
  //     this.$axios.get('/api/users')
  //     .then((response) => {
  //       response.data.forEach(function(user){
  //         if (user.level != 9) {    // 9=退会者
  //           // users.push(user._id)
  //           //---
  //           let data=[user.order, user.name]
  //           users.push(data)
  //           //---end
  //           //users.push(user.order)
  //         }
  //       })
  //       // 数値を小さい順に並べる
  //       users.sort(function(first, second){
  //         if (first > second){
  //           return 1;
  //         }else if (first < second){
  //           return -1;
  //         }else{
  //           return 0;
  //         }
  //       })
        //  ４．1人ずつ新しい月と未定を全員に対し行う
        for (let i=0; i<orders.length; i++) {
          this.$axios.post('/api/confirm/create', {
            order: orders[i],
            joinYear: year,
            joinMonth: month,
            join: '未定'
          }).then((response) => {
            // console.log(orders[i], 'confirm=', response)
          })
          .catch(err => {
            console.log('satou5 ' + 'err:', err);
          });
        }
        this.$store.commit("join", '未定')
          // IDが正常に求まったので、そのIDを使って、予定＝'未定'と月を設定する
          //     （forEachを使うと、中断できないので止める）
          // users.forEach(function(user){
          // 2022.5.12
          // for (let i=0; i<users.length; i++) {
          //   // let result = this.updateJoin(users[i], month)
          //   // if (err || stat != 200) {
          //   //   console.log('satou3' + 'updateJoin %s,%d', err, stat)
          //   //   break;
          //   // }
          //   const response = this.$axios.put('/api/update/join', {
          //     _id: users[i],
          //     join: this.joinInit,
          //     joinMonth: month
          //   })
          //   .then((response) => {
          //     console.log('responseStat=%d', response.status)
          //     if (response.status == 200) {
          //       if (i == users.length )
          //         this.monthMessage = '設定しました'
          //         this.join = this.joinInit
          //         this.joinMonth = month
          //         this.$store.commit("joinMonth", this.joinMonth);
          //         //location.reload()                                 // 更新ボタンと同じで、初期状態になる
          //         this.$forceUpdate();
          //     } else {
          //       this.monthMessage = 'エラー番号=' + String(response.status)
          //       i = users.length    // ループを終える
          //     }
          //       // location.reload() --> 画面が更新されない
          //     //   this.$forceUpdate();
          //     // }
          //   })
          //   .catch(err => {
          //     console.log('satou5' + 'err:', err);
          //     this.monthMessage = err.message
          //     // break; --> エラーになるので使えない
          //     i = users.length    // ループを終える
          //     // location.reload() --> 画面が更新されない
          //     this.$forceUpdate();
          //   });
          // }
          // console.log('satou4')
          // satou4 kaiin.vue?19ea:259
          // satou5err: ReferenceError: err is not defined
          // at eval (kaiin.vue?19ea:249:1)
          // 2  responseStat=200  kaiin.vue?19ea:236
          // location.reload()
        // })
        // .catch(err => {
        //   console.log('satou5' + 'err:', err);
        //   this.monthMessage = err.message
        // });
      // } else {
      //   this.monthMessage = '半角で1～12を入力'
      // }
      this.join = '未定'
      this.btnMonth = false
      // 4を入力後、予定月変更のボタンを押したら次のエラー
      // 画面：エラー番号undefined
      // Console
      //satou3updateJoin undefined,NaN
      //kaiin.vue?19ea:164 satou1 200
    },
    //-----------------------------
    // 参加・不参加の決定
    //-----------------------------
    sankaBtn() {
    // async sankaBtn() {
      // this.diSanka = true;
      // let status = await this.updateJoin(this.join, this.joinMonth)
      // if (status == 200) {
      //   this.sankaMsg = '設定しました（${status}）'
      // } else {
      //   console.log('updateResult=%d', status)
      // }
      // this.diSanka = false;
      if (this.$store.getters.level == 9) {
        window.alert("退会者は参加できません");
      }
      this.diSanka = true;
      this.$store.commit("join", this.join);
      // this.$axios.put('/api/update/join', {
      //   _id: this.$auth.user.id,
      //   join: this.join,
      //   // joinMonth: this.joinMonth      // 2022.5.12
      // })
      this.$axios.put('/api/join/update', {
        order: this.$store.getters.order,
        joinYear: this.$store.getters.joinYear,
        joinMonth: this.$store.getters.joinMonth,
        join: this.$store.getters.join

      })
      .then((response) => {
        if (response.status == 200) {
          this.sankaMsg = '設定しました'
        } else {
          this.sankaMsg = 'エラー番号' + String(response.status)
        }
        this.diSanka = false;
      })
      .catch((error) => {
        this.sankaMsg = error
        this.diSanka = false;
      })
    },
    // async upload() {
    //   let formData = new FormData()
    //   formData.append('file', this.file)

    //   const res = await axios.post('/file', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })

    //   console.log(res)
    // },

    // 退会
    taikai() {
      if (window.confirm("本当に退会されますか？")) {
        let level = 9;    // 9=退会
        this.$axios.put('/api/update/level', {
          _id: this.$auth.user.id,
          level: level
        })
          .then((response) => {
              this.$store.commit("level", level);
          })
          .catch((error) => {
            console.log(error)
            // this.valid = true
          })
      }
    },
    taikai2() {
      // window.confirm("作成中です。しばらくお待ちください。");
      window.alert("作成中です。しばらくお待ちください。");
    }
  },
}
</script>

<style scoped>
th,td {
  border: solid 1px;              /* 枠線指定 */
  padding: 10px;      /* 余白指定 */
}
table {
  border-collapse:  collapse;     /* セルの線を重ねる */
  /* width: 350px; */
}
thead {
  background-color: aqua;
}
span {
  display: inline-block;
  width: 7em;
}
</style>

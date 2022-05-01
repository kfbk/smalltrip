<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <h1>会員専用のページ</h1>

        <!-- 山登りの予定 -->
        <v-card elevation="13">
          <v-card-title>
            {{$store.getters.joinMonth}} 月の予定
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
              <input
                type="text"
                size="2"
                style="border: 2px solid #0a0;"
                 v-model="monthInput"> 月
              <v-btn :disabled="diMonth" color="primary" @click="monthBtn">予定月変更</v-btn>
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
            <v-btn color="primary" @click="dispTbl">参加状態</v-btn>
            <div v-if="users.length!=0">
              <!-- 2022.4.25 table変更
              <table width="100%" class="mt-5">
                <tr>
                  <th>登録順</th>
                  <th>名前</th>
                  <th>参加状態</th>
                </tr>
                <tr v-for="(user, index) in users" :key="index">
                  <td>{{user.order}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.join}}</td>
                </tr>
              </table> -->
              <v-data-table
                  :headers="headers"
                  :items="users"
                  :sort-by="'order'"
                  :sort-desc="false"
                  mobile-breakpoint="100"
                  class="mt-5 elevation-13"
              ></v-data-table>
            </div>
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
            もし写真を載せたい場合、撮ったまま添付してください<br>
            写真は2枚まで、加工は佐藤が行います。<br>
            別の方法もあります。自分でつぶやきにアクセスして<br>
            microCMSというサイトです。詳細はメールください。
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
        headers: [
          {
            text: '登録順',
            align: 'start',
            sortable: false,
            value: 'order',
            width: '30%'
          },
          { text: '名前', sortable: false, value: 'name', width: '40%' },
          { text: '参加状態', sortable: false, value: 'join', },
        ],
      users: [],  // 全員の「参加状態」
      level: '',  // 管理者（２）を特定する
      // ラジオボタンを押すと、joinが参加または不参加になる
      join: '',
      joinMonth: 0,
      // post: {
      //   "title": "8度目のデータ登録",
      //   "content": "8度目のクライアントからデータを保存します。"
      // }
      // file: null,
      diSanka: false,
      diMonth: false,
      monthInput: '',
      monthMessage: '全会員の予定を「未定」にする',
      sankaMsg: '参加・不参加を決めたら「決定」ボタンを押して下さい',
    }
  },
  // created() {
  mounted() {
    if (this.joinMonth == 0) {
      this.$axios.post('/api/user/join', {
          _id: this.$auth.user.id,
        }).then((response) => {
          // console.log(response.data);
          this.level = response.data.level;
          this.$store.commit("level", this.level);
          this.$store.commit("tel", response.data.tel);
          this.$store.commit("order", response.data.order);  // 2022.4.24
          this.join = response.data.join;
          this.joinMonth = response.data.joinMonth;
          this.$store.commit("joinMonth", this.joinMonth);
          // console.log(this.$auth.user.name)
          // console.log(this.$auth.user.joinMonth)
          // console.log(this.join)
        })
    }
  },
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
      if (this.level == 2) kanri = true
      return kanri
    },
    joinInit() {
      return '未定'
    }
  },
  methods: {
    tesetBtn() {
      if (window.File) {
        // File APIに関する処理を記述
        window.alert("File APIが実装されてます。");
      } else {
        window.alert("本ブラウザではFile APIが使えません");
      }
    },
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
    // 予定月変更のボタン
    // monthBtn() {
    async monthBtn() {
      this.diMonth = true
      let month = Number(this.monthInput)
      // console.log(month)
      if (1<=month && month<=12) {
        // 月の指定が正しいので、まず、全会員のIDを求める
        const users = [];
        this.$axios.get('/api/users')
        .then((response) => {
          // console.log('response body:', response.data);
          response.data.forEach(function(user){
            users.push(user._id)
            // console.log(user._id)
          })
          // console.log(users)

          // IDが正常に求まったので、そのIDを使って、予定＝'未定'と月を設定する
          //     （forEachを使うと、中断できないので止める）
          // users.forEach(function(user){
         for (let i=0; i<users.length; i++) {
            // let result = this.updateJoin(users[i], month)
            // if (err || stat != 200) {
            //   console.log('satou3' + 'updateJoin %s,%d', err, stat)
            //   break;
            // }
            const response = this.$axios.put('/api/update/join', {
              _id: users[i],
              join: this.joinInit,
              joinMonth: month
            })
            .then((response) => {
              console.log('responseStat=%d', response.status)
              if (response.status == 200) {
                if (i == users.length )
                  this.monthMessage = '設定しました'
                  this.join = this.joinInit
                  this.joinMonth = month
                  this.$store.commit("joinMonth", this.joinMonth);
                  //location.reload()                                 // 更新ボタンと同じで、初期状態になる
                  this.$forceUpdate();
              } else {
                this.monthMessage = 'エラー番号=' + String(response.status)
                i = users.length    // ループを終える
              }
                // location.reload() --> 画面が更新されない
              //   this.$forceUpdate();
              // }
            })
            .catch(err => {
              console.log('satou5' + 'err:', err);
              this.monthMessage = err.message
              // break; --> エラーになるので使えない
              i = users.length    // ループを終える
              // location.reload() --> 画面が更新されない
              this.$forceUpdate();
            });
          }
          console.log('satou4')
          // satou4 kaiin.vue?19ea:259
          // satou5err: ReferenceError: err is not defined
          // at eval (kaiin.vue?19ea:249:1)
          // 2  responseStat=200  kaiin.vue?19ea:236
          // location.reload()
        })
        .catch(err => {
          console.log('satou5' + 'err:', err);
          this.monthMessage = err.message
        });
      } else {
        this.monthMessage = '半角で1～12を入力'
      }
      this.diMonth = false
      // 4を入力後、予定月変更のボタンを押したら次のエラー
      // 画面：エラー番号undefined
      // Console
      //satou3updateJoin undefined,NaN
      //kaiin.vue?19ea:164 satou1 200
    },
    // 参加・不参加の決定
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
      this.diSanka = true;
      this.$axios.put('/api/update/join', {
        _id: this.$auth.user.id,
        join: this.join,
        joinMonth: this.joinMonth
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
    // 現月の全員の「参加状態」button
    dispTbl() {
      // this.users.push('kunio')
      // this.users.push('akiyo')
      const users = [];
      this.$axios.get('/api/users')
      .then((response) => {
        // console.log('response body:', response.data);
        response.data.forEach(function(user){
          users.push({
            order: user.order,   // 2022.4.24
            name: user.name,
            join: user.join,
          })
          // console.log(user.join)
        })
        this.users = users
        // console.log('length=%d', this.users.length)
      })
      .catch(err => {
        console.log('err:', err);
      });
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

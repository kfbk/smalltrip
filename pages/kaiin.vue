<template>
  <div class="tw-page">
    <!-- <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <span v-if="isLoading">
          <v-progress-circular
                indeterminate
                color="primary"
          ></v-progress-circular>
        </span> -->
        <h1 class="text-3xl font-bold">
          会員専用のページ
        </h1>
        <!-- {{item.title}} -->

        <!-- 会長の注意事項 -->
        <div class="tw-card">
          <div class="tw-card-title">
            会長の注意事項
          </div>
          <div class="tw-card-body">
            <nuxt-link :to="'/news/' + item.id" class="tw-btn-primary">
              クリック
            </nuxt-link>
          </div>
        </div>
        <!-- <v-card elevation="13">
          <v-card-text>
            <div v-for="content in contents" :key="content.id">
              <nuxt-link :to="'/news/' + content.id" style="text-decoration: none;">
                <v-card class="mt-1" elevation="13" color="primary">
                  <v-card-title style="color: white;">
                    {{ content.title }}
                  </v-card-title>
                </v-card>
                <p>{{ new Date(content.updatedAt).toLocaleDateString() }}</p>
              </nuxt-link>
            </div>
          </v-card-text>
        </v-card> -->

        <!-- 山登りの予定 -->
        <div class="tw-card">
          <div class="tw-card-title">
            {{$store.getters.joinMonth}} 月の予定
          </div>
          <div class="tw-card-body">
            <label>
              <input type="radio" value="未定" v-model="join">未定　
            </label>
            <label>
              <input type="radio" value="参加" v-model="join">参加　
            </label>
            <label>
              <input type="radio" value="不参加" v-model="join">不参加
            </label>
            <div>
              <button class="tw-btn-primary" @click="sankaBtn" id="sanka">
                決定
              </button>
              {{sankaMsg}}
            </div>
            <div class="mt-5" v-if="Administrators">
                <button id="simekiri"
                  class="tw-btn-primary" 
                  @click="monthBtn">今月の締め切り
                </button>
                {{ monthMessage }}
            </div>
          </div>
        </div>
        <!-- <v-card elevation="13" class="mt-5">
          <v-card-title>
            {{$store.getters.joinMonth}} 月の予定
          </v-card-title>
          <v-card-text>
            <v-radio-group v-model="join" row>
              <v-radio value="未定" label="未定"></v-radio>
              <v-radio value="参加" label="参加"></v-radio>
              <v-radio value="不参加" label="不参加"></v-radio>
            </v-radio-group>
            <v-btn :disabled="diSanka" color="primary" @click="sankaBtn">決定</v-btn>
            {{sankaMsg}}
            <div class="mt-5" v-if="Administrators">
              <v-btn :disabled="btnMonth" color="primary" @click="monthBtn">今月の締め切り</v-btn>
              {{ monthMessage }}
            </div>
          </v-card-text>
        </v-card> -->

        <!-- 参加状態 -->
        <div class="tw-card">
          <div class="tw-card-title">
            {{$store.getters.joinMonth}} 月の月例山行 参加状態
          </div>
          <div class="tw-card-body">
            <nuxt-link class="tw-btn-primary" to="/monthjoin">月参加状態</nuxt-link>
            <nuxt-link class="tw-btn-primary" to="/yearjoin">年参加状態</nuxt-link>
          </div>
        </div>
        <!-- <v-card
            elevation="13"
            class="mt-5"
        >
          <v-card-title>
            {{$store.getters.joinMonth}} 月の月例山行 参加状態
          </v-card-title>
          <v-card-text>
            <v-btn color="primary" to="/monthjoin">月参加状態</v-btn>
            <v-btn color="primary" to="/yearjoin">年参加状態</v-btn>
          </v-card-text>
        </v-card> -->

        <!-- 会員情報変更/会員登録 -->
        <div class="tw-card">
          <div class="tw-card-title">
            会員情報
          </div>
          <div class="tw-card-body">
            <nuxt-link class="tw-btn-primary" to="/changeinfo">
              自分の情報
            </nuxt-link>
            <button class="ml-1 tw-btn-primary" @click="taikai">
              退会
            </button>
            <nuxt-link class="tw-btn-primary" to="/register" v-if="Administrators">
              会員登録
            </nuxt-link>
          </div>
        </div>
        <!-- <v-card
          elevation="13"
          class="mt-5"
        >
          <v-card-title>会員情報</v-card-title>
          <v-card-text>
            <v-btn color="primary" to="/changeinfo">
              自分の情報
            </v-btn>
            <v-btn color="primary" @click="taikai">
              退会
            </v-btn>
            <v-btn color="primary" to="/register" v-if="Administrators">
              会員登録
            </v-btn>
          </v-card-text>
        </v-card> -->

        <div class="tw-card">
          <div class="tw-card-title">
            「つぶやき」への掲載方法
          </div>
          <div class="tw-card-body">
            次の3点の掲載内容を、佐藤にメールください。<br>
            １．タイトル<br>
            ２．本文<br>
            ３．ニックネーム（本名でもなんでもOK）<br>
            もし写真を載せたい場合、撮ったままメールに添付してください。
            写真は2枚まで、加工は佐藤が行います。<br>
            別の方法もあります。自分でmicroCMSというサイトにアクセスして、
            つぶやきを書きます。詳細はメールください。<br>
            佐藤メール：satou1497@gmail.com
          </div>
        </div>
        <!-- <v-card
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
        </v-card> -->
      <!-- </v-col>
    </v-row> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware: 'auth',
  data() {
    return {
      users: [],  // 全員の「参加状態」
      join: '',     // $store.getters.join に保存してある
      diSanka: false,
      btnMonth: false,
      monthMessage: '翌月予定を「未定」にする',
      sankaMsg: '参加・不参加を決めたら「決定」ボタンを押して下さい',
      isLoading:true,
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://smalltrip.microcms.io/api/v1/news?limit=1',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': process.env.API_KEY }
      }
    )
    // console.log(data.contents[0])
    // return data
    return {
      item: data.contents[0]
    }
  },
  async mounted() {
    if (this.$store.getters.joinMonth == 0) {                               // 初めてのログインか？
      //  全会員のorder（会員番号）を求める（退会者は除く）
      let response = await this.$axios.get('/api/users')
      if (response.status == 200) {
        let nameSets = []
        response.data.forEach(function(user){
          if (user.level != 9) {    // 9=退会者
            let nameSet = [
              user.order,
              user.name
            ]
            nameSets.push(nameSet)
          }
        })
        this.$store.commit("nameSets", nameSets);
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
    if (response.status == 200) {
      this.$store.commit("level", response.data.level);
      this.$store.commit("tel", response.data.tel);
      this.$store.commit("order", response.data.order);  // 2022.4.24
    } else {
        // 未処理
    }
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
  computed: {
    // 管理者を得る（ここで登録する）
    Administrators() {
      let kanri = false;
      if (this.$store.getters.level == 2) kanri = true
      return kanri
    },
    joinInit() {
      return '未定'
    }
  },
  methods: {
    //-----------------------------
    // 「今月の締め切り」ボタン
    //  １．ほんとに実行するか、聞く
    //  ２．今月を＋１する
    //  ３．既に求めてない場合、全会員のorder（会員番号）を求める（退会者は除く）
    //  ４．1人ずつ新しい月と未定を全員に対し行う
    //-----------------------------
    async monthBtn() {
      if (this.btnMonth) return
      const simekiri = document.getElementById("simekiri")
      const syori = "opacity-50"
      simekiri.classList.add(syori)
      this.btnMonth = true
      //  １．ほんとに実行するか、聞く
      var result = window.confirm("本当に今月を閉め切って良いですか");
      if (!result) {
        simekiri.classList.remove(syori)
        this.btnMonth = false
        return
      }
      this.monthMessage = '処理中です'
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
      const response = await this.$axios.put('/api/update/setvalue', {
        name: "Setvalue",
        joinYear: year,
        joinMonth: month
      })
      console.log('response=', response)
      if (response.status == 200) {
      } else {
        this.monthMessage = 'error:001'
        simekiri.classList.remove(syori)
        this.btnMonth = false
        return
      }

      //  ３．全会員のorder（会員番号）を求める（退会者は除く）
      let nameSets = []
      let orders = [];
      nameSets = this.$store.getters.nameSets   // 2次元配列 [order][name]
      nameSets.forEach(function(order) {
        orders.push(order[0])
      })
      //  ４．1人ずつ新しい月と未定を全員に対し行う
      for (let i=0; i<orders.length; i++) {
        let response = await this.$axios.post('/api/confirm/create', {
          order: orders[i],
          joinYear: year,
          joinMonth: month,
          join: '未定'
        })
        if (response.status == 200) {
        } else {
          this.monthMessage = 'error:002'
          simekiri.classList.remove(syori)
          this.btnMonth = false
          return
        }
      }
      this.$store.commit("join", '未定')
      this.join = '未定'
      this.monthMessage = '設定しました'
      simekiri.classList.remove(syori)
      this.btnMonth = false
    },
    //-----------------------------
    // 参加・不参加の決定
    //-----------------------------
    sankaBtn() {
      if (this.diSanka) return
      if (this.$store.getters.level == 9) {
        window.alert("退会者は参加できません");
        return
      }
      const sanka = document.getElementById("sanka")
      const syori = "opacity-50"
      sanka.classList.add(syori)
      this.diSanka = true
      // sanka.classList.remove(syori)
      // this.diSanka = false
      // console.log(sanka.classList)
      // return
      this.$store.commit("join", this.join);
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
        // this.diSanka = false;
      })
      .catch((error) => {
        this.sankaMsg = error
        // this.diSanka = false;
      })
      sanka.classList.remove(syori)
      this.diSanka = false;
    },

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
          })
      }
    },
    taikai2() {
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
}
thead {
  background-color: aqua;
}
span {
  display: inline-block;
  width: 7em;
}
</style>

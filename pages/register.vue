<template>
<div>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="13">
        <v-card-title>
            会員登録
        </v-card-title>
        <v-card-text>
          <form @submit.prevent="registerUser">
            <!-- 登録順 -->
            <div class="form-group">
              <label for="order">登録順（半角、重ならない番号）:</label>
              <input class="text" v-model="user.order" @input="onInput">
            </div>
            <!-- 姓名 -->
            <div class="form-group">
              <label for="name">姓名（全角）:</label>
              <input class="text" v-model="user.name" @input="onInput">
            </div>
            <!-- Email -->
            <div class="form-group">
              <label for="email">Email（半角）:</label>
              <input class="text" v-model="user.email" @input="onInput">
            </div>
            <!-- Password -->
            <div class="form-group">
              <label for="password">Password（半角）:</label>
              <input class="text" type="password" v-model="user.password" @input="onInput">
            </div>
            <!-- 電話番号 -->
            <div class="form-group">
              <label for="password">電話番号（半角、なくても可）:</label>
              <input class="text" v-model="user.tel" @input="onInput">
            </div>
            <!-- level -->
            <v-radio-group v-model="user.level" row>
              <v-radio :value="0" label="準会員"></v-radio>
              <v-radio :value="1" label="会員"></v-radio>
              <v-radio :value="2" label="管理者"></v-radio>
            </v-radio-group>
            <!-- 登録ボタン -->
            <v-btn color="primary mt-5" type="submit">登録</v-btn>
            <v-btn color="primary mt-5" to="/kaiin">戻る</v-btn>
            <span v-show="stat == 200" class="red--text"> 正常登録</span>
            <v-btn v-show="stat == 200" @click="TextClrea">クリア</v-btn>
          </form>
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
        user:{
          name: '',
          email: '',
          password: '',
          order: '',    // 2022.4.24 登録順（1～999）
          tel: '',      // 2022.4.10
          level: 1,     // 2022.4.10
          join: '未定',
          joinMonth: 3
        },
        stat: 0
      }
    },
    methods:{
      TextClrea() {
        this.stat = 0;
        this.user.name = ''
        this.user.email = ''
        this.user.password =''
        this.user.order = ''    // 2022.4.24 表示順（1～999）
        this.user.tel = ''      // 2022.4.10
        this.user.level = 1     // 2022.4.10
      },
      onInput() {
        this.stat = 0;
        console.log('clear stat')
      },
      // 登録 ボタンON
      registerUser(){
        this.user.joinMonth = this.$store.getters.joinMonth
        // console.log(this.user.joinMonth)
        // return
        this.$axios.post('/api/auth/register',this.user)
          .then((response) => {
              // ユーザ登録後、そのユーザに変わる必要ないので、次はコメントにする
              // this.$auth.loginWith('local',{
              //     data: this.user
              // })
              console.log(response.status)
              this.stat = response.status
          })
          .catch((error) => {
            console.log(error)
            // this.valid = true
          })
      },
    }
  }
</script>

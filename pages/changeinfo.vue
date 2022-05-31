<template>
<div>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="13">
        <v-card-title>
            会員情報
        </v-card-title>
        <v-card-subtitle>
          会員情報は変更が出来ません<br>
        </v-card-subtitle>
        <v-card-text>
          <form @submit.prevent="updateUser">
            <!-- 表示順 -->
            <div class="form-group">
              <label for="order">会員番号</label>
              <input class="text" v-model="user.order" readonly>
            </div>
            <!-- 姓名 -->
            <div class="form-group">
              <label for="name">姓名</label>
              <input class="text" v-model="user.name" readonly>
            </div>
            <!-- Email -->
            <div class="form-group">
              <label for="email">ID</label>
              <input class="text" v-model="user.email" readonly>
            </div>
            <!-- Password -->
            <div class="form-group">
              <label for="password">Password</label>
              <input class="text" v-model="user.password" readonly>
            </div>
            <!-- 電話番号 -->
            <!-- <div class="form-group">
              <label for="password">電話番号（半角）:</label>
              <input class="text" v-model="user.tel">
            </div> -->
            <!-- level -->
            <!-- <v-radio-group v-model="user.level" row>
              <v-radio :value="0" label="準会員"></v-radio>
              <v-radio :value="1" label="会員"></v-radio>
              <v-radio :value="2" label="管理者"></v-radio>
            </v-radio-group> -->
            <!-- 登録ボタン -->
            <!-- <v-btn disabled color="primary mt-5" type="submit">保存</v-btn> -->
            <v-btn color="primary mt-5" to="/kaiin">戻る</v-btn>
            {{errMsg}}
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
          name: this.$auth.user.name,
          email: this.$auth.user.email,
          password: '',
          order: '',    // 2022.4.24 表示順（1～999）
          tel: '',      // 2022.4.10
          level: '',     // 2022.4.10
        },
        errMsg: ''
      }
    },
    mounted() {
      this.user.password = this.$store.getters.password
      this.user.order = this.$store.getters.order   // 2022.4.24
      this.user.tel = this.$store.getters.tel
      this.user.level = this.$store.getters.level
      console.log(this.user.password)
    },
    methods:{
      // onInput() {
      //   this.stat = 0;
      //   console.log('clear stat')
      // },
      // 情報変更 ボタンON
      updateUser(){
        this.errMsg = ''
        // if (!this.user.email || !this.user.password) {
        //   console.log('emaii or password error')
        //   this.errMsg = 'emaii or password error'
        //   return;
        // }
        // this.user.joinMonth = this.$store.getters.joinMonth
        // console.log(this.user.joinMonth)
        // return
        // console.log(this.user.tel, this.user.level)
        this.$axios.put('/api/update/user', {
          _id: this.$auth.user.id,
          name: this.user.name,
          email: this.user.email,
          // Expressの方で次を入れるとエラーになる
          // password: this.user.password,
          order: this.user.order,   // 2022.2.24
          tel: this.user.tel,
          level: this.user.level
        })
          .then((response) => {
              // ユーザ登録後、そのユーザに変わる必要ないので、次はコメントにする
              // this.$auth.loginWith('local',{
              //     data: this.user
              // })
              this.errMsg = '正常終了'
              this.$store.commit("tel", this.user.tel);
              this.$store.commit("level", this.user.level);
              this.$store.commit("order", this.user.order);
              // this.$auth.user.name = this.user.name
              this.$auth.user.email = this.user.email
              // this.stat = response.status
          })
          .catch((error) => {
            this.errMsg = '異常中止'
            console.log(error)
            // this.valid = true
          })
      },
    }
  }
</script>

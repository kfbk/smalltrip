<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="13">
          <v-card-title>
            <h3>ログインしてください。</h3>
            <h5>（会員ページを閲覧できます）<br>
            （会員になるには問合せしてください）</h5>
          </v-card-title>
          <v-card-text>
    <!-- <h3 style="color: black; text-align: center">ログイン認証してください</h3> -->
    <!-- <v-text-field v-model="mailAddress" label="メールアドレス" light></v-text-field>
    <v-text-field v-model="password" label="パスワード" light></v-text-field>
    <p class="errorMessage" style="color: red" v-if="valid">{{validError}}</p>
    <v-btn @click="SignIn"> ログイン </v-btn> -->
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">Email:</label>
                <input class="text" v-model="user.email">
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input class="text" type="password" v-model="user.password">
              </div>
              <v-btn color="primary mt-5" type="submit">ログイン</v-btn>
              <span>{{errMsg}}</span>
            </form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export default {
  data () {
    return {
      // mailAddress: '',
      // password: '',
        user:{
          email:'',
          password:''
        },
        errMsg: '　',
      valid: false, //打ち込んだメールアドレス・パスワードが正しくない時はtrue、正しい時はfasle
      validError: "メールアドレスまたはパスワードが間違っています", //validがtrueの時に表示するメッセージ
    }
  },
  methods: {
    // SignIn () {
    //   try {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, this.mailAddress, this.password)
    //       .then((user) => {
    //         console.log('ログイン成功')
    //         // this.$store.state.loginState = true　直接書いたらダメ
    //         this.$store.commit('loginState', this.mailAddress, this.password);
    //         // console.log(this.$store.state.loggedIn)
    //         // ログインしたら飛ぶページを指定
    //         this.$router.push("/kaiin");
    //         this.valid = false
    //       })
    //       .catch((error) => {
    //         console.error(error)
    //         this.valid = true
    //       })
    //   } catch (e) {
    //     console.error(e)
    //   }
    // },
      async loginUser() {
        console.log('loginUser ON')
        this.$store.commit("password", this.user.password);
        try {
          const response = await this.$auth.loginWith('local', { data:this.user });
          // const msg = response.data.msg;
          console.log(this.user.password, response );
          // {token: 'eyJhb...6uo'}
          //リダイレクト先をhome: falseにする-->それでも!msgの場合はhomeにリダイレクトする
          // 現在「home: '/kaiin'」としている
          // if (msg) {
          //   this.errMsg = msg
          //   console.log('ここには、どんな時に来るのか不明')
          //   // location.reload();
          // } else {
          //   this.errMsg = ''
          //   console.log('Tokenが戻ってきて正常。この後、どこで「/api/auth/user」を出すのか？');
          // }
        } catch(error) {
          // 登録ユーザない場合・パスワード違いの場合、ここに来る（共にerror=403）
          // console.log('satou'+error);
          this.errMsg = 'Email または Password が違います'
        }
      },
    //メールアドレス形式で入力をチェック
   checkString (mail){
     var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     return regex.test(mail);
   }
  }
}
</script>

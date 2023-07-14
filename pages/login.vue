<template>
  <div class="tw-page">
    <!-- <input id="email" class="p-2 mb-1 w-full rounded-md border-2 border-blue-900 shadow-sm" type="text"  v-model="user.email" />
    <div>
      {{user.email}}
    </div> -->
    <h3>下記で、ログインしてください。</h3>
            <h5>（最初はログインに時間が掛かります）<br>
            （会員ページを閲覧できます）<br>
            （会員になるには問合せしてください）</h5>
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">ID</label>
                <input id="email" class="p-2 mb-1 w-full rounded-md border-2 border-blue-900 shadow-sm" type="text" v-model="user.email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input id="password" class="p-2 mb-1 w-full rounded-md border-2 border-blue-900 shadow-sm" type="password" v-model="user.password">
              </div>
              <button class="my-2 px-4 py-2
                     border-2 border-blue-500 rounded-md
                     bg-gradient-to-b from-blue-600 to-blue-400
                     hover:from-blue-500 hover:to-blue-300
                     text-white shadow-lg">ログイン
              </button>
              <span style="color: red;">{{errMsg}}</span>
            </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{
        email:'',
        password:''
      },
      errMsg: '',
      // valid: false, //打ち込んだメールアドレス・パスワードが正しくない時はtrue、正しい時はfasle
      // validError: "メールアドレスまたはパスワードが間違っています", //validがtrueの時に表示するメッセージ
      btnDisabled: false
    }
  },
  methods: {
      async loginUser() {
        if (this.btnDisabled) return
        this.btnDisabled = true
        this.$store.commit("password", this.user.password);
        try {
          const response = await this.$auth.loginWith('local', { data:this.user });
        } catch(error) {
          this.errMsg = 'ID または Password が違います'
          this.btnDisabled = false
        }
      },
  }
}
</script>

<template>
  <div class="tw-page">
    <div class="tw-card">
      <div class="tw-card-title">
        会員登録
        <h2 class="text-xs">(間違えて登録した場合、管理者に連絡)</h2>
      </div>
      <div class="tw-card-body">
        <div>
          <form @submit.prevent="registerUser">
            <!-- 登録順 -->
            <div class="form-group">
              <label for="order">会員番号（半角）：</label>
              <input class="tw-input" v-model="user.order" @input="onInput">
            </div>
            <!-- 姓名 -->
            <div class="form-group">
              <label for="name">姓名（全角）:</label>
              <input class="tw-input" v-model="user.name" @input="onInput">
            </div>
            <!-- Email -->
            <div class="form-group">
              <label for="email">ID（半角）:</label>
              <input class="tw-input" v-model="user.email" @input="onInput">
            </div>
            <!-- Password -->
            <div class="form-group">
              <label for="password">Password（半角）:</label>
              <input class="tw-input" type="password" v-model="user.password" @input="onInput">
            </div>
            <v-radio-group v-model="user.level" row>
              <v-radio :value="0" label="準会員"></v-radio>
              <v-radio :value="1" label="会員"></v-radio>
              <v-radio :value="2" label="管理者"></v-radio>
            </v-radio-group>
            <!-- 登録ボタン -->
            <button class="tw-btn-primary mt-5" type="submit">登録</button>
            <nuxt-link class="tw-btn-primary mt-5" to="/kaiin">戻る</nuxt-link>
            <span v-show="stat == 200" class="red--text"> 正常登録</span>
            <button class="tw-btn-primary mt-5" v-show="stat == 200" @click="TextClrea">クリア</button>
          </form>
        </div>
      </div>
    </div>
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
      async registerUser(){
        this.user.joinMonth = this.$store.getters.joinMonth
        let response = await this.$axios.post('/api/auth/register',this.user)
        if (response.status == 200) {
          this.stat = response.status
        } else {
          // 未処理
        }
        response = await this.$axios.post('/api/confirm/create', {
            order: this.user.order,
            joinYear: this.$store.getters.joinYear,
            joinMonth: this.$store.getters.joinMonth,
            join: '未定'
          })
      },
    }
  }
</script>

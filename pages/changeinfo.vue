<template>
  <div class="tw-page">
    <div class="tw-card">
      <div class="tw-card-title">
        <h1 class="text-3xl font-bold">会員情報</h1>
        <h2 class="text-2xl">会員情報は変更が出来ません</h2>
      </div>
      <div class="tw-card-body">
        <form @submit.prevent="updateUser" class="mb-5">
            <!-- 表示順 -->
            <div class="form-group">
              <label for="order">会員番号</label>
              <input class="tw-input" v-model="user.order" readonly>
            </div>
            <!-- 姓名 -->
            <div class="form-group">
              <label for="name">姓名</label>
              <input class="tw-input" v-model="user.name" readonly>
            </div>
            <!-- Email -->
            <div class="form-group">
              <label for="email">ID</label>
              <input class="tw-input" v-model="user.email" readonly>
            </div>
            <!-- Password -->
            <div class="form-group">
              <label for="password">Password</label>
              <input class="tw-input" v-model="user.password" readonly>
            </div>
          </form>
          <nuxt-link class="tw-btn-primary" to="/kaiin">戻る</nuxt-link>
          {{errMsg}}
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
      // 情報変更 ボタンON
      updateUser(){
        this.errMsg = ''
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
              this.errMsg = '正常終了'
              this.$store.commit("tel", this.user.tel);
              this.$store.commit("level", this.user.level);
              this.$store.commit("order", this.user.order);
              this.$auth.user.email = this.user.email
          })
          .catch((error) => {
            this.errMsg = '異常中止'
            console.log(error)
          })
      },
    }
  }
</script>

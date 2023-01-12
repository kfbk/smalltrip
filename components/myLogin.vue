<template>
  <div>
    <div v-if="$auth.loggedIn">
      <button @click="logout()" class="tw-btn-small">
        ログアウト
      </button>
      <div>
        {{$auth.user.name}}
      </div>
    </div>
    <div v-else>
          <!-- <button to="/login" class="bg-gradient-to-b from-blue-300 to-blue-800 hover:bg-gradient-to-l text-white rounded px-4 py-2"> -->
          <nuxt-link to="/login" class="tw-btn-primary">
            ログイン
          </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>
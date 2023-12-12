<template>
  <div>
    <div>
      <img src="~assets/img/haruna.jpg" alt="" />
    </div>
    <nav class=" text-white bg-gray-500">
      <div class="hidden lg:flex justify-between items-center">
        <div class="flex">
          <img src="/logo.png" alt="" class="h-4 m-4">
          <!-- <span>小さな旅友の会</span> -->
          <ul class="flex">
            <li
              class="lg:border-none"
              v-for="(menuItem,index) in menuItems"
              :key="index"
            >
              <nuxt-link
                :to="menuItem.link"  active-class="active-list" exact
                class="block px-6 py-2 hover:bg-gray-600 "
              >
                {{ menuItem.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <myLogin />
      </div>
      <div class="lg:hidden">
        <div class="flex justify-between items-center h-10">
          <div class="flex">
            <button class="pl-2" @click="reverseOpen">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path v-show="!this.$store.state.isOpen" d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                  <path v-show="this.$store.state.isOpen" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
              </svg>
            </button>
            <img src="/logo.png" alt="" class="h-4 m-4">
            <span class="p-2">小さな旅</span>
          </div>
          <myLogin />
        </div>
        <div :class="this.$store.state.isOpen? 'block': 'hidden'"
          class="bg-gray-500"
        >
          <ul>
            <li
              class="border-b"
              v-for="(menuItem,index) in menuItems"
              :key="index"
            >
              <nuxt-link
                :to="menuItem.link"
                class="block px-8 py-2 hover:bg-gray-600"
              >
                {{ menuItem.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          name: 'ホーム',
          link: '/'
        },
        {
          name: 'つぶやき',
          link: '/blogs/'
        },
        {
          name: '問い合わせ',
          link: '/contact'
        },
        {
          name: '月例山行',
          link: '/plan'
        },
        {
          name: '過去の月例山行',
          link: '/past'
        },
        {
          name: '会員専用',
          link: '/kaiin'
        },
      ],
    }
  },
  methods: {
    reverseOpen() {
      // this.$store.commit("reverseOpen")
      // this.$store.isOpen = !this.$store.isOpen
      this.$store.commit('reverseOpen')
      // location.reload()
      // console.log('this.$store.isOpen=', this.$store.state.isOpen)
    }
  },
  computed: {
    isOpen() {
      return this.$route.path
    }
  },
  watch: {
    isOpen() {
      // this.$store.state.isOpen = false
      this.$store.commit('clearOpen')
    }
  }
}
</script>

<!--  scopedを入れたら機能しなくなった -->
<style>
.active-list {
  /* outline: 1px solid rgb(0, 0, 0); */
  @apply bg-gray-600;
}
</style>

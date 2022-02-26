<template>
    <div>
    <!-- <v-app> これにすると、メイン画面が無くなる-->
      <!-- <v-navigation-drawer app>SideMenu</v-navigation-drawer> -->
      <v-app-bar color="primary" dark app>
        <!-- ハンバーガーメニュー -->
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <img src="/logo.png" alt="" height="40px" align="middle">
          <span> 小さな旅友の会</span>
        </v-toolbar-title>
        <v-tabs>
          <v-tab
            v-for="(menuItem,index) in menuItems"
            :key="index"
            :to="menuItem.link"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
<<<<<<< HEAD
=======
      <v-spacer></v-spacer>
      <v-btn>ログアウト</v-btn>
>>>>>>> parent of 989cd66 (動かない)
      </v-app-bar>
      <!-- ハンバーガーメニュー -->
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item
              v-for="(menuItem,index) in menuItems"
              :key="index"
              :to="menuItem.link"
            >
              <v-list-item-title>
                {{ menuItem.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        {
          name: 'ホーム',
          link: '/'
        },
        {
          name: 'つぶやき',
          link: '/blog'
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
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
// タイトル文字が隠れてしまっているので、すべて表示させ
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}
.title {
  height: 40px;
  line-height: 40px;
}
// PCのときハンバーガーメニューを非表示
.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}
// PCのときメニューを表示
.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}
</style>

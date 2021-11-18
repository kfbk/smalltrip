<template>
    <header>
      <v-app-bar color="primary" dark app>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title>小さな旅友の会</v-toolbar-title>
        <v-tabs>
          <v-tab
            v-for="(menuItem,index) in menuItems"
            :key="index"
            :to="menuItem.link"
          >
            {{ menuItem.name }}
          </v-tab>
        </v-tabs>
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
    </header>
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

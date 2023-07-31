<template>
  <div class="tw-page">
    <img src="~assets/img/hiking.png" class="w-96">
    <p class="bg-green-200 px-8 py-4 my-3">2023年（令和5年） 山行計画</p>
    <div class="tw-btn-primary w-40">
      <button @click="pfdopen">詳細はこちらへ</button>
    </div>
    <table class="100%">
      <thead>
        <tr>
          <th width="10%">月</th>
          <th width="20%">山　名</th>
          <th width="20%">場　所</th>
          <th width="30%">予定コース</th>
          <th width="20%">予想時間</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>１</td>
          <td>神成山</td>
          <td>富岡市</td>
          <td>神農原―神成山ー南蛇井</td>
          <td>２時間</td>
        </tr>
        <tr>
          <td>２</td>
          <td>美の山</td>
          <td>秩父市</td>
          <td>道の駅みなのー美の山ー和銅黒谷</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>３</td>
          <td>鹿岳</td>
          <td>南牧村</td>
          <td>不動寺ー観音岩(870)ー鷹巣山－不動寺</td>
          <td>３時間40分</td>
        </tr>
        <tr>
          <td>４</td>
          <td>寝釈迦</td>
          <td>みどり市</td>
          <td>塔の沢登山口ー寝釈迦ー賽の河原ー折塚</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>５</td>
          <td>三峰山</td>
          <td>沼田市</td>
          <td>河内神社ー三峰山</td>
          <td>３時間40分</td>
        </tr>
        <tr>
          <td>６</td>
          <td>榛名相馬山</td>
          <td>高崎市</td>
          <td>松ノ沢峠ｰスルス峠ｰ相馬山ｰヤセオネ峠</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>７</td>
          <td>尾瀬ヶ原</td>
          <td>片品村</td>
          <td>鳩待峠ｰ山の鼻ｰ尾瀬ヶ原散策（往復）</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>８</td>
          <td>暑気払い</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>９</td>
          <td>石尊山</td>
          <td>安中市</td>
          <td>安中榛名駅-石尊山ｰ戸谷山ｰ安中榛名駅</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>10</td>
          <td>角田山･弥彦山</td>
          <td>新潟県</td>
          <td>1日目：角田山、2日目：弥彦山</td>
          <td>3時間+2.5時間</td>
        </tr>
        <tr>
          <td>11</td>
          <td>船が鼻山</td>
          <td>昭和村</td>
          <td>登山口ｰ枡水コースｰ山頂-登山口</td>
          <td>４時間半</td>
        </tr>
        <tr>
          <td>12</td>
          <td>忘年会</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
th,td {
  border: solid 1px;              /* 枠線指定 */
  padding: 10px;      /* 余白指定 */
}
table {
  border-collapse:  collapse;     /* セルの線を重ねる */
  /* width: 350px; */
}
thead {
  background-color: aqua;
}
</style>

<script>
export default {
  methods: {
    pfdopen() {
      document.location.href = '/2023plan.pdf'
    }
  }
}
</script>

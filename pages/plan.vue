<template>
  <div class="tw-page">
    <img src="~assets/img/hiking.png" class="w-96" />
    <p class="bg-green-200 px-8 py-4 my-3">2024年（令和6年） 山行計画</p>
    <!-- <div class="tw-btn-primary w-40">
      <button @click="pfdopen">難易度はこちら</button>
    </div> -->
    <table class="100%">
      <thead>
        <tr>
          <th width="10%">月</th>
          <th width="25%">山　名</th>
          <th width="65%">場　所<br />予定コース</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>１</td>
          <td>桐生観音山</td>
          <td>桐生市<br />泉龍院ー観音山ーガッチン山ー文昌寺</td>
        </tr>
        <tr>
          <td>２</td>
          <td>桜山</td>
          <td>藤岡市<br />八塩温泉ー弁天山ー桜山ー駐車場</td>
        </tr>
        <tr>
          <td>３</td>
          <td>伊豆ヶ岳</td>
          <td>飯能市<br />正丸駅ー伊豆ヶ岳ー山伏峠ー名栗元気プラザ</td>
        </tr>
        <tr>
          <td>４</td>
          <td>迦葉山</td>
          <td>沼田市<br />弥勒寺ー迦葉山ー玉原湖</td>
        </tr>
        <tr>
          <td>５</td>
          <td>物見山</td>
          <td>下仁田町<br />神津牧場ｰ物見岩・物見山ー香坂峠ー神津牧場</td>
        </tr>
        <tr>
          <td>６</td>
          <td>二つ岳</td>
          <td>渋川市<br />森林公園ｰ鷲巣風穴-雄岳雌岳-蒸湯跡-管理小屋</td>
        </tr>
        <tr>
          <td>７</td>
          <td>四阿山</td>
          <td>嬬恋村<br />バルキャビン(ゴンドラ)ｰ四阿山（往復）</td>
        </tr>
        <tr>
          <td>８</td>
          <td>暑気払い</td>
          <td></td>
        </tr>
        <tr>
          <td>９</td>
          <td>赤城地蔵岳</td>
          <td>前橋市<br />小沼-長七郎岳-地蔵岳ｰ新坂平</td>
        </tr>
        <tr>
          <td>10</td>
          <td>尾瀬ケ原・三条滝</td>
          <td>
            片品村<br />1日目：鳩待峠-温泉小屋泊（三条の滝 往復）<br />
            2日目：温泉小屋-鳩待峠
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>碓氷峠歩き</td>
          <td>松井田町<br />熊野神社ｰ碓井坂関所跡-横川</td>
        </tr>
        <tr>
          <td>12</td>
          <td>忘年会</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
th,
td {
  border: solid 1px; /* 枠線指定 */
  padding: 10px; /* 余白指定 */
}
table {
  border-collapse: collapse; /* セルの線を重ねる */
  /* width: 350px; */
}
thead {
  background-color: aqua;
}
</style>

<script>
export default {
  methods: {
    // pfdopen() {
    //   document.location.href = '/2023plan0808.pdf'
    // }
  },
};
</script>

<template>
  <div class="tw-page">
    <img src="~assets/img/hiking.png" class="w-96" />
    <p class="bg-green-200 px-8 py-4 my-3">2025年（令和7年） 山行計画</p>
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
          <td>小沢岳</td>
          <td>下仁田町<br />七久保ー椚峠ー小沢岳　往復</td>
        </tr>
        <tr>
          <td>３</td>
          <td>深高山・石尊山</td>
          <td>足利市<br />猪子トンネル入り口ー深高山ー石尊山ー石尊下</td>
        </tr>
        <tr>
          <td>４</td>
          <td>丸山</td>
          <td>横瀬町<br />道の駅あしがくぼー石仏ー丸山ー赤谷</td>
        </tr>
        <tr>
          <td>５</td>
          <td>鼻曲山</td>
          <td>軽井沢町<br />二度上峠ｰ鼻曲山　往復</td>
        </tr>
        <tr>
          <td>６</td>
          <td>湯の丸山</td>
          <td>嬬恋村<br />地蔵峠ｰ湯の丸山　往復</td>
        </tr>
        <tr>
          <td>７</td>
          <td>筑波山</td>
          <td>つくば市<br />筑波山神社入口ｰ男体山ー女体山ーつつじヶ丘</td>
        </tr>
        <tr>
          <td>８</td>
          <td>暑気払い</td>
          <td></td>
        </tr>
        <tr>
          <td>９</td>
          <td>杏ヶ岳</td>
          <td>渋川市<br />湖畔駐車場-杖の神峠-杏ヶ岳　往復</td>
        </tr>
        <tr>
          <td>10</td>
          <td>茅ヶ岳</td>
          <td>
            韮崎市<br />5日:深田公園-茅ヶ岳　往復　ホテル泊<br />
            6日：ワイン工場見学ー紅葉巡り雁坂トンネル秩父ー高崎
          </td>
        </tr>
        <tr>
          <td>11</td>
          <td>信濃路自然歩道</td>
          <td>軽井沢町<br />軽井沢峠の茶屋ｰ白糸の滝ｰ竜返しの滝－小瀬温泉</td>
        </tr>
        <tr>
          <td>12</td>
          <td>未定</td>
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

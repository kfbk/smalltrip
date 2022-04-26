<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
    <img src="~assets/img/hiking.png" height="100">
    <p>2022年　山行計画</p>
    <table width="100%">
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
          <td>吾妻山</td>
          <td>桐生市</td>
          <td>吾妻公園ｰ吾妻山-村松峠ｰ吾妻公園</td>
          <td>２時間半</td>
        </tr>
        <tr>
          <td>２</td>
          <td>神成山</td>
          <td>富岡市</td>
          <td>神農原―神成山ー南蛇井</td>
          <td style="background-color:red;">コロナ中止</td>
        </tr>
        <tr>
          <td>３</td>
          <td>黒滝山</td>
          <td>南牧村</td>
          <td>不動寺ー観音岩(870)ー鷹巣山－不動寺</td>
          <td style="background-color:red;">コロナ中止</td>
        </tr>
        <tr>
          <td>４</td>
          <td>菅峰</td>
          <td>東吾妻町</td>
          <td>須賀尾峠ー菅峰（往復）</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>５</td>
          <td>嵩山</td>
          <td>中之条町</td>
          <td>東登山口-嵩山－東登山口</td>
          <td>２時間半</td>
        </tr>
        <tr>
          <td>６</td>
          <td>赤城五輪ハイキングコース</td>
          <td>富士見村</td>
          <td>大沼-五輪峠ｰ薬師岳ｰ出張峠ｰキャンプ場</td>
          <td>３時間</td>
        </tr>
        <tr>
          <td>７</td>
          <td>四阿屋山</td>
          <td>両神村</td>
          <td>薬師堂ー四阿屋山（往復）</td>
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
          <td未定</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10</td>
          <td>泊り山行：弥彦山・角田山</td>
          <td>新潟県</td>
          <td>未定</td>
          <td>未定</td>
        </tr>
        <tr>
          <td>11</td>
          <td>備前楯山</td>
          <td>足尾町</td>
          <td>かじか荘ー備前楯山（往復）</td>
          <td>2時間30分</td>
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

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

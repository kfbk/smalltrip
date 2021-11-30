<template>
  <div>
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
        <tr v-for="month in yearplan" :key="month.name">
          <td>{{month.name}}</td>
          <td>{{month.mount}}</td>
          <td>{{month.place}}</td>
          <td>{{month.course}}</td>
          <td>{{month.time}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearplan: [
        {
          name: '１',
          mount: '吾妻山',
          place: '桐生市',
          course: '吾妻公園ｰ吾妻山-村松峠ｰ吾妻公園',
          time: '２時間半'
        },
        {
          name: '２',
          mount: '神成山',
          place: '富岡市',
          course: '神農原―神成山ー南蛇井',
          time: '2時間'
        },
        {
          name: '３',
          mount: '黒滝山',
          place: '南牧村',
          course: '不動寺ー観音岩(870)ー鷹巣山－不動寺',
          time: '３時間半'
        },
        {
          name: '４',
          mount: '菅峰',
          place: '東吾妻町',
          course: '須賀尾峠ー菅峰（往復）',
          time: '３時間'
        },
        {
          name: '５',
          mount: '嵩山',
          place: '中之条町',
          course: '東登山口-嵩山－東登山口',
          time: '２時間半'
        },
        {
          name: '６',
          mount: '赤城五輪ハイキングコース',
          place: '富士見村',
          course: '大沼-五輪峠ｰ薬師岳ｰ出張峠ｰキャンプ場',
          time: '３時間'
        },
        {
          name: '７',
          mount: '四阿屋山',
          place: '両神村',
          course: '薬師堂ー四阿屋山（往復）',
          time: '３時間'
        },
        {
          name: '８',
          mount: '未定',
          place: '',
          course: '',
          time: ''
        },
        {
          name: '９',
          mount: '未定',
          place: '',
          course: '',
          time: ''
        },
        {
          name: '10',
          mount: '泊り山行：弥彦山・角田山',
          place: '新潟県',
          course: '未定',
          time: '未定'
        },
        {
          name: '11',
          mount: '備前楯山',
          place: '足尾町',
          course: 'かじか荘ー備前楯山（往復）',
          time: '2時間30分'
        },
        {
          name: '12',
          mount: '忘年会',
          place: '',
          course: '',
          time: ''
        },
      ]
    }
  }
}
</script>

<style>
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

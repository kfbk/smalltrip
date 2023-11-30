<template>
  <div class="tw-page">
    <img src="~assets/img/hiking.png" class="w-96" />
    <div v-for="year in years" :key="year.yearname">
      <p class="mt-4 mb-1">{{ year.yearname }}</p>
      <table width="100%">
        <thead>
          <tr>
            <th width="10%">月</th>
            <th width="45%">山　名</th>
            <th width="45%">場　所</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="month in year.months" :key="month.name">
            <td>{{ month.name }}</td>
            <td>{{ month.mount }}</td>
            <td>{{ month.place }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="post">
      <p class="mt-5">以降は、平成6年～平成26年の月例山行</p>
      <img src="~assets/img/kako1.png" />
      <img src="~assets/img/kako2.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          yearname: "2023年",
          months: [
            {
              name: "１",
              mount: "神成山",
              place: "富岡市",
            },
            {
              name: "２",
              mount: "美の山",
              place: "秩父市",
            },
            {
              name: "３",
              mount: "鹿岳",
              place: "南牧村",
            },
            {
              name: "４",
              mount: "寝釈迦",
              place: "みどり市",
            },
            {
              name: "５",
              mount: "三峰山",
              place: "沼田市",
            },
            {
              name: "６",
              mount: "榛名相馬山",
              place: "高崎市",
            },
            {
              name: "７",
              mount: "尾瀬ヶ原",
              place: "片品村",
            },
            {
              name: "８",
              mount: "暑気払い",
              place: "",
            },
            {
              name: "９",
              mount: "石尊山",
              place: "安中市",
            },
            {
              name: "10",
              mount: "角田山･弥彦山",
              place: "新潟県",
            },
            {
              name: "11",
              mount: "船が鼻山",
              place: "昭和村",
            },
            {
              name: "12",
              mount: "忘年会",
              place: "",
            },
          ],
        },
        {
          yearname: "2022年（コロナ休止あり）",
          months: [
            {
              name: "１",
              mount: "吾妻山",
              place: "桐生市",
            },
            {
              name: "４",
              mount: "菅峰",
              place: "東吾妻町",
            },
            {
              name: "５",
              mount: "嵩山",
              place: "中之条町",
            },
            {
              name: "６",
              mount: "赤城五輪ハイキング",
              place: "富士見村",
            },
            {
              name: "７",
              mount: "四阿屋山",
              place: "両神村",
            },
            {
              name: "９",
              mount: "弓池",
              place: "草津町",
            },
            {
              name: "10",
              mount: "黒瀧山",
              place: "南牧村",
            },
            {
              name: "11",
              mount: "備前楯山",
              place: "足尾町",
            },
          ],
        },
        {
          yearname: "2021年（コロナ休止あり）",
          months: [
            {
              name: "３",
              mount: "妙義山",
              place: "富岡",
            },
            {
              name: "10",
              mount: "浅間隠山",
              place: "倉渕",
            },
            {
              name: "11",
              mount: "赤城／鍋割・荒山",
              place: "前橋",
            },
          ],
        },
        {
          yearname: "2020年（コロナ休止あり）",
          months: [
            {
              name: "１",
              mount: "荒船山",
              place: "下仁田",
            },
            {
              name: "２",
              mount: "諏訪山",
              place: "神流町",
            },
            {
              name: "６",
              mount: "赤城／黒檜山",
              place: "前橋",
            },
            {
              name: "７",
              mount: "谷川岳",
              place: "みなかみ町",
            },
            {
              name: "10",
              mount: "榛名／天狗山",
              place: "東吾妻",
            },
            {
              name: "11",
              mount: "榛名／水沢山",
              place: "渋川",
            },
          ],
        },
        {
          yearname: "2019年（平成31年/令和元年）",
          months: [
            {
              name: "１",
              mount: "檜沢岳",
              place: "南牧村",
            },
            {
              name: "２",
              mount: "高尾山",
              place: "東京",
            },
            {
              name: "３",
              mount: "御場山",
              place: "下仁田",
            },
            {
              name: "４",
              mount: "根本山",
              place: "桐生",
            },
            {
              name: "５",
              mount: "池の平・篭の登山",
              place: "嬬恋村",
            },
            {
              name: "６",
              mount: "エビ山",
              place: "六合村",
            },
            {
              name: "７",
              mount: "三国山",
              place: "水上",
            },
            {
              name: "９",
              mount: "蓼科山",
              place: "立科",
            },
            {
              name: "10",
              mount: "大菩薩峠",
              place: "甲州市",
            },
            {
              name: "11",
              mount: "岩櫃山",
              place: "東吾妻",
            },
          ],
        },
        {
          yearname: "2018年（平成30年）",
          months: [
            {
              name: "１",
              mount: "小沢岳",
              place: "下仁田",
            },
            {
              name: "２",
              mount: "栗生山",
              place: "桐生",
            },
            {
              name: "３",
              mount: "父不見山",
              place: "神流町",
            },
            {
              name: "４",
              mount: "角落山",
              place: "倉渕",
            },
            {
              name: "５",
              mount: "吾妻耶山",
              place: "水上",
            },
            {
              name: "６",
              mount: "黒斑山",
              place: "嬬恋",
            },
            {
              name: "７",
              mount: "尾瀬沼",
              place: "沼田",
            },
            {
              name: "９",
              mount: "荒船山",
              place: "下仁田",
            },
            {
              name: "10",
              mount: "前武尊山",
              place: "川場村",
            },
            {
              name: "11",
              mount: "笠丸山",
              place: "上野村",
            },
          ],
        },
        {
          yearname: "2017年（平成29年）",
          months: [
            {
              name: "１",
              mount: "雪で中止",
              place: "---",
            },
            {
              name: "２",
              mount: "蕨山",
              place: "飯能",
            },
            {
              name: "３",
              mount: "物語山",
              place: "下仁田",
            },
            {
              name: "４",
              mount: "仙人ヶ岳",
              place: "足利",
            },
            {
              name: "５",
              mount: "飯盛山",
              place: "清里",
            },
            {
              name: "６",
              mount: "谷川岳沢巡り",
              place: "水上",
            },
            {
              name: "７",
              mount: "縞枯山",
              place: "茅野市",
            },
            {
              name: "９",
              mount: "榛名山",
              place: "渋川",
            },
            {
              name: "10",
              mount: "武甲山",
              place: "秩父",
            },
            {
              name: "11",
              mount: "笠丸山",
              place: "上野村",
            },
          ],
        },
        {
          yearname: "2016年（平成28年）",
          months: [
            {
              name: "１",
              mount: "若御子山",
              place: "秩父",
            },
            {
              name: "２",
              mount: "四ツ又山",
              place: "下仁田",
            },
            {
              name: "３",
              mount: "十二ヶ岳",
              place: "高山村",
            },
            {
              name: "４",
              mount: "鼻曲山",
              place: "松井田",
            },
            {
              name: "５",
              mount: "稲含山",
              place: "下仁田",
            },
            {
              name: "６",
              mount: "赤城／鈴ヶ岳",
              place: "富士見村",
            },
            {
              name: "７",
              mount: "鹿俣山",
              place: "沼田",
            },
            {
              name: "９",
              mount: "立岩",
              place: "南牧村",
            },
            {
              name: "10",
              mount: "霧藻ヶ峰",
              place: "秩父",
            },
            {
              name: "11",
              mount: "烏帽子岳",
              place: "南牧村",
            },
          ],
        },
      ],
    };
  },
};
</script>

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
.post img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>

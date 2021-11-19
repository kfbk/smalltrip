<template>
  <div>
    <img src="~assets/img/hiking.png" height="100">
    <p>2022年　山行計画</p>
    <table>
      <thead>
        <tr>
          <th width="50px">月</th>
          <th width="150px">山　　名</th>
          <th>場　　所</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="month in yearplan" :key="month.name">
          <td>{{month.name}}</td>
          <td>{{month.mount}}</td>
          <td>{{month.place}}</td>
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
          place: '桐生市'
        },
        {
          name: '２',
          mount: '神成山',
          place: '富岡市'
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
  width: 350px;
}
thead {
  background-color: aqua;
}
</style>

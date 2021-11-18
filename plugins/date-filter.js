import Vue from 'vue'

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedDate = `${year}年${month}月${day}日`;
  return formattedDate;
}

Vue.filter('date', dateFilter)

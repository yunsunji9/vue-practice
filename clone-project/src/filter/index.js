import Vue from "vue"

// 가격표기
Vue.filter("price", (val) => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

// 평점표기
Vue.filter('grade', function (value) {
  if (!value) return ''
  return (value / 100) * 5
})

import Vue from 'vue'
import App from './App.vue'

// plugin
import store from './store';
import { router } from './router/index.js';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import VueLazyload from "vue-lazyload";
import './filter';

// css
import 'swiper/css/swiper.css'
import '@/assets/scss/common.scss'

Vue.use(VueAwesomeSwiper);

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '~@/assets/images/common/img_default.png',
  //loading: 'dist/loading.gif',
  attempt: 1
});

new Vue({
  store,
  router,
  render: h => h(App),
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}).$mount('#app')

//Vue.config.productionTip = false


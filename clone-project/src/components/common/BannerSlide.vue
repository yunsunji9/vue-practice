<template>
  <div class="slider-area">
    <swiper ref="mySwiper" :options="swiperOption" v-if="bannerList.length > 1">
      <swiper-slide v-for="(item, idx) in bannerList" :key="idx">
        <a :href="item.linkUrl" v-if="item.linkUrl">
          <img :src="item.imgUrl" :alt="item.bannerTitle">
        </a>
        <img :src="item" alt="" v-else>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" :class="{'btn-banner': bannerPopup}"></div>
    </swiper>

    <a :href="bannerList[0].linkUrl" v-else-if="bannerList[0].linkUrl">
      <img :src="bannerList[0].imgUrl" alt="bannerList[0].bannerTitle"/>
    </a>

    <img :src="bannerList[0]" alt="" v-else/>

    <button class="btn-banner-pop" aria-label="전체배너보기 팝업" @click.prevent="showPop" v-if="bannerPopup"></button>
    <PopBanner
      :bannerList="bannerList"
      :isPopShow="isPopShow"
      v-if="bannerPopup"
      @close="closePop"
    ></PopBanner>
  </div>
</template>

<script>
import PopBanner from '@/components/common/PopBanner';
import { getScrollOffsetY, scrollNode } from '@/utils/scroll.js';

export default {
  props: [
    'bannerList',
    'bannerPopup',
    'option'
  ],
  components: {
    PopBanner
  },
  data(){
    return{
      defaultOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        }
      },
      isPopShow: false,
      winScrollTop: 0,
      loadedImgCount: 0
    }
  },
  computed: {
    swiperOption() {
      return Object.assign({}, this.defaultOption, this.option)
    }
  },
  mounted() {
    if (this.swiperOption.loop == true && this.swiperOption.slidesPerView == 'auto') this.$refs.mySwiper.$swiper.slideTo(0, 1000, false)
  },
  methods: {
    showPop(){
      this.isPopShow = true;
      this.winScrollTop = getScrollOffsetY();

      document.querySelector('body').style.top = `-${this.winScrollTop}px`;
      document.querySelector('body').style.position = 'fixed';
    },
    closePop() {
      this.isPopShow = false;

      document.querySelector('body').removeAttribute('style');
      scrollNode.scrollTop = this.winScrollTop;
    },
  }
}
</script>

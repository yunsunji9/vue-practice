<template>
  <a :href="item.url">
    <div class="item-img">
      <BannerSlide
        v-if="!slidetype"
        :bannerList="item.thumbnail.slice(0, 5)">
      </BannerSlide>
      <img v-lazy="item.thumbnail[0]" alt="" v-else>
    </div>
    <div class="item-info">
      <div class="title-bx">
        {{ item.name }}
      </div>
      <div class="info-bx">
        <span class="location">
          {{ item.cityName }}
        </span>
        <span class="hotel-grage" v-if="item.starRating > 3">
          {{ item.starRating }}성급
        </span>
        <span class="hotel-grade" v-if="item.hotelRating">
          평점
          <span class="grade">{{ item.hotelRating | grade }}</span>
        </span>
      </div>
      <div class="price-bx">
        <div class="price">
          <span class="num">
            {{ item.minDisplayPrice | price }}
          </span>
          <span class="unit">원~</span>
        </div>
      </div>
      <div class="category">
        해외호텔
      </div>
    </div>
  </a>
</template>

<script>
import BannerSlide from '@/components/common/BannerSlide';

export default {
  props: [
    'item',
    'slidetype'
  ],
  components: {
    BannerSlide
  }
}
</script>

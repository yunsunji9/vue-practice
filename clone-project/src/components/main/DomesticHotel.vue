<template>
  <a :href="item.url">
    <div class="item-img">
      <BannerSlide
        v-if="!slidetype"
        :bannerList="item.imageUrls.slice(0, 5)">
      </BannerSlide>
      <img v-lazy="item.imageUrls[0]" alt="" v-else>
    </div>
    <div class="item-info">
      <div class="flag-bx" v-if="item.badges">
        <span class="flag" v-for="(badge, idx) in item.badges" :key="idx">{{ badge }}</span>
      </div>
      <div class="title-bx">
        {{ item.title }}
      </div>
      <div class="info-bx">
        <span class="location">
          {{ item.city }}
        </span>
        <span class="hotel-grage" v-if="item.star > 3">
          {{ item.star }}성급
        </span>
      </div>
      <div class="price-bx">
        <div class="price">
          <span class="num" v-if="item.discountPrice">
            {{ item.discountPrice | price }}
          </span>
          <span class="num" v-else>
            {{ item.pricePerNight | price }}
          </span>
          <span class="unit">원~</span>
        </div>
      </div>
      <div class="category">
        국내숙박
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

<template>
  <div class="pop-banner" v-if="isPopShow">
    <div class="btn-close-area">
      <button
        type="button"
        class="btn-close-pop"
        aria-label="배너팝업 닫기"
        @click.prevent="$emit('close')"
      ></button>
    </div>
    <div class="banner-list">
      <div v-for="(item, idx) in bannerList" :key="idx" class="banner">
        <a :href="item.linkUrl">
          <img :src="item.imgUrl" :alt="item.bannerTitle">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'bannerList',
    'isPopShow'
  ]
}
</script>

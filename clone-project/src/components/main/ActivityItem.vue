<template>
  <a :href="item.url">
    <div class="item-img">
      <img v-lazy="item.imgUrl" alt="">
    </div>
    <div class="item-info">
      <div class="flag-bx">
        <span class="flag directUseFlag" v-if="isTodayUseY()">바로사용</span>
        <span class="flag" v-if="item.downloadable">쿠폰할인</span>
      </div>
      <div class="sub-text-bx">
        {{item.gdInfo}}
      </div>
      <div class="title-bx">
        {{item.gdName}}
      </div>
      <div class="price-bx">
        <span class="cate">위메프가</span>
        <div class="price">
          <span class="num">
            {{ item.plPrice | price }}
          </span>
          <span class="unit">원~</span>
        </div>
      </div>
      <div class="category">
        액티비티
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: [
    'item'
  ],
  methods: {
    isTodayUseY() {
      if (this.item.todayUseYn !== 'Y') return false
      if (this.item.agencyCd !== "5M3010") return true
    }
  }
}
</script>

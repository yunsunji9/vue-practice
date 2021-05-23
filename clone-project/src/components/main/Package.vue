<template>
  <a :href="item.url">
    <div class="item-img">
      <img v-lazy="item.imgUrl" alt="">
    </div>
    <div class="item-info">
      <div class="title-bx">
        {{item.gdName}}
      </div>
      <div class="info-bx">
        <span v-if="item.sdStDate" class="departure-date">
          {{ item.sdStDate }} 출발
          ({{ item.lodgeDay }}박{{ item.tourDay }}일)
        </span>
      </div>
      <div class="price-bx">
        <p class="price" v-if="item.immediately">
          <span class="original">
            <span class="deal">즉시할인가</span>
            <span class="before-price">
              <del>{{ item.price | price }}</del><span class="won">원</span>
            </span>
          </span>
        </p>
        <p class="price" v-else-if="item.discountPercent">
          <span class="original">
            <strong class="deal discount-rate">{{ item.discountPercent }}%</strong>
            <span class="before-price">
              <del>{{ item.normalPrice | price }}</del><span class="won">원</span>
            </span>
          </span>
        </p>
        <p class="price">
          <span class="num">{{ item.price - item.discountAmount | price }}</span>
          <span class="unit">원~</span>
        </p>
      </div>
      <div class="category">
        패키지
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: [
    'item'
  ],
  mounted(){

  }
}
</script>

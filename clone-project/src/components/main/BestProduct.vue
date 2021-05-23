<template>
  <div class="product-list-area best-product-area" :class="{'fixed': isFixed, 'up': isUp}">
    <ProductTitle :title="'베스트 여행 상품'"></ProductTitle>

    <div class="tab-menu-area">
      <div class="tab-menu">
        <div class="tab" v-for="(tab, idx) in bestService" :class="{'on': idx == tabActiveIdx}" :key="idx">
          <a :href="`#tabSec${idx}`" type="button" class="btn-tab" @click="tabClick(idx)">{{ tab.cate }}</a>
        </div>
      </div>
    </div>
    <div class="tab-content-area">
      <div class="tab-content" ref="tabCont" :id="`tabSec${idx}`" v-for="(service, idx) in bestService" :key="idx">
        <h3 class="content-title">
          {{ service.title }}
        </h3>
        <ProductList :productlist="bestproduct[`${service.src}`]" :slidetype="2"></ProductList>
        <div class="btn-more-area">
          <a href="service.moreUrl" class="btn-more">
            {{ service.moreBtn }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { scrollTo, getScrollOffsetY } from '@/utils/scroll';
import ProductTitle from "./ProductTitle";
import ProductList from "./ProductList";

export default {
  data() {
    return {
      topSize: [],
      tabActiveIdx: 0,
    }
  },
  props: [
    'bestService',
    'bestproduct',
    'isFixed',
    'isUp'
  ],
  components: {
    ProductTitle,
    ProductList,
  },
  methods: {
    tabClick(idx) {
      scrollTo(this.topSize[idx], 500)
      this.tabActiveIdx = idx;
    },
    onScroll() {
      this.scrollTop = getScrollOffsetY();
      this.getsize();
    },
    getsize() {
      this.topSize = [];
      this.$refs.tabCont.map((cont) => {
        this.topSize.push(cont.offsetTop - 116)
      })
    }
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  mounted() {
    this.getsize();
  }
}
</script>

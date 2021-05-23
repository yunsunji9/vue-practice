<template>
  <ul class="product-list" :class="{'slide-type': slidetype == 1, 'list-type': slidetype == 2}">
    <li class="item" v-for="(item, idx) in productlist" :key="idx">
      <!-- 국내숙박 -->
      <DomesticHotel
        :item="item"
        :slidetype="slidetype"
        v-if="item.domainType === '0' && item.country === 'KR'">
      </DomesticHotel>
      <!-- 해외호텔 -->
      <OverseaHotel
        :item="item"
        :slidetype="slidetype"
        v-else-if="item.domainType === '0' && item.country !== 'KR'">
      </OverseaHotel>
      <!-- 패키지-->
      <Package
        :item="item"
        :slidetype="slidetype"
        v-else-if="item.domainType === '1'">
      </Package>
      <!-- 액티비티-->
      <ActivityItem
        :item="item"
        :slidetype="slidetype"
        v-else-if="item.domainType === '2'">
      </ActivityItem>
    </li>
  </ul>
</template>

<script>
import DomesticHotel from "./DomesticHotel";
import ActivityItem from "./ActivityItem";
import OverseaHotel from "./OverseaHotel";
import Package from "./Package";

export default {
  props: [
    'productlist',
    'slidetype'
  ],
  components: {
    DomesticHotel,
    ActivityItem,
    OverseaHotel,
    Package
  },
}
</script>

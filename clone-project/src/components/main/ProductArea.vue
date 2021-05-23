<template>
  <div class="product-list-area special-price-area">
    <ProductTitle :title="title"></ProductTitle>
    <ProductList :productlist="speciallist" :slidetype="slidetype"></ProductList>
  </div>
</template>

<script>
import ProductTitle from "./ProductTitle";
import ProductList from "./ProductList";

export default {
  props: [
    'speciallist',
    'title',
    'slidetype'
  ],
  components: {
    ProductTitle,
    ProductList
  }
}
</script>

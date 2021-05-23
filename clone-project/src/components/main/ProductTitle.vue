<template>
  <h2 class="product-title" v-if="title">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>


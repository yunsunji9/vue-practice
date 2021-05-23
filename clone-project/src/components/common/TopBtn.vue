<template>
  <button type="button" class="btn-top" @click="scrollTop" aria-label="맨위로"></button>
</template>

<script>
import { scrollTo } from '@/utils/scroll';

export default {
  methods: {
    scrollTop() {
      scrollTo(0, 500)
    }
  }
}
</script>

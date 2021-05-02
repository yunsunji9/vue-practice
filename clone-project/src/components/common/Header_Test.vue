<template>
  <header class="header" :class="{'fixed': isFixed, 'up': isUp}">
    <div class="header_inner">header</div>
  </header>
</template>

<script>
export default {
  props: {
    isFixed: Boolean,
    isUp: Boolean
  }
}
</script>

<style scoped>
.header {
  position: relative;
  height: 50px;
  background: lightpink;
}

.header.fixed .header_inner {
  position: fixed;
  top: 0;
}

.header.fixed.up .header_inner {
  position: fixed;
  top: 0;
  z-index: 100;
}

.header_inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: lightpink;
}
</style>

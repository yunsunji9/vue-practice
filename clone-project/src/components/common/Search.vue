<template>
  <div class="search" :class="{'fixed': isFixed, 'up': isUp}">
    <div class="search_inner">search</div>
  </div>
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
.search {
  position: relative;
  height: 50px;
  background: yellowgreen;
}

.search.fixed .search_inner {
  position: fixed;
  top: 0;
  z-index: 100;
  transition: all .4s cubic-bezier(.41,.66,.54,.91)
}

.search.fixed.up .search_inner {
  position: fixed;
  top: 50px;
  z-index: 200;
}

.search_inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: yellowgreen;

}
</style>

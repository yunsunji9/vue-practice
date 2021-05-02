<template>
  <header id="header" class="header">
    <h1 class="logo">
      <a href="#">
        <img src="@/assets/images/common/m_logo.png" alt="위메프 여행레저">
      </a>
    </h1>
    <button type="btton" class="btn-category" aria-label="카테고리">

    </button>
    <button type="button" class="btn-close" aria-label="닫기"></button>
  </header>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 50px;
  border: 1px solid red;
}
.logo {
  position: absolute;
  top: 15px;
  left: 50%;
  width: 109px;
  transform: translateX(-50%);
}
</style>


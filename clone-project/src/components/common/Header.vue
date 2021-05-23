<template>
  <div class="header-area">
    <header id="header" class="header" :class="{'fixed': isFixed, 'up': isUp}">
      <h1 class="logo">
        <a href="/">
          <img src="@/assets/images/common/m_logo.png" alt="위메프 여행레저">
        </a>
      </h1>
      <button
        type="btton"
        class="btn-category"
        aria-label="카테고리"
        @click.prevent="$emit('toggleNav')">
        <span class="icon"><span></span></span>
      </button>
    </header>
  </div>
</template>

<script>
export default {
  props: [
    'isFixed',
    'isUp'
  ],
}
</script>


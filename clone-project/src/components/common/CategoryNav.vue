<template>
  <div class="category-nav-area">
    <div class="category-content">
      <div class="user-info-area">
        <a href="#" class="btn-login">
          <span class="user">로그인</span>하세요
        </a>
        <p class="text">
          고객님의 주문/혜택 등의 정보를 빠르게 확인하실 수 있습니다.
        </p>
      </div>
      <div class="category-list-area">
        <h1 class="title">카테고리</h1>

        <div class="category-list"
             v-for="index in 5"
             :key="index"
             :class="{'on': currentIdx == index}"
             @click="toggleClass(index)">
          <a href="#" class="btn-list">
            <h2>국내숙박</h2>
          </a>
          <div class="list-area">
            <ul class="list">
              <li><a href="#">국내숙박가격비교</a></li>
              <li><a href="#">호텔/리조트</a></li>
              <li><a href="#">펜션/풀빌라</a></li>
              <li><a href="#">캠핑/카라반</a></li>
              <li><a href="#">게스트하우스</a></li>
              <li><a href="#">오늘 빈방특가</a></li>
              <li><a href="#">국내숙박가격비교</a></li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" class="btn-nav-close" @click="$emit('close')">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIdx: 0
    }
  },
  methods: {
    toggleClass(idx) {
      if (idx == this.currentIdx) {
        this.currentIdx = -1
      } else {
        this.currentIdx = idx
      }
    }
  }
}
</script>


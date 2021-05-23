<template>
  <div class="product-list-area">
    <div class="product-title">
      <h2>
        위메프 여행특가
      </h2>
      <a href="#" class="btn-more all-tour-story">여행이야기 전체보기</a>
    </div>
    <div class="tour-story-link" :class="{'type1': type1, 'type2': type2}">
      <a href="#"
         class="link"
         v-for="(link, idx) in storylist"
         :class="`link${idx + 1}`"
         :key="link.id">
        <div class="img-area">
          <img v-for="(img, idx) in link.images.slice(0, 2)" :src="img.url" alt="" :key="idx">
        </div>
        <span class="text">#{{ link.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'storylist'
  ],
  data() {
    return {
      type1: true,
      type2 : false,
      timeLoop: '',
      timer1: ''
    }
  },
  created() {
    this.toggleClass();
    this.timer()
  },
  destroyed() {
    clearInterval(this.timeLoop);
    clearTimeout(this.timer1);
  },
  methods: {
    toggleClass() {
      this.type2 = false
      this.type1 = true

      this.timer1 = setTimeout(() => {
        this.type2 = true
        this.type1 = false
      },5000)
    },
    timer() {
      this.timeLoop = setInterval(() => {
        this.toggleClass()
      }, 10000)
    }
  }
}
</script>

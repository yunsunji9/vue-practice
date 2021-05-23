<template>
  <div class="search-area" :class="{'fixed': isFixed, 'up': isUp}">
    <div class="search">
      <input type="text"
             class="input-text"
             placeholder="여행특가에 가격 비교까지!"
             v-model="isInputText"
             @keyup.enter="enterEvt"
      />
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'isFixed',
    'isUp'
  ],
  data() {
    return {
      isInputText: ""
    }
  },
  methods: {
    enterEvt() {
      console.log(this.isInputText);
    }
  }
}
</script>

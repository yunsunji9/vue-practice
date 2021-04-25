<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" ref="inputText" v-model="inputText">
      <button class="btn btn-success" type="submit">Add Card</button>
      <a class="cancle-add-btn" href="#">&times;</a>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data(){
    return {
      inputText: '',
    }
  },
  props: [
    'listId'
  ],
  mounted(){
    this.$refs.inputText.focus();
    this.setClickOutside(this.$el);
  },
  methods: {
    ...mapActions([
      'ADD_CARD'
    ]),
    validText() {
      return !this.inputText.trim()
    },
    setClickOutside(el) {
      document.querySelector('body').addEventListener('click', e => {
        if(el.contains(e.target)) return;
        this.$emit('close')
      })
    },
    onSubmit(){
      const {inputText, listId} = this;
      this.ADD_CARD({'title': inputText, 'listId': listId})
        .finally(() => {this.inputText = ''})
      console.log(inputText, listId)
    }
  }
}
</script>

<style scoped>
.add-card .cancle-add-btn {
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
  text-decoration: none;
  color: #888;
  font-size: 24px;
}
.add-card .cancle-add-btn:hover,
.add-card .cancle-add-btn:focus {
  color: #666;
}
</style>

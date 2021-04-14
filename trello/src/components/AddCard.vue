<template>
  <div class="add-card">
    <form @submit.prevent="onSubmit">
      <input class="form-control" type="text" ref="inputText" v-model="inputTitle">
      <button class="btn btn-success" type="submit" :disabled="invalidInput">Add Card</button>
      <a class="cancle-add-btn" href="#" @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data() {
      return{
        inputTitle: ''
      }
    },
    props: [
      'listId'
    ],
    computed: {
      invalidInput() {
        return !this.inputTitle.trim();
      }
    },
    mounted() {
      this.$refs.inputText.focus();
      this.setupClickOutside(this.$el);
    },
    beforeDestroy(){
      document.querySelector('body').removeEventListener('click')
    },
    methods: {
      ...mapActions([
        'ADD_CARD'
      ]),
      onSubmit() {
        if (this.invalidInput) return;
        const {inputTitle, listId} = this;
        this.ADD_CARD({'title': inputTitle, 'listId': listId})
          .finally(() => this.inputTitle = '')
      },
      setupClickOutside(el) {
        document.querySelector('body').addEventListener('click', e => {
          if (el.contains(e.target)) return;
          this.$emit('close')
        })
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
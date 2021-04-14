<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a 
          href="#" 
          class="modal-default-button"
          @click.prevent="hideBoard(false)">
        &times;</a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form"
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input">
      </form>
    </div>
    <div slot="footer">
      <button class="btn" :class="{'btn-success': valid}" type="submit"
        form="add-board-form" :disabled="!valid">
        Create Board
      </button>
    </div>
  </Modal>
</template>

<script>
  import Modal from './Modal.vue';
  import { mapMutations, mapActions } from 'vuex';

  export default {
    components: {
      Modal
    },
    data(){
      return {
        input: '',
        value: false,
      }
    },
    watch: {
      input(v) {
        this.valid = v.trim().length > 0
      }
    },
    mounted() {
      this.$refs.input.focus()
    },
    methods: {
      ...mapMutations({
        hideBoard: 'SET_IS_ADD_BOARD'
      }),
      ...mapActions([
        'ADD_BOARD'
      ]),
      addBoard(){
        this.hideBoard(false);
        this.$emit('submit');
        this.ADD_BOARD({title: this.input})
          .then((item) => {
            console.log('item', item.id);
            this.$router.push(`/b/${item.id}`)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
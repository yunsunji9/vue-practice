<template>
  <div>
    <Modal @close="SET_IS_ADD_BOARD(false)">
      <div slot="header">Add board</div>
      <div slot="body">
        <input type="text" class="form-control" v-model="popTitle" ref="input" @keyup.enter="onRegist"/>
        <button type="button" class="btn-submit" :class="{'btn-success': valid}" @click.prevent="onRegist" :disabled="!valid">regist</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  data (){
    return {
      popTitle: '',
      valid: false
    }
  },
  computed: {
    ...mapState({
      showModal: 'isAddBoard'
    })
  },
  watch: {
    popTitle(v) {
      this.valid = v.trim().length > 0;
    }
  },
  mounted() {
    this.$refs.input.focus()
  },
  components: {
    Modal
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    ...mapActions([
      'ADD_BOARD'
    ]),
    onRegist() {
      this.SET_IS_ADD_BOARD(false);
      this.ADD_BOARD({title:this.popTitle})
        .then((item) => {
          console.log('item', item.id);
          this.$router.push(`/b/${item.id}`)
        })
      this.$emit('submit')
    }
  }
}
</script>

<style scoped>

</style>

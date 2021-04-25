<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input class="form-control" type="text" :readonly="toggleTitle" :value="card.title" @click="toggleTitle = false" @blur="onBlurTitle" ref="inputTitle"/>
      </div>
      <a class="modal-close-btn" href="" @click="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea class="form-control" cols="30" rows="3"
                placeholder="add a more detailed description" :value="card.description" :readonly="toggleDesc" @click="toggleDesc = false" @blur="onBlurDesc" ref="inputDesc"></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Modal from '../components/Modal.vue';

export default {
  data() {
    return {
      toggleTitle: true,
      toggleDesc: true
    }
  },
  components: {
    Modal
  },
  computed: {
    ...mapState([
      'card',
      'board'
    ])
  },
  created(){
    this.fetchCard();
  },
  methods: {
    ...mapActions([
      'FETCH_CARD',
      'UPDATE_CARD'
    ]),
    onClose() {
      this.$router.push(`/b/${this.board.id}`)
    },
    fetchCard(){
      const id = this.$route.params.cid;
      this.FETCH_CARD({id})
    },
    onBlurTitle() {
      this.toggleTitle = false;
      const title = this.$refs.inputTitle.value.trim();
      if(!title) return;

      this.UPDATE_CARD({id: this.card.id, title: title})
    },
    onBlurDesc() {
      this.toggleDesc = false;
      const description = this.$refs.inputDesc.value.trim();
      if(!description) return;

      this.UPDATE_CARD({id: this.card.id, description: description})
    }
  }
}
</script>

<style scoped>
.modal-card .modal-container {
  min-width: 300px;
  max-width: 800px;
  width: 60%;
}
.modal-card-header-title {
  padding-right: 30px;
}
.modal-close-btn {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 24px;
  text-decoration: none;
}
.modal-card-header {
  position: relative;
}
</style>

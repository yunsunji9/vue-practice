<template>
  <Modal class="modal-card">
    <div slot="header" class="modal-card-header">
      <div class="modal-card-header-title">
        <input class="form-control" type="text" :value="card.title" 
          :readonly="!toggleTitle" @click="toggleTitle = true" @blur="onBlurTitle" ref="inputTitle"/>
      </div>
      <a class="modal-close-btn" href="" @click.prevent="onClose">&times;</a>
    </div>
    <div slot="body">
      <h3>Description</h3>
      <textarea class="form-control" cols="30" rows="3" 
        placeholder="add a more detailed description" :readonly="!toggleDesc"
        v-model="card.description" @click="toggleDesc = true" @blur="onBlurDesc" ref="inputDesc"></textarea>
    </div>
    <div slot="footer"></div>
  </Modal>
</template>

<script>
  import Modal from '../components/Modal.vue';
  import { mapState, mapActions } from 'vuex';

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
      ...mapState({
        card: 'card',
        board: 'board'
      })
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
        this.FETCH_CARD({id});
      },
      onBlurTitle() {
        this.toggleTitle = false;
        const title = this.$refs.inputTitle.value.trim();
        console.log(title, this.card.id);
        if(!title) return;
        this.UPDATE_CARD({id: this.card.id, title})
          .then(() => {
            this.fetchCard()
          })
      }
      ,
      onBlurDesc() {
        this.toggleDesc = false;
        const desc = this.$refs.inputDesc.value.trim();
        if(!desc) return;
        this.UPDATE_CARD({id: this.card.id, description: desc})
          .then(() => {
            this.fetchCard()
          })
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
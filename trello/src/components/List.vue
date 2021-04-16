<template>
  <div>
    <div class="list">
      <div class="list-header">
        <input type="text" class="form-control" v-if="titleToggle" v-model="inputTitle" ref="inputTitle"
          @blur="onBlurTitle"/>
        <div class="list-header-title" v-else @click.prevent="onToggleTitle">{{data.title}}</div>
        <a href="#" class="btn-delete-list" @click="onDeleteList">&times;</a>
      </div>
      <div class="card-list">
        <CardItem v-for="card in data.cards" :data="card" :key="card"></CardItem>
      </div>
      <div v-if="isAddCard">
        <AddCard @close="isAddCard = false" :list-id="data.id"/>
      </div>
      <div v-else>
        <a href="#" class="add-card-btn" @click.prevent.stop="isAddCard = true">
          &plus; Add a Card
        </a>
      </div>
    </div>  
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import AddCard from './AddCard.vue';
  import CardItem from './CardItem.vue';

  export default {
    components: {
      AddCard,
      CardItem
    },
    props: ['data'],
    created(){
      this.inputTitle = this.data.title
    },
    data(){
      return {
        isAddCard: false,
        titleToggle: false,
        inputTitle: ''
      }
    },
    methods: {
      ...mapActions([
        'UPDATE_LIST',
        'DELETE_LIST'
      ]),
      onToggleTitle() {
        this.titleToggle = true;
        this.$nextTick(() => this.$refs.inputTitle.focus())
      },
      onBlurTitle() {
        this.titleToggle = false;
        this.inputTitle = this.inputTitle.trim();

        if(!this.inputTitle) return;
        if(this.inputTitle == this.data.title) return;

        const id = this.data.id;
        const title = this.inputTitle;
        this.UPDATE_LIST({id: id, title: title})
      },
      onDeleteList() {
        this.DELETE_LIST({id: this.data.id})
      }
    }
  }
</script>

<style scoped>
.list {
  background-color: #e2e4e6;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  width: 100%;
  max-height: 100%;
}
.list-header {
  flex: 0 0 auto;
  height: 30px;
  padding: 10px 8px 8px;
  position: relative;
}
.list-header-title {
  font-size: 16px;
  font-weight: 700;
  padding-left: 8px;
  line-height: 30px;
}
.input-title{
  width: 90%;
}
.delete-list-btn{
  position: absolute;
  right:10px;
  top: 8px;
  text-decoration: none;
  color: #aaa;
  font-size: 24px;
}
.card-list {
  flex: 1 1 auto;
  overflow-y: scroll;
}
.empty-card-item{
  height: 10px;
  width: 100%;
  background-color: rgba(0,0,0,0);
}
.add-card-btn{
  flex: 0 0 auto;
  display: block;
  padding: 8px 10px;
  color: #8c8c8c;
  text-decoration: none;
}
.add-card-btn:focus,
.add-card-btn:hover {
  background-color: rgba(0,0,0,.1)
}
</style>
<template>
  <div>
    <div class="home-title">Personal Boards</div>
    <div class="board-list" ref="boardList">
      <div class="board-item" v-for="b in boards" :key="b.id"
        :data-bgcolor="b.bgColor" ref="boardItem">
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{b.title}}</div>
        </router-link>
      </div>
      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="addBoard(true)">
          Create new Board...
        </a>
      </div>
    </div>
    <AddBoard v-if="isAddBoard" @submit="onAddBoard"></AddBoard>
  </div>
</template>

<script>
  import AddBoard from '../components/AddBoard.vue';
  import { mapMutations, mapState, mapActions } from 'vuex';

  export default {
    data() {
      return {
        loading: false,
      }
    },
    components: {
      AddBoard
    },
    created() {
      this.fetchData();
      this.SET_THEME()
    },
    updated(){
      this.$refs.boardItem.forEach(el => {
        el.style.backgroundColor = el.dataset.bgcolor
      })
    },
    computed: {
      ...mapState([
        'isAddBoard',
        'boards'
      ])
    },
    methods: {
      ...mapMutations({
        addBoard: 'SET_IS_ADD_BOARD',
        SET_THEME: 'SET_THEME'
      }),
      ...mapActions([
        'FETCH_BOARDS'
      ]),
      onAddBoard(){
        this.fetchData()
      },
      fetchData(){
        this.loading = true;

        this.FETCH_BOARDS()
          .finally(() => {
            this.loading = false
          })
      }
    }
  }
</script>

<style scoped>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-title{
  padding: 10px;
  display: flex; 
  flex-wrap: wrap;
}
.board-item{
  width: 23%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0, 0, 0, .1);
  color: #666;
}
.board-item-title{
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;

}
.board-item a.new-board-btn{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  height: 100px;
  width: inherit;
  color: #888;
  font-weight: 700
}
</style>
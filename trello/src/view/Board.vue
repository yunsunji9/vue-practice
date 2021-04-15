<template>
  <div>
    <div class="board-wrapper">
      <div class="board">
        <div class="board-header">
          <input type="text" class="form-control" v-model="inputTitle" v-if="modifyToggle" 
            ref="inputTitleForm" @blur="onToggleModifyBlur" @keyup.enter="onToggleModifyBlur"/>
          <span class="board-title" v-else @click.prevent="onModifyToggle">{{inputTitle}}</span>
          <a href="#" class="board-header-btn show-menu" @click.prevent="onShowSettings">... Show Menu</a>
        </div>
        <div class="list-section-wrapper">
          <div class="list-section">
            <div class="list-wrapper" v-for="list in board.lists" v-bind:key="list.pos">
              <List :data="list"></List>
            </div>
            <div class="list-wrapper">
              <AddList></AddList>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BoardSetting v-if="isShowBoardSettings"></BoardSetting>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex';
  import List from '../components/List';
  import BoardSetting from '../components/BoardSetting';
  import AddList from '../components/AddList';

  export default {
    data() {
      return {
        bid: 0,
        loading: false,
        inputTitle: '',
        modifyToggle: false
      }
    },
    components: {
      List,
      BoardSetting,
      AddList
    },
    computed: {
      ...mapState({
        board: 'board',
        isShowBoardSettings: 'isShowBoardSettings'
      })
    },
    created() {
      this.fetchData()
        .then(() => {
          this.SET_THEME(this.board.bgColor)
          this.inputTitle = this.board.title
        })
      this.SET_IS_SHOW_BOARD_SETTINGS(false)
    },
    methods: {
      ...mapMutations([
        'SET_THEME',
        'SET_IS_SHOW_BOARD_SETTINGS'
      ]),
      ...mapActions([
        'FETCH_BOARD',
        'UPDATE_BOARD'
      ]),
      fetchData() {
        this.loading = true;
        this.bid = this.$route.params.bid;
        return this.FETCH_BOARD({id: this.$route.params.bid})
          .then(() => {
            this.loading = false;
          })
      },
      onShowSettings() {
        this.SET_IS_SHOW_BOARD_SETTINGS(true)
      },
      onModifyToggle() {
        this.modifyToggle = true;
        this.$nextTick(() => this.$refs.inputTitleForm.focus());
      },
      onToggleModifyBlur() {
        this.modifyToggle = false;

        this.inputTitle = this.inputTitle.trim()
        if(!this.inputTitle) return 

        this.UPDATE_BOARD({id: this.board.id, title: this.inputTitle})
      }
    }
  }
</script>

<style scoped>
.board-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
.board {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.board-header {
  flex: none;
  padding: 8px 4px 8px 8px;
  margin: 0;
  height: 32px;
  line-height: 32px;
}
.board-header input[type=text] {
  width: 200px;
}
.board-header-btn {
  border-radius: 4px;
  padding: 2px 10px;
  height: 30px;
  margin-bottom: 15px;
  display: inline-block;
  color: #fff;
}
.board-header-btn:hover,
.board-header-btn:focus {
  background-color: rgba(0,0,0,.15);
  cursor: pointer
}
.board-title{
  font-weight: 700;
  font-size: 18px;
}
.show-menu{
  font-size: 14px;
  position: absolute;
  right: 15px;
}
.list-section-wrapper{
  flex-grow: 1;
  position: relative;
}
.list-section {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom:0; 
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0 10px;
}
.list-wrapper{
  display: inline-block;
  height: 100%;
  width: 272px;
  vertical-align: top;
  margin-right: 5px;
}
.card-item.gu-transit{
  background-color: #555 !important
}
.card-item.gu-mirror{
  opacity: 1 !important;
  background-color: #fff !important;
  transform: rotate(3deg) !important;
}
</style>
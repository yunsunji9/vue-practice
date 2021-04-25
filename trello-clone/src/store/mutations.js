import { setAuthInHeader } from "../api/index.js";

const mutations = {
  SET_IS_ADD_BOARD(state, toggle){
    state.isAddBoard = toggle
  },
  SET_BOARDS(state, boards) {
    state.boards = boards
  },
  SET_BOARD(state, board) {
    state.board = board
  },
  FETCH_CARD(state, card){
    state.card = card
  },
  LOGIN(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
    setAuthInHeader(token);
  },
  LOGOUT(state){
    state.token = null;
    delete localStorage.token;
    setAuthInHeader(null);
  }
}

export default mutations;

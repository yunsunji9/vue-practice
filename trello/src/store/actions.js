import { board, auth, card, testlist } from '../api';

const actions = {
  ADD_BOARD(_, { title }){
    return board.create(title)
      .then(data => data.item)
  },
  FETCH_BOARDS({commit}) {
    return board.fetch()
      .then(data => commit('SET_BOARDS', data.list))
  },
  FETCH_BOARD({commit}, {id}) {
    return board.fetch(id)
      .then(data => commit('SET_BOARD', data.item))
  },
  DELETE_BOARD(context, {id}) {
    return board.delete(id)
  },
  UPDATE_BOARD(context, {id, title, bgColor}){
    return board.update(id, {title, bgColor})
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },

  LOGIN ({commit}, {email, password}) {
    console.log(email, password)
    return auth.login(email, password)
      .then((data) => {
        console.log(data);
        commit('LOGIN', data.accessToken)
      })
  },
  
  ADD_CARD(context, {title, listId, pos}){
    return card.create(title, listId, pos)
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  FETCH_CARD(context, {id}) {
    return card.fetch(id)
      .then((data) => context.commit('SET_CARD', data.item))
  },
  UPDATE_CARD(context, {id, title, description, pos, listId}) {
    return card.update(id, {title, description, pos, listId})
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  DELETE_CARD(context, {id}) {
    return card.delete(id)
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  CREATE_LIST(context, {title, boardId, pos}) {
    return testlist.create({title, boardId, pos})
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  UPDATE_LIST(context, {id, title, pos}) {
    return testlist.update(id, {title, pos})
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  DELETE_LIST(context, {id}) {
    return testlist.delete(id)
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  }
}

export default actions;
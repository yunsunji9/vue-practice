import {board, auth, card} from '@/api';

const actions = {
  FETCH_BOARDS({commit}) {
    return board.fetch()
      .then(data => commit('SET_BOARDS', data.list))
  },
  FETCH_BOARD({commit}, {id}) {
    return board.fetch(id)
      .then(data => {
        console.log(data)
        commit('SET_BOARD', data.item)
      })
  },
  ADD_BOARD(_, { title }) {
    return board.add(title)
      .then(data => data.item)
  },
  LOGIN(context, {email, password}) {
    return auth.login({email, password})
      .then(data => {
        context.commit('LOGIN', data.accessToken)
      })
  },
  FETCH_CARD(context, {id}) {
    return card.fetch(id)
      .then(data => {
        context.commit('FETCH_CARD', data.item)
      })
  },
  ADD_CARD(context, {title, listId, pos}) {
    return card.add(title, listId, pos)
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  DELETE_CARD(context, {id}) {
    return card.delete(id)
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  },
  UPDATE_CARD(context, {id, title, description, listId, pos}) {
    return card.update(id, {title, description, listId, pos})
      .then(() => context.dispatch('FETCH_BOARD', {id: context.state.board.id}))
  }
}

export default actions;

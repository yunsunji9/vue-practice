import axios from 'axios';
// import router from '../router';

const config = {
  baseUrl: 'http://localhost:3000'
}

const UNAUTHORIZED = 401
const onUnauthrorized = () => {
  //router.push('/login')
  //this.$router.push('/login')
}

// export function fetchHealth() {
//   return axios.get(`${config.baseUrl}health`)
// }

// export function fetchBoards() {
//   return axios.get(`${config.baseUrl}boards`)
// }

const request = (method, url, data) => {
  return axios({
    method,
    url: config.baseUrl + url,
    data
  })
    .then(result => result.data)
    .catch(result => {
      const {status} = result.response;
      if(status === UNAUTHORIZED) onUnauthrorized()
    })
}

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
  fetch(id) {
    return id ? request('get', `/boards/${id}`) : request('get', '/boards')
  },
  create(title) {
    return request('post', '/boards', {title})
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}

export const card = {
  fetch(id) {
    return request('get', `/cards/${id}`)
  },
  create(title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  update(id, payload) {
    return request('put', `/cards/${id}`, payload)
  }
}
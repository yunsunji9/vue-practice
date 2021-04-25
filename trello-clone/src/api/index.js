import axios from 'axios';
import { router } from '../router/index.js';

const config = {
    baseUrl: 'http://localhost:3000'
}
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
    console.log('onUnauthorized')
    router.push('/login')
};

const request = (method, url, data) => {
    return axios({
        method,
        url: config.baseUrl + url,
        data
    })
    .then(result => result.data)
    .catch(result => {
        console.log('result' + result);
        const { status } = result.response;
        if(status == UNAUTHORIZED) return onUnauthorized();
        throw Error(result)
    })
}

export const setAuthInHeader = token => {
  console.log(token)
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const auth = {
    login(payload) {
        return request('post', '/login', payload)
    }
}

export const board = {
    fetch(id) {
        return id ? request('get', `/boards/${id}`) : request('get', '/boards')
    },
    add(title) {
      return request('post', '/boards', {title})
    }
}

export const card = {
  fetch(id) {
    return request('get', `/cards/${id}`)
  },
  add(title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  delete(id) {
    return request('delete', `/cards/${id}`)
  },
  update(id, payload) {
    return request('put', `/cards/${id}`, payload)
  }
}

import axios from 'axios';

const config = {
  url: 'https://tour-api.wonders.app'
}

const request = (method, url, data) => {
  return axios({
    method,
    url: config.url + url,
    data
  }).then(result => result)
    .catch(result => {
      const {status} = result.response;
      console.log('error : ' + status)
    })
}

export const main = {
  fetch() {
    return request('get', '/v1/banner/WTMRBN')
  },
  quick() {
    return request('get', '/v1/banner/SOMMAC')
  }
}



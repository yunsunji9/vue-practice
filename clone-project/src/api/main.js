import axios from 'axios';
import URL from '@/constants/urls.json';

const request = ({method, url, baseURL = URL.config.url , data, params}) => {
  return axios({
    method,
    baseURL,
    url,
    data,
    params
  }).then(result => result.data)
    .catch(result => {
      const { status } = result.response;
      console.log('error : ' + status)
    })
}

export const main = {
  banner() {
    return request({method: 'get', url: '/v1/banner/WTMRBN'})
  },
  quick() {
    return request({method: 'get', url: '/v1/banner/SOMMAC'})
  },
  eventList() {
    return request({method: 'get', url: '/v1/banner/SOMMAB'})
  },
  specialPrice() {
    return request({method: 'get', url: '/promotions/9?poc=MWEB'})
  },
  tourStory() {
    return request(
      {
        method: 'get',
        url: '/api/v0/external/tour/preview',
        baseURL: URL.tourStory.url
      })
  },
  themeList() {
    return request({method: 'get', url: '/promotions/theme'
    })
  },
  evtBanner() {
    return request({method: 'get', url: '/v1/banner/WTMRBB'})
  },
  bestProduct(service) {
    return request(
      {
        method: 'get',
        url: '/v1/promotions/best',
        params: {
          service: service
        }
      })
  }
}



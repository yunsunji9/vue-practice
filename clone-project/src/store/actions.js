import { main } from '@/api/main.js';

const actions = {
  FETCH_MAIN_BANNER({commit}) {
    return main.banner()
      .then(data => commit('SET_MAIN_BANNER', data.bannerList))
  },
  FETCH_QUICK_MENU({commit}) {
    return main.quick()
      .then(data => commit('SET_QUICK_MENU', data.bannerList))
  },
  FETCH_PROMOTION_LIST({commit}) {
    return main.eventList()
      .then(data => commit('SET_PROMOTION_LIST', data.bannerList))
  },
  FETCH_SPECIAL_PRICE({commit}) {
    return main.specialPrice()
      .then((data) => commit('SET_SPECIAL_PRICE', data))
  },
  FETCH_TOUR_STORY({commit}) {
    return main.tourStory()
      .then((data) => commit('SET_TOUR_STORY', data))
  },
  FETCH_THEME_LIST({commit}) {
    return main.themeList()
      .then((data) => commit('SET_THEME_LIST', data))
  },
  FETCH_EVENT_BANNER({commit}) {
    return main.evtBanner()
      .then((data) => commit('SET_EVENT_BANNER', data.bannerList))
  },
  FETCH_BEST_PRODUCT({commit}, service) {
    return main.bestProduct(service)
      .then((data) => commit('SET_BEST_PRODUCT', { service: service, data: data }))
  }
}

export default actions;

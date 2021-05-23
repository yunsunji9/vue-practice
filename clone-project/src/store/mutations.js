const mutations = {
  SET_MAIN_BANNER(state, banners) {
    state.isMainBanner = banners
  },
  SET_QUICK_MENU(state, menus) {
    state.isQuickMenu = menus
  },
  SET_PROMOTION_LIST(state, lists) {
    state.isEventList = lists
  },
  SET_SPECIAL_PRICE(state, lists) {
    state.isSpecialPrice = lists
  },
  SET_TOUR_STORY(state, lists) {
    state.isTourStory = lists
  },
  SET_THEME_LIST(state, lists) {
    state.isThemeList = lists
  },
  SET_EVENT_BANNER(state, banners) {
    state.isEventBanner = banners
  },
  SET_BEST_PRODUCT(state, payload) {
    state.isBestProduct[payload.service] = payload.data.productList
  }
}

export default mutations;

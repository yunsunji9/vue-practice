<template>
  <div class="wmp-tour-wrap">
    <!-- header -->
    <Header
      :isFixed="isSearchFixed"
      :isUp="isUp"
      @toggleNav="toggleNavEvt">
    </Header>

    <!-- category navi -->
    <CategoryNav :class="{'on': isToggleNav}" @close="isToggleNav = false"></CategoryNav>

    <!-- fixed background -->
    <FixedBg></FixedBg>

    <!-- search -->
    <Search :isFixed="isSearchFixed" :isUp="isUp"></Search>

    <!-- main banner -->
    <div class="main-spot-banner">
      <BannerSlide
        :bannerList="isMainBanner"
        :option="mainSliderOption"
        :bannerPopup="true">
      </BannerSlide>
    </div>

    <!-- quick menu -->
    <Quickmenu :quickmenu="isQuickMenu"></Quickmenu>

    <!-- event list -->
    <EventList :eventlist="isEventList"></EventList>

    <!-- 위메프 여행특가 -->
    <ProductArea
      :speciallist="isSpecialPrice.slice(0, 5)"
      :title="`위메프 여행특가`">
    </ProductArea>

    <!-- 여행이야기 -->
    <TourStory :storylist="isTourStory"></TourStory>

    <!-- 떠나요제주로 -->
    <ProductArea
      :speciallist="isThemeList[0].list"
      :title="isThemeList[0].title"
      :slidetype="1">
    </ProductArea>

    <ProductArea
      :speciallist="isSpecialPrice.slice(5, 12)">
    </ProductArea>

    <div class="event-banner">
      <BannerSlide
        :bannerList="isEventBanner"
        :option="eventSliderOption">
      </BannerSlide>
    </div>

    <!-- 완벽한 휴식, 호캉스 -->
    <ProductArea
      :speciallist="isThemeList[1].list"
      :title="isThemeList[1].title"
      :slidetype="1">
    </ProductArea>

    <!-- 여긴 꼭! 핫플레이스 -->
    <ProductArea
      :speciallist="isThemeList[2].list"
      :title="isThemeList[2].title"
      :slidetype="1">
    </ProductArea>

    <!-- MD 강력추천 -->
    <ProductArea
      :speciallist="isThemeList[3].list"
      :title="isThemeList[3].title"
      :slidetype="1">
    </ProductArea>

    <!-- 베스트 여행상품 -->
    <BestProduct
      :bestService="bestService"
      :bestproduct="isBestProduct"
      :isFixed="isBestTabFixed"
      :isUp="isUp">
    </BestProduct>

    <TopBtn :class="{'on': isTopBtn}"></TopBtn>
  </div>
</template>

<script>
import Header from '@/components/common/Header';
import FixedBg from '@/components/main/FixedBg';
import Search from '@/components/common/Search';
import BannerSlide from '@/components/common/BannerSlide';
import Quickmenu from '@/components/main/Quickmenu';
import EventList from '@/components/main/EventList';
import ProductArea from "@/components/main/ProductArea";
import TourStory from "@/components/main/TourStory";
import BestProduct from "@/components/main/BestProduct";
import CategoryNav from "@/components/common/CategoryNav";
import TopBtn from "@/components/common/TopBtn";
import { getScrollOffsetY } from '@/utils/scroll.js';
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      scrollTop: 0,
      searchTop: 0,
      bestTabTop: 0,
      lastScrollTop: 0,
      topBtnShow: 100,
      isSearchFixed: false,
      isBestTabFixed: false,
      isUp: false,
      isToggleNav: false,
      isTopBtn: false,
      mainSliderOption: {
        autoplay: {
          delay: 6500,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        spaceBetween: 15,
        slidesOffsetBefore: 15,
        slidesPerView: 'auto'
      },
      eventSliderOption: {
        autoplay: {
          delay: 6500,
        },
        spaceBetween: 15,
        slidesOffsetBefore: 15,
        slidesPerView: 'auto'
      },
      bestService: [
        {
          cate: '국내숙박',
          title: '국내숙박 베스트 30',
          src: 'DOMESTIC_HOTEL',
          moreUrl: `${this.originLocation}/khotel`,
          moreBtn: '더 많은 국내숙박 상품 보러가기'
        },
        {
          cate: '해외호텔',
          title: '해외호텔 베스트 30',
          src: 'INTERNATIONAL_HOTEL',
          moreUrl: `${this.originLocation}/hotel`,
          moreBtn: '더 많은 해외호텔 상품 보러가기'
        },
        {
          cate: '액티비티',
          title: '액티비티 베스트 30',
          src: 'ACTIVITY',
          moreUrl: `${this.originLocation}/activity`,
          moreBtn: '더 많은 액티비티 상품 보러가기'
        },
        {
          cate: '패키지',
          title: '패키지 베스트 30',
          src: 'PACKAGE',
          moreUrl: `${this.originLocation}/package`,
          moreBtn: '더 많은 패키지 상품 보러가기'
        }
      ]
    }
  },
  components: {
    Header,
    Search,
    FixedBg,
    BannerSlide,
    Quickmenu,
    EventList,
    ProductArea,
    TourStory,
    BestProduct,
    CategoryNav,
    TopBtn
  },
  computed: {
    ...mapState([
      'isMainBanner',
      'isQuickMenu',
      'isEventList',
      'isSpecialPrice',
      'isTourStory',
      'isThemeList',
      'isEventBanner',
      'isBestProduct'
    ]),
    originLocation () {
      return window.location.origin
    },
  },
  created() {
    this.fetchData();
    // scroll
    window.addEventListener('scroll', this.onScroll)
  },
  mounted() {
    this.getScrollTargetSize()
  },
  methods: {
    ...mapActions([
      'FETCH_MAIN_BANNER',
      'FETCH_QUICK_MENU',
      'FETCH_PROMOTION_LIST',
      'FETCH_SPECIAL_PRICE',
      'FETCH_TOUR_STORY',
      'FETCH_THEME_LIST',
      'FETCH_EVENT_BANNER',
      'FETCH_BEST_PRODUCT'
    ]),
    fetchData() {
      this.FETCH_MAIN_BANNER();
      this.FETCH_QUICK_MENU();
      this.FETCH_PROMOTION_LIST()
      this.FETCH_SPECIAL_PRICE();
      this.FETCH_TOUR_STORY();
      this.FETCH_THEME_LIST();
      this.FETCH_EVENT_BANNER();
      this.bestService.map((service) =>
        this.FETCH_BEST_PRODUCT(service.src)
      );
    },
    onScroll() {
      this.scrollTop = getScrollOffsetY();

      if (this.scrollTop >= this.searchTop) {
        this.isSearchFixed = true;
      } else {
        this.isSearchFixed = false;
      }
      if (this.scrollTop >= this.bestTabTop) {
        this.isBestTabFixed = true;
      } else {
        this.isBestTabFixed = false;
      }
      if (this.lastScrollTop > this.scrollTop) {
        this.isUp = true;
        this.getScrollTargetSize(36);
      } else {
        this.isUp = false;
        this.getScrollTargetSize();
      }
      // top버튼
      if (this.lastScrollTop > this.topBtnShow) {
        this.isTopBtn = true;
      } else {
        this.isTopBtn = false;
      }
      this.lastScrollTop = this.scrollTop
    },
    getScrollTargetSize(gap = 0) {
      this.searchTop = document.querySelector('.search-area').offsetTop + 12/* search padding */ - gap ;
      this.bestTabTop = document.querySelector('.tab-menu-area').offsetTop - 60 - gap
    },
    toggleNavEvt() {
      this.isToggleNav = true
    }
  }
}
</script>

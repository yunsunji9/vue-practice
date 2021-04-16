<template>
  <div class="header">
    <router-link to="/">홈</router-link>
    <a href="#" v-if="isAuth" @click.prevent="logout">로그아웃</a>
    <router-link to="/login" v-else>로그인</router-link>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'headerColor',
        'contentColor'
      ]),
      ...mapGetters([
        'isAuth'
      ])
    },
    watch: {
      'contentColor': 'updateTheme'
    },
    mounted() {
      this.updateTheme();
    },
    methods: {
      ...mapMutations([
        'LOGOUT'
      ]),
      logout() {
        alert('로그아웃되엇습니다');
        this.LOGOUT();
        this.$router.push('/login')
      },
      updateTheme() {
        this.$el.style.backgroundColor = this.headerColor;
        
        const container = document.querySelector('#app');
        if(container) container.style.backgroundColor = this.contentColor;
      }
    }
  }
</script>

<style scoped>
.header {
  height: 50px;
}

.header a {
  color: #fff;
  padding: 0 10px;
  line-height: 50px;
  font-size: 20px;
}
</style>
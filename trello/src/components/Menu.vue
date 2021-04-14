<template>
  <div>
    <router-link to="/">홈</router-link>
    <a href="#" v-if="isAuth" @click.prevent="logout">로그아웃</a>
    <router-link to="/login" v-else>로그인</router-link>
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'isAuth'
      ])
    },
    methods: {
      ...mapMutations([
        'LOGOUT'
      ]),
      logout() {
        alert('로그아웃되엇습니다');
        this.LOGOUT();
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
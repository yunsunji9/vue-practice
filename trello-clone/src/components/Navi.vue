<template>
	<div class="navi-area">
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
			this.LOGOUT();
			this.$router.push('/login')
		}
	}
}
</script>

<style>
.navi-area {
	height: 50px;
	font-size: 20px;
	line-height: 50px;
	color: #000;
	border-bottom: 1px solid silver;
}

.navi-area a {
	color: inherit;
	padding: 0 10px;
	text-decoration: none;
}

.navi-area a:hover,
.navi-area a:active {
	text-decoration: underline;
}
</style>

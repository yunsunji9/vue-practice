<template>
    <div>
        <UserProfile>
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{userInfo.created}}, </span>
            <span slot="karma">{{ userInfo.karma }}</span>
        </UserProfile>
    </div>
</template>

<script>
    import UserProfile from '../components/UserProfile';

    export default {
        components: {
            UserProfile
        },
        computed: {
            userInfo() {
                return this.$store.state.users;
            }
        },
        created() {
            const userName = this.$route.params.id;
            this.$store.dispatch('FETCH_USER', userName);
        }
    }
</script>

<style lang="scss" scoped>

</style>
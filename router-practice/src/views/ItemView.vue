<template>
    <div>
        <section>
            <!-- 질문상세 -->
            <div>
                <UserProfile>
                    <div slot="username">{{ fetchedItem.user }}</div>
                    <template slot="time">{{fetchedItem.time_ago}}</template>
                </UserProfile>
            </div>
        </section>
        <section>
            <h2>
                {{ fetchedItem.title }}
            </h2>
        </section>
        <section>
            <div v-html="fetchedItem.content">
            </div>
        </section>
    </div>
</template>

<script>
    import UserProfile from '../components/UserProfile';
    import { mapGetters } from 'vuex';

    export default {
        components: {
            UserProfile
        },
        computed: {
            ...mapGetters(['fetchedItem'])
        },
        created() {
            const itemId = this.$route.params.id;
            this.$store.dispatch('FETCH_ITEM', itemId);
        }       
    }
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: .5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-discription {
    padding-left: 10px;
}

.time {
    font-size: 12px;
}
</style>
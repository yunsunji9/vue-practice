<template>
    <div>
        <ul class="news-list">
            <li class="item" v-for="user in listItems" v-bind:key="user">
                <div class="points">
                    {{ user.points || 0}}
                </div>
                <div class="user-area">
                    
                    <p class="news-title">
                        <template v-if="user.domain">
                            <a v-bind:href="user.url">
                                {{ user.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`item/${user.id}`">
                                {{ user.title }}
                            </router-link>
                        </template>
                    </p>

                    <small class="link-text">
                        by 
                        <router-link
                            v-if="user.user"
                            class="link-text" 
                            v-bind:to="`/user/${user.user}`">
                            {{user.user}}
                        </router-link>
                        <a v-bind:href="user.url" v-else >
                            {{user.domain}}
                        </a>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        listItems() {
            return this.$store.state.list;
        }
    }
}
</script>

<style scoped>
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.user-area {
    display: flex;
    align-items: center;
}
.news-title {
    margin-right: 20px;
}
.news-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.item {
    display: flex;
    align-items: center;
    border-bottom: 3px solid #eee;
}
.link-text {
    color: #828282;
}
</style>
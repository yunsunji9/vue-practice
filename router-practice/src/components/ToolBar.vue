<template>
    <div class="header">
        <router-link to="/news">news</router-link> | 
        <router-link to="/ask">ask</router-link> | 
        <router-link to="/jobs">jobs</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.header {
    color: white;
    background: #42b883;
    display: flex;
    padding: 8px;
}

a {
    color: #fff;
    padding: 0 20px;
}
</style>
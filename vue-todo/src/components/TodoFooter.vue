<template>
    <div class="clearAllcontainer">
        <span class="clearAllBtn" v-on:click="removeAll">
            clear All
        </span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    
    methods: {
        ...mapMutations({
            removeAll: 'removeAllItem'
        })
       
    }
}
</script>

<style scoped>
.clearAllcontainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-radius: 5px;
    margin: 0 auto;
}

.clearAllBtn {
    color: #e20303;
    display: block;
}
</style>
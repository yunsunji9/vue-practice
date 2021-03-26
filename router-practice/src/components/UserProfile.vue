<template>
    <div class="user-container">
        <div>
            <i class="far fa-user"></i>
        </div>
        <div class="user-discription">
            <slot name="username"></slot>
            <div class="time">
                time:
                <slot name="time"></slot>
            </div>
            <slot name="karma"> 
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
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
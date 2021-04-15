<template>
    <div class="add-list">
        <input type="text" class="form-control" v-if="isAddList" v-model="inputListTitle" 
            @blur="blurToggleAdd" @keyup:enter="blurToggleAdd" ref="inputListTitle">
        <a href="#" v-else @click.prevent="onToggleAdd">&plus; Add another list</a>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data(){
        return {
            isAddList: false,
            inputListTitle: ''
        }
    },
    computed: {
        ...mapState([
            'board'
        ])
    },
    methods: {
        ...mapActions([
            'CREATE_LIST'
        ]),
        onToggleAdd() {
            this.isAddList = true;
            this.$nextTick(() => this.$refs.inputListTitle.focus())
        },
        blurToggleAdd() {
            this.isAddList = false

            if (!this.inputListTitle.trim()) return;

            const title = this.inputListTitle;
            const boardId = this.board.id;
            const lastItem = this.board.lists[this.board.lists.length - 1]
            const pos = lastItem ? lastItem.pos * 2 : 65535

            this.CREATE_LIST({title, boardId, pos})
                .then(() => this.inputListTitle = '')
        }
    }
}
</script>

<style>
.add-list {
    background-color: rgba(0, 0, 0, .1);
    padding: 12px;
    transition: all .3s;
}
.add-list a {
    color: #ddd;
}
.add-list:hover,
.add-list:focus {
    background-color: rgba(0, 0, 0, .3);
}
</style>
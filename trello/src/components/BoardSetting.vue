<template>
<div class="board-menu">
    <div class="board-menu-header">
        <div class="header-title">Menu</div>
        <a class="header-close-btn" href="#" @click.prevent="onClose">&times;</a>
    </div>
    <ul class="menu-list">
        <li>
            <a href="#" @click.prevent="onDeleteBoard">DELETE</a>
        </li>
        <li>
            Change background
            <div class="color-picker">
                <a href="#" data-value="blue" @click.prevent="onChangeTheme"></a>
                <a href="#" data-value="orange" @click.prevent="onChangeTheme"></a>
                <a href="#" data-value="green" @click.prevent="onChangeTheme"></a>
                <a href="#" data-value="pink" @click.prevent="onChangeTheme"></a>
            </div>
        </li>
    </ul>
</div>  
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState([
            'board'
        ])
    },
    mounted(){
        Array.from(this.$el.querySelectorAll('.color-picker a')).forEach(el => {
            el.style.backgroundColor = el.dataset.value
        })
    },
    methods: {
        ...mapMutations([
            'SET_IS_SHOW_BOARD_SETTINGS',
            'SET_THEME'
        ]),
        ...mapActions([
            'DELETE_BOARD',
            'UPDATE_BOARD'
        ]),
        onClose() {
            this.SET_IS_SHOW_BOARD_SETTINGS(false)
        },
        onDeleteBoard(){
            if(!window.confirm(`delete ${this.board.title}를 삭제하시겠습니까?`)) return;

            this.DELETE_BOARD({id: this.board.id})
                .then(() => {
                    this.SET_IS_SHOW_BOARD_SETTINGS(false);
                })
                .then(() => {
                    this.$router.push('/')
                })
        },
        onChangeTheme(el) {
            const bgColor = el.target.dataset.value;
            this.SET_THEME(bgColor)
            this.UPDATE_BOARD({id: this.board.id, bgColor: bgColor})
        }
    }
}
</script>

<style>
.board-menu {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #edeff0;
    width: 300px;
    transition: all
}
.board-menu-header {
    height: 46px;
    padding: 0 6px 0 12px;
    border-bottom: 1px solid #bbb;
}
.border-title {
    font-size: 18px;
    text-align: center;
    line-height: 46px;
    font-weight: 700;
}
.border-close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    text-decoration: none;
    font-size: 24px;
    color: #999;
}
.menu-list {
    list-style: none;
    padding-left: 0;
}
.menu-list li {
    height: 18px;
    line-height: 18px;
    padding: 10px;
    margin: 5px;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 700;
    color: #111;
    margin-bottom: 5px;
    cursor: pointer;
}
.munu-list li:hover,
.munu-list li:focus {
    background-color: rgba(0,0,0,.1);
}
.menu-list li a {
    text-decoration: none;
    color: inherit;
}
.color-picker {
    margin: 0 15px;
}
.color-picker a {
    display: inline-block;
    width: 49%;
    height: 100px;
    border-radius: 8px;
}
</style>
# todoList 만들기

## store없이 사용했을경우 

- app.js에서 데이터와 메소드를 관리해줘야한다. 
- 하위컴포넌트에 메소드와 값을 넘겨준다. 



## localStorage

주의할점은 value값으로 넣어줄떄 JSON.stringify로 텍스트화 해서 넣어준다. 

로컬스토리지에서 가져올때는 JSON.parse로 객체화 해서 배열에 넣어준다.

로컬스토리지 기능

- localStorage.setItem(key, value) - 새로운아이템추가, 기존아이템 변경
- localStorage.removeItem(key) - 아이템 삭제
- localStorage.clear() - 로컬스토리지 전체삭제



# v-model

인풋요소와 데이터텍스트객체와 연결할때 사용

```js
//template
<input type="text" class="inputText" v-model="todovalue">
    
//script
export default {
    data() {
        return {
            todovalue: ""
        }
    },
```



## on 이벤트

```js
v-on:keyup.enter //엔터시 이벤트
v-on:click //클릭시 이벤트
```



## if문

```js
v-if="toggleModal" //toggleModal값이 true일때 노출된다.
```



## for문

for문에 key값이 없으면 경고가 뜨니 ! 꼭 넣어준다. 

```js
v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.text"
```



## 삼항연산자? 조건에따라 클래스 넣기

```js
v-bind:class="{checkBtnCompleted: todoItem.completed}" 
// todoItem.completed값이 true가 되면 checkBtnCompleted클래스가 추가된다. 
```



## app.js에서 하위컴포넌트로 props값 넘기기

```js
// app.js
<컴포넌트 v-bind:propsdata="listArr"></컴포넌트> //하위컴포넌트에 propsdata라는 이름으로 listArr를 넘기겠다. 

//하위 컴포넌트
export default {
   props: [ 'propsdata' ],
```



## app.js에서 하위컴포넌트로 이벤트 값 넘기기

```js
// app.js
<컴포넌트 v-on:toggleOneItem="toggleOneItem"></컴포넌트> //하위컴포넌트에 toggleOneItem이름으로 toggleOneItem 넘기겠다. 

//하위 컴포넌트
// template
<button v-on:click="toggleOneItem(todoItem, index)"></button>

// script
 export default {
     methods: {
         toggleOneItem(todoItem, index) {
             this.$emit('toggleOneItem', todoItem, index)
         }, //emit으로 연결시켜준다.
```



## 권고사항

app.js에서 하위컴포넌트에서 받아온 값을 변경해서 사용하지 말고 

app.js에서 접근할수있는 값으로 변경해서 사용하는것을 권고한다. 

```js
toggleOneItem(todoItem, index) {
    //todoItem.completed= !todoItem.completed; 
    this.listArr[index].completed = !this.listArr[index].completed; //권고사항

    localStorage.setItem(todoItem.text, JSON.stringify(todoItem));
},
```



## slot

템플릿 같이사용 할수 있다.

```html
// modal
<div class="modal-header">
    <slot name="header">
        default header
    </slot>
</div>

<div class="modal-body">
    <slot name="body">
        default body
    </slot
</div>

// 모달을 사용하는 컴포넌트
<Modal v-if="toggleModal"  @close="toggleModal = false">
    <h3 slot="header">
        경고
		<i class="closeModalBtn fas fa-times" @click="toggleModalEvt"></i>
	</h3>
    <h4 slot="body">내용을 입렵하세요</h4>
</Modal>
```



## transition효과

```js
//template
<transition-group tag="ul" name="list">
</transition-group> //ul이라는 태그에 transition을 주겠다. 클래스명은 list로

//style
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
```



## vuex를 사용하는경우 

설치방법

npm install vuex --save

store/store.js 생성

store를 main.js에서 연결해주기

store.js에 state, mutation값 만들어주기

값이 필요한 곳에서 this.$store.commit('addOneItem'); 로 바인드

```js
//state
this.$store.state.listArr; 

//mutations
this.$store.commit('addOneItem'); 
```

**팁**

mutaions는 첫번째는 state, 두번째는 값을 객체로 받기때문에 두번째 인자를 {}로 줄수도 있다.

```
this.$store.commit('toggleOneItem', {todoItem, index});
```



## helper 사용하기 

mapGetters

```js
...mapGetters(['getTodoItems']); //store값이랑 컴포넌트에서 불러오는 값이 동일
...mapGetters({'item' : 'getTodoItems'});
```



mapMutations는 호출단에서 인자가 있으면 안넘겨줘도 된다.

**주의할점은 ** 호출단에서 인자가 여러개일때 {}로 묶어준다. 

```js
v-on:click="clickEvt({todoItem, index})"
```

```js
methods: {
    ...mapMutation({
        clickEvt: 'toggleOneItem' //클릭이벤트명 : store이벤트명
    })
}
```





커밋을 하는이유 

```
this.$store.commit('addOneItem');
```

템플릿에서 인자값으로 넘겨준경우 commit시 인자값 안줘도 된다. 

mutaions는 첫번째는 state, 두번째는 값을 객체로 받기때문에 

템플릿에서 여러개 인자값이 있을때 ({num1, num2}) 이렇게 넘겨주면된다.  --helper하고 헷갈림```

```
this.$store.commit('toggleOneItem', {todoItem, index});
```






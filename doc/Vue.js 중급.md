# Vue.js 중급

vue서버 키는 명령어 - npm run serve



컴포넌트를 작게 조갯을떄 재사용성이 더 좋아진다.

v-model - 인풋에 입력된 값을 동적으로 인스턴스로 매핑하는 역활

2way binding 화면에서, 조작단의 조작이 가능하다

v-for를 사용하는경우 key값을 써주지 않으면 오류가 난다.

```vue
v-bind:class="{textCompleted: todoItem.completed}" 
//동적바인딩
//todoItem.completed가 true면 'textCompleted'클래스 추가 
//false면 'textCompleted'클래스 안나옴
```



localStorage는 업데이트가 따로없다. 그래서 삭제하고 다시 setItem해줘야한다. 



문제 

리스트삭제, 추가시 리스트가 갱신이 안된다.

![](C:\Users\윤선지\Desktop\vue\img\img1.png)

개선 

![](C:\Users\윤선지\Desktop\vue\img\img2.png)



APP.vue은 컨테이너라고 생각하면 된다.

앱의 비지니스 로직, 데이터 조작은 컨테이너 컴포넌트

여기서 todoInput, todoList, todoFooter는 UI구현을 하는 프리젠터 컴포넌트



하위컴포넌트에서 이벤트 발생시 상위컴포넌트에 올리는 방법

```vue
//상위 컴포넌트
<TodoInput v-on:하위컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트 메서드 명"></TodoInput>

//하위 컴포넌트
this.$emit('이벤트이름', 인자1, 인자2)

```



props를 프리젠터로 내려서 그값을 다시 올려서 컨테이너에서 그 값을 조작하는것은 안티패턴이다

그값을 조작하는것이 아니라 컨테이너의 값으로 조작하자! 

재사용하려면 컨테이너 컴포넌트에서 데이터를 조작하는것을 분리시키는게 좋다.



뷰는 애니메이션과 트렌지션을 라이브러리에서 제공하고 있다.

템플릿을 모듈화하려면 x-template을 사용할수 있다.



## slot

template태그들은 변경하기 힘들음 

slot은 재사용하기 좋은 것

사용한 컴포넌트에서 slot영역을 재정의할수있다



## @click == on:click

편해서 좋다. 효율적



## 트렌지션 

뷰에서는 간단하게 트렌지션을 추가할수있다. 

애니메이션, 트렌지션이 뷰에서 제공을 한다는 매력적인 장점이 있다.

- 애니메이션을 줄 객체에 transition-group tag=""로 넣어준다.
- name은 css class와 연관이 있다.
- enter, leave는 같이 쓴다고 생각하면 된다.

![](C:\Users\윤선지\Desktop\vue\img\transition.png)



## ES6

효율적, 편리함, 시간절약

ECMAscript 2015 동일한 언어

2015년에 나온 es6는 es5가 나왔던 해 2009년 이래로 메이저 업데이트!



## Babel

구버전 브라우저에서 지원이 안되는 ES6기능을 ES5로 transpiling해줌



## const, let

- 블록단위 제한

- const 값변경안됨(상수) 

- let 동일한 변수명으로 재선언불가, 값은 변경 가능

- const로 객체나 배열을 등록했을때 push, 키값으로 추가한다면 수정가능

  ```js
  const arr = {};
  arr.a = name; //가능
  
  const brr = [];
  brr.push(200); //가능
  ```

- const를 선호하는이유 - 오버라이드가 안되기 때문에 디버깅이 더 쉽고

- 반복문은 값이 올라가야하기때문에 **let**을 사용한다.

## hoisting

- 사전적 의미 - 끌여올려진다.
- 함수선언문과 변수는 최상단으로 끌어올려진다.

```js
function sum () {
    return 10 + 20;
} //함수 선언문

var sum = function(){
    return 30;
}
```



## arrow function(화살표 함수)

function 을 키워드를 사용하지 않고 =>를 사용한다.

적은바이트수! 콜백함수에서 간결함! this바인딩! 



## 향상된 literal 객체

1. 객체에 함수를 선언할때 function을 할당해줬는데 

:function 문자를 안쓰고도 사용할수있다. 

```js
//원래는 
var a = {
    look: function(){
        console.log('ddd');
    }
}

//literal 객체
var a = {
    look(){
        console.log('ddd');
    }
}
```

2. 객체명과 할당명이 같으면 축약가능

   ```js
   var figures = 10;
   var dictionary = {
       // figures = figures;
       fifures
   }
   ```



## Modules 

es5는 module화 기능이 없었다. 

모듈화 - 재사용성, 특정 기능을 수행하는 단위



## Vuex - 상태관리 라이브러리

많은 컴포넌트의 데이터를 관리하기 위한 상태관리 패턴이자 라이브러리

Vuex 등장배경이 된 Flux패턴 ![](C:\Users\윤선지\Desktop\vue\img\flux.png)



MVC, Flux 의차이 

MVC - 양방향, 데이터의 흐름을 추척할수없다. 

Flux - 단방향

![](C:\Users\윤선지\Desktop\vue\img\flux2.png)



state, getters, mutations, actions

Vuex를 더 쉽게 코딩할수 있는 Helper 함수 



## Vuex가 왜 필요할까? 

복잡한 애플리케이션에서 컴포넌트의 개수가 많아지면 컴포넌트간에 데이터전달이 어려워진다.

state : 컴포넌트 간에 공유하는 데이터 ex) data()

view: 데이터를 표시하는 화면 template

action: 사용자의 입력에 따라 데이터를 변경하는 methods



actions은 데이터를 변경하지 않는다. 

mutations이 데이터를 변경한다.

![](C:\Users\윤선지\Desktop\vue\img\vuex.png)

Vuex 기술요소

- state : 여러컴포넌트에 공유되는 데이트 data
- getters: 연산된 state값을 접근하는 속성 computed
- mutations: state값을 변경하는 이벤트 로직, 메서드 methods
- actions: 비동기 처리 로직을 선언하는 메서드 



data와 state의 다른점은 state는 다른컴포넌트에 공유된다는 점!



## getters란? 

state값을 접근하는 속성이자 computed()처럼 미리 연상된 값을 접근하는 속성

```vue
state: {
	num: 10
},
getters: {
    getNumber(state) {
		return state.num;
    },
    doubleNumber(state) {
		return state.num * 2;
    }
}
```



## mutation란? 

state를 변경할수 있는 유일한방법

뮤테이션은 commit()으로 동작시킨다.

뮤테이션 특성 첫번째인자는 state를 가져온다. 



## mutations의 commit 형식

```
state: { storeNum: 10 },
mutations: {
    modifyState(state, payload) {
        console.log(payload.str);
        return state.storeNum += payload.num;
    }
}

this.$store.commit('modifyState', {
    str: 'passed from payload',
    num: 20
})
```

많은값을 넘겨줄때 객체로 넘길수도 있다.

인자값 관행적으로 **payload**로 사용해준다.



왜 바로 접근이 안되고 commit을 사용해서 mutaions을 실행해야 하는가 ? 

- 어느 컴포넌트에서 변경했는지 추적이 어렵다. 
- 데이터를 변경했을떄 스크립트가 추적하고 하는게 어려울수 있다. 
- state가 변경되면 자동으로 view가 업데이트 된다.



## 리펙토링

```js
removeTodo(todoItem, index) {
    const obj = {
        todoItem,
        index
    }
    this.$store.commit('removeOneItem', obj);
},
    
removeTodo(todoItem, index) {
    this.$store.commit('removeOneItem', {todoItem, index}); //간단하게 선언가능
},
```

vsCode 단축키

ctrl + d = 같은문자선택



## actions

비동기 처리 로직을 선언하는 메서드

비동기처리는 모두 actions에 선언한다.

actions의 첫번째 인자는 context이다. (context로 store의 메서드와 속성 접근)

dispatch로 actions을 호출시킬수 있다.



왜 비동기처리는 actions에 선언해야하는가 ? 

state값의 변화를 추적하기 어렵기때문에 mutations속성에는 동기처리 로직만 넣어야한다.

![](C:\Users\윤선지\Desktop\vue\img\actions.png)



## Helper

각 속성을 더 쉽게 사용하는 방법

- state -> mapState
- getters -> mapGetters
- mutations -> mapMutations
- actions -> mapActions



연산은 template보다 스크립트 안에서 다 끝내는 권고사항

```js
...mapGetters(['storedTodoItems']) 
...mapGetters({
	todoItems: 'storedTodoItems'
}) //템플릿 바인딩 이름이랑 getters 이름이 다를때
```



mapMutaion 헬퍼에서 인자값을 내가 안줘도 

template에 들어가있는 인자값을 자동으로 연결시켜준다.

**주의점!**

자동으로 넣어주지만 template에서 메소드를 연결해줄때 인자값을 하나의 object로 넘겨야 한다.

![](C:\Users\윤선지\Desktop\vue\img\refec.png)

 

## 프로젝트 구조화와 모듈화방법

- 파일로 분리하기

```js
// before
import Vue from 'vue';
import Vuex from 'vuex';

export const store = new Veux.Store({
    state:{},
    getters:{},
    mutations:{},
    actions:{}
}); 

// after
import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from 'store/getters.js';
import * as mutations from 'store/mutations.js';
import * as actions from 'store/actions.js';

export const store = new Veux.Store({
    state:{},
    getters:getters,
    mutations:mutations,
    actions:actions
}); 

```



- store를 분리하는 방법

Moudules 를 사용해서 동일한 기능 묶는 것


# 실전

vscode 플러그인

TSLint, ESLint, vetur, auto Close Tag, Material Icon Theme, Night Owl(테마), live server



## cli2.0, cli3.0의 차이

![](C:\Users\윤선지\Desktop\vue\img\cli.png)



자바스크립트 엔진에서 세미콜론을 자동으로 추가해준다.

세미콜론을 자동으로 넣어주다가 에러가나는 경우도 있다. 



트레일링 콤마 trailing comma 

객체에서 한개일때는 안찍어도 된다. 두개이상이 올떄 콤마로 나눠줘야한다. 



lintOnSave:false로 린트 꺼버리기



npm i vue-router --save 

라우터 설치하기 



컴포넌트를 카멜케이스로 했을때와 대시컴포넌트 차이

대시 컴포넌트로 사용하면 링크가 생겨서 바로 그 컴포넌트로 들어갈수있다. 



## router-link

```vue
<router-link to="">news<router-link>
```

화면에 a태그로 만들어준다. 

to에는 이동할 url을 넣어주면된다.

to가 없으면 에러 밷어줌



## mode: 'history',

router url 앞에 /#를 없애주는게 mode history 다 



페이지 view는 로직이 들어가는건 좋지않다. 

기획서가 완벽하게 되어있어서 한번에 들어가는건상관없지만! 유지 대응 유연하게 하기위해 로직을 걷어낸다 



## axios

http통신쪽을 쉽게 사용하기 위해 사용하는 라이브러리

프로기반으로 api를 제공하기 때문에

response로 받으면 axios의 구조를 확인할수있다.



데이터요청을 하는건 lifeCycle중 created()  beforeMount()에서 많이한다.

mounted에 데이터를 요청하면 데이터를 받고 화면을 다시 그린다.



## this의 네가지 

브라우저객체는 window이다. 

- window
- 함수안에서도 this는 window를 가르킨다. 
- 생성자함수에서 this는 생성자함수를 가르킨다. 



## 비동기

callback - 특정함수, 기능이 종료되는시점에 실행되는 함수

인자로 전달되는 함수를 callback이라고 한다.

jquery에서는 ajax 

Promise 객체 then, catch제공

promise(resolve, reject)

성공- resolve

실패 - reject

promise의 강점은 then 체인을 사용할수있다. 



vuex에서 구조상 비동기호출은 actions에 담기고 

바로 state를 변경할수없어서 mutations으로 state를 변경해줘야한다.



actions에서 mutaion에서 변경할수있도록 context라는 객체를 제공한다.

mapGetter에서 불러오는이름과 적용되는이름이 같을때는 배열로 다르다면 객체로 적용한다.



데이터를 받아와서 a태그 링크를 넣어주는경우v-bind:href를 해야한다.

v-bind:href 축약 :href로 써줄수있다.



## Dynamic Route Matching

user/:id 



## v-html

html태그를 화면에 그려줘야 할떄 v-html을 사용한다. 

```
<div v-html="fetchedItem.content"></div>
```



## v-if

<template> 

을 사용해서 분기처리할수있고!  template을 굳이 사용하지 않아도된다.

그냥 태그에 v-if을 사용해서 조건문을 사용할수있다.



상위에서 prop를 전달해 받는것 보다

Store를 사용하면 하위컴포넌트에서 바로 store에 접근해서 가져오는게 vuex를 더 잘 사용한 방법이다 .



## export 차이

export할때 const를 쓰느냐 마느냐의 차이



1. export 시  const를 썻을 때

```js
//bus.js
export const bus = new Vue();

// App.vue
import { bus } from './bus.js';

```

2. export시 default를 쓸때

```js
//bus.js
export default new Vue();

// App.vue
import Bus from './bus.js';
```



## 이벤트 버스

이벤트를 하나 만들어서 전달해주는 역활을 하는 것

bus는 라이프사이클 안에 다 정의를 한다.

이벤트 버스 이벤트는 beforeDestory로 끝날때 이벤트를 꺼준다. 

이벤트가 객체가 쌓이기때문에 앱종료, 컴포넌트의 역활이 끝나기 전에 off를 꼭 해준다. 

```js
created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
},
beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
}
```



## 하이 오더 컴포넌트

컴포넌트의 로직을 재사용하기위한 고급기술

```js
//route.js
{
    path: '/news',
    name: 'news',
    component: createListView('NewsView') //하이 오더 컴포넌트, 인자값이 컴포넌트 이름이 된다.
},
```

단점: 컴포넌트의 깊이가 깊어진다. 너무 많아지면 통신이 어려울수있음



## Mixins

믹스인은 여러컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법

믹스인에 정의할수 있는 재사용로직은 data, methods, created등과 같은 컴포넌트 옵션

스피너, 모달 온오프같은 것들은 믹스인으로 빼엇을때 효율이 좋음

컴포넌트의 로직들이 간단해지고 crud 비지니스 로직만 남게됨 

믹스인 네임은 최대한 자세하게 적는게 좋다.



## routing 

언제 데이터를 불러와야하나

데이터를 호출하는 시점 2가지 

1. 컴포넌트 라이프사이클 훅을 사용해서 불러오기 ex) created() 
   created - 컴포넌트가 생성되자마자 호출되는 로직

   라이프사이클을 이용한 페이지 전환은 먼저 페이지전환이 된 후 데이터가 들어온다. 

2. 라우터 네비게이션 가드 
   특정 URL로 접근하기 전의 동작을 정의하는 속성

```js
//라우터 속성
beforeEnter: (to, from, next) => {
    console.log('to' + to);
    console.log('from' + from);
    console.log('next' + next);
    
    next() // next함수를 호출해야 페이지 전환이 된다.
}
```

라우터 index.js에서 store 접근하려면 store를 import하면 된다.

```js
import { store } from './store/index.js'

store.dispatch('FETCH_LIST', this.$route.name) 
// this.$store가 아니라 store로 접근해야한다.
```

라우터 네비게이션 가드를 사용하면 데이터가 받아오면 그려지기때문에 깔끔한 화면이 될수있지만 

중간과정에서 로딩바, 스피너가 있어야한다. 사용자들이 로딩화면인지 인지를 못할수있다.



## async, await

자바스크립트 비동기 처리 패턴의 최신문법

함수선언문 앞에 async를 붙여주고 
그 안에 promise를 반환하는 함수에 await를 붙여준다.

뎁스가 깊어지지 않아서 좋다. 직관적인 코드를 짤수있다.

```js
async loginUser() {
	var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    if (response.data.id === 1) {
		console.log('사용자가 인증되었습니다');
        var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.items = list.data
    }
}
```



에러처리

try catch 가 좋은점은 then catch는 비동기처리에 대해서만 에러처리를 하는데

try catch는 자바스크립트 코드에러에 대해서도 에러처리를 해줌

```js
async loginUser() {
    try {
        var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
            console.log('사용자가 인증되었습니다');
            var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
            this.items = list.data
        }
    } catch(error) {
        console.log(error);
    } 
}
```



에러처리를 api를 불러오는곳에서 하면 더 관리가 좋다.

api/index.js 에서 axios선언 문에 해줘도 좋다.



## 라이브러리 모듈화 

1. 외부 라이브러리 모듈화 이유
   1. Vue.js 관련 라이브러리가 없을떄 일반 라이브러리를 결합할수 있어야한다.
   2. 종류 : 차트, 데이트피커, 테이블, 스피너
2. 사용방법
   1. 차트 라이브러리 npm으로 설치
   2. 사용할 컴포넌트 export default에 mouted 라이프사이클에 스크립트를 넣어준다. 
   3. import Chart from 'chart.js'; //chart.js는 package.json에 defendencies 이름과같아야한다. 
   4. 차트 컴포넌트화 
   5. 컴포넌트의 플러그인 화 
   6. 컴포넌트 통신을 이용한 차트 컴포넌트 기능 결합



## vue에서 dom 조작

ref 속성을 사용하면 this.$refs 배열로 저장이 되고 

this.$refs로 접근이 가능하다.

```html
<div ref="app" id="app">hello</div>
```

```js
var divElement = this.$refs.app;
```



refs 속성이 좋은이유는 선언된 컴포넌트 템플릿 태그에만 접근이 가능하기때문에 

getElementById로 접근했을때 중복선언이 되는 이슈를 없앨수 있다.



## chart 컴포넌트의 플러그인 화

플러그인화를 왜 진행하냐

Vue.use(VueRouter);

Vue.use(Vuex);  

// Vue.use를 사용한건 Vue에서 제공하는 플러그인을 사용한것이다.

```js
import Chart from 'chart.js'; //공통으로 사용하는 코드 

export default {
  install(Vue) {
    Vue.prototype.$_Chart = Chart;
  }
}
```



## 컴포넌트 디자인 패턴

1. common - 기본적인 컴포넌트 등록과 컴포넌트 통.0신
2. slot - 마크업 확장이 가능한 컴포넌트
3. Controlled - 결합력이 높은 컴포넌트
4. Renderless - 데이터처리 컴포넌트



## props 유효성 검사

```js
//기본스타일
export default{
    props: ['title']
}

//타입 검증 스타일 
export default{
    props: {
        title: String,
        items: {
            type: Array,
            required: true 
        }
    }
}
```



## slot을 왜 쓰는가 ?

확장을 할수 있다! 

버튼, 이미지, 스타일, 돔구조 등을 자유롭게 넣을수 있다는 장점



props를 내린것을 v-model로 하위컴포넌트에서 값을 변경하게 되면 error가난다. 

상위에서 props를 내리는것이 아니라 v-model로 data값을 넘겨준다. 

checked 의상태를 상위에서 관리를 하게 해줘야한다.

```
// 상위
<checkBox v-model=""></checkBox>

//하위 
<input type='checkbox' :value="value" @click="toggleCheckBox">

export default {
	props: ['value'],
	methods: {
        toggleCheckBox() {
            this.$emit('input', !this.value)
        }
	}
}
```



## render function 

vue자체에서 render를 돌려서 구현해주기 때문에 

우리가 작성하지 않았던 것이다.

```js
render: fucntion(createElement) {
    return createElement('태그이름', '태그속성', '하위태그이름');
}
```

```js
new Vue({
    render: h => h(App)
    // 1
   	render: function(createElement) {
        return createElement(APP);
   	}

	// 2
   	render: function(h) { //h는 Vue에서 가르키는 virtual Dom - hyper script라고 한다
        return h(APP);
   	}
})
```



## scoped slot





## 배포하기

npm run build 

html, css, js 정적인 파일들이 dist폴더에 생성된다. 




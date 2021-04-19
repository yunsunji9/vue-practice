# vue.js 입문

- PWA기반 Single Page App을 제작하기위한 라이브러리

- MVVM패턴의 ViewModel 레이어에 해당하는 View단 라이브러리

- 컴포넌트 형태로 제공한다

- 2way data bindings 제공 (앵귤러에서 사용하는)

- virtual Dom을 이용한 렌더링 방식 리액트와 유사하다

- 다른 프레임워크보다 훨씬 가볍고 빠르다. 



## Vue instance

Vue 라이브러리 로딩후 Vue라는 기본객체에 옵션을 포함하여 화면단위를 생성한다.

- template 
- el - vue가 화면이 그려질 시작점
- methods 
- creates - 라이프사이클 훅

- 컴포넌트를 직접 import해서 사용하는 방식을 권고한다.



## life cycle

객체 생성, 변경, 소멸될때 어떤 작업을 할건지 분기 시켜주는 기능

- created - 인스턴스가 생성 되었을때 
- mouted 
- updated
- destoryed

커스텀 로직덕분에 따로 controller를 가지고 있지 않다! 



## vue Components

- 전역 컴포넌트

```vue
Vue.component('my-component', {
})
```



- 지역 컴폰넌트
  new Vue에서 components로 속성을 추가하면 지역컴포넌트가 된다. 

```vue
var cmp = {
	data: function(){
	},
	template: '<hr>',
	methods: {}
}

new Vue({
	components: {
        'my-cmp': cmp  //컴포넌트명: 컴포넌트 내용
	}
})
```



## 컴포넌트 간 데이터 통신

부모 -> 자식  - props down

자식 -> 부모  - events up

props - 상위에서 하위로 값을 전달하려면 props속성을 사용한다.

v-bind

![](img\props.png)



동일한레벨 컴포넌트 자식간의 통신은 불가하다

컴포넌트 간 통신을 위해 **Event Bus **을 사용할수 있다. 

Event Bus 단점 - 컴포넌트 간의 관계가 정확해지지 않는다.

**빠른렌더링, 부하를 줄이기위해** 반복하는컴포넌트에는 key값을 넣어준다.



## Vue Routers

화면이 전환될떄 전환하는 행위를 **라우트**라고 한다

spa 해당화면에 대한 정보를 가지고있다가 서버요청없이도 클라이언트 내부에서 화면을 바로 전환하는 것

- Nested Routers
  여러개의 컴포넌트를 동시에 렌더링할 수 있다. (감싸는 wrap컴포넌트 안에 컴포넌트도 같이 렌더링)
  하위에 들어가는 컴포넌트를 children으로 받아서 사용한다. 

- Named Views

  하위에 들어가는 컴포넌트들에 이름을 정해서 들어간다. 



Routing할때 주의할점!

- template 사용할때 감싸는 태그가 있어야한다.



## Nested Routers 와 Named Views 의 차이

Nested Routers

- 한개의 URL 에서 1개의 컴포넌트에 여러개의 하위 컴포넌트를 갖는것

Named Views

- 특정 URL에서 여러개의 컴포넌트를 쪼개진 뷰 단위를 렌더링하는것

![](img\router.png)



## HTTP 통신

http 통신은 위해서 vue-resource나 axios를 설치해야한다. 

```vue
this.$http.get(url).then(successCallback, failCallback);
```



## Vue Templates

vue로 그리는 화면의 요소들, 함수, 데이터속성을 모두 templates안에 포함된다.



## Vue-attr

어트리뷰트 선언은 **v-bind**을 사용한다.

```
<div v-bind:id="dynamicId"></div>
```



## 자바스크립트 표현식

{{}}안에 선언한다. 
분기문, 여러가지 연산이 들어가는 자바스크립트 표현식은 허용하지 않는다.

````
<div>{{ number + 1 }}</div>
<div>{{ message.split('').reverse().join('') }}</div>
````



## v-   디렉티브라고 한다.

```
<p v-if="seen">NOW YOU SEE ME</p>
<a v-bind:href="url">url</a>
<a v-on:click="somthing">url</a>
```



## filter

화면에 표시되는 텍스트의 형식을 편하게 바꿀수있도록 고안된 기능이며, 

|를 이용하여 여러개의 필터를 적용할수있다.



## data binding

```
<span>{{ msg }}</span>
<span>{{* msg }}</span> //*의미는 값이 변경되지 않는다의 의미
<span id="item-{{ id }}"></span>
```



## class binding

가급적이면 한가지 방법으로 적용하는게 좋다.

```vue
class="{{ classname }}" //첫번째 방법

v-bind:class //두번째 방법
```



조건에 맞춰 클래스 추가도 가능하다.

```vue
<div class="static" v-bind:class="{ 'class-a': isA, 'class-b': isB }">
</div>

<script>
    data: {
        isA: true,
        isB: false
    }
</script>
```



배열구문도 사용 가능하다

```vue
<div v-bind:class="[classA, classB]"></div>
<script>
    data: {
        classA: 'class-a',
        classB: 'class-b'
    }
</script>
```



## Single File Components

- 앱의 복잡도가 증가할때 .vue라는 파일단위 안에 html, css, js를 관리할 수 있는 방법


**복잡도가 커지면 야기되는 문제들**

- 모든컴포넌트에 고유의 이름을 붙여야함
- js파일에서 template안의 html의 문법강조가 되지 않는다.
- js파일에서 css스타일 작업이 거의 불가
- ES5를 이용하여 계속 앱을 작성할경우 Babel 빌드가 지원되지 않는다.



## vue cli

webpack에서 지원하는 서버를 이용해서 간단하게 구현하는것



## vue-loader

.vue확장자 파일을 javascript 모듈 형태로 변환해 주는 webpack loader

사용 시 장점

- es6 지원

- <style> <template>에 대한 각각의 webpack loader 지원(jade, scss)

- 각 .vue 컴포넌트의 스코프로 좁힌 css스타일링 지원

  ```vue
  <style lang="css" scoped> //scoped를 써주면 여기에서만 적용이 된다.
  </style>
  ```

-  webpack의 모듈 번들링에 대한 지원과 의존성관리 제공

- 개발시 새로고침하지 않아도 반영이 되는 hot reloading지원
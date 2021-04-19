# vue로 트렐로 만들기

인증 - 로그인, 로그아웃

보드작업 - 보드, 리스트, 카드 (crud작업)

![](img\board.png)

![](C:\Users\윤선지\Desktop\vue\img\flow.png)



## 라우팅

서버, 브라우저가 라우팅의 주체가 될수있다.

서버 라우팅(네이버, 구글)

브라우저 라우팅(트렐로)

브라우저 라우팅이 서버라우팅보다 효율적으로 렌더링한다. 



vue-router - 가장많이 사용하는 vue 라우터 라이브러리

Vue.use(VueRouter) //vueRouter를 사용하기위해 미들웨어로 연결해줘야한다.

미들웨어로 연결해주면 $Route이렇게 사용할수 있게 됩니다. ex) this.$Route.path



router-link는 네비게이션을 가능하게하는 컴포넌트

a태그를 사용해도 되지만 vue-rotuer를 사용할때는 router-link를 이용하라고 권고한다. 

a태그를 사용하면 페이지가 다시로드됨으로 추천하지 않는다.

중첩라우팅 router/index.js 에 children으로 선언해준다.



created() 처음생성만 추적을 하기위해 watch를 사용하기도 한다.
watch를 사용하면 created를 중복으로 선언 하지 않아도 된다.

```
watch: {
    '$route'() {
    	this.cid = this.$route.params.cid
    }
},

watch: {
    '$route': {
        handler: 'fetchData',
        immediate: true
    }
} //이렇게 사용할수도 있다.
```



브라우저에서 api를 요청해야한다.

XMLhttpRequest 


axios (써드파티 라이브러리)

Promise 기반 

XMLhttpRequest를 만들어준다. 



뷰라우터의 기능 - 네비게이션 가드 

라우팅 직전에 로직을 추가할수있는 것

토큰을 체크해서 있는지 없는지 확인 

```
beforeEnter 
```



rPath = 리턴패스 

'/login?rPath=${to}'



@click.prevent="logout" //click했을때 기본동작은 prevent하고 logout이벤트를 바인드



라우터로 페이지 강제로 이동할떄 

this.$router.push('/login')



## VUEX

vue.js 애플리케이션 **상태관리 패턴 + 라이브러리**

 

기본 vue.js 상태공유시 

액션 (메소드) -> 상태 -> 뷰

단점: 하위컴포넌트가 많은경우 prop를 계속 내려줘야한다. 

하위컴포넌트에서 이벤트가 발생하면 계속 올려줘야한다. 



Vuex에서 실제로 상태를 변경하는것 mutation으로 해줘야한다.

mutation 호출하는건 commit으로 한다



비동기 작업은 action을 거쳐서 mutation을 호출하도록 한다.

action은 context라는 종합객체를 받는다

비동기처리를 한다.

**getter는 vue컴포넌트의 computed속성과 비슷하다**



```
this.$el //컴포넌트 객체를 받을수있다.
```



:readonly="!toggleTitle"

// false이면 readonly가 나오고 true면없어진다
var Login = {
    template: `
      <div>
        Login Section
        <router-view>
         
        </router-view>
      </div>
    `,
  };
  var LoginForm = {
    template: `
      <form action="/" method="post">
        <div>
            <label for="account">E-mail : </label>
            <input type="email" id="account">
        </div>
        <div>
            <label for="password">Password : </label>
            <input type="password" id="password">
        </div>
      </form>
    `,
  };
  var List = {
    template: `
      <div>
        List Section
        <router-view></router-view>
      </div>
    `,
  };
  var ListItems = {
    template: `
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    `,
  };

  // 할일 #2
  // Main 컴포넌트와 그 하위 컴포넌트를 아래 등록해보세요.

  var Main = {
    template: `
      <div>
        메인 입니다.
        <router-view></router-view>
      </div>  
    `
  };

  var MainList = {
    template: `
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
    `
  }
  
  var routes = [
    {
      path: '/login',
      component: Login,
      children: [
        { path: '', component: LoginForm }
      ]
    },
    {
      path: '/list',
      component: List,
      children: [
        { path: '', component: ListItems }
      ]
    },
    // 할일 #1
    // '/main' URL에서 동작할 라우터를 하나 등록하고, 
    // 해당 라우터에서 동작할 Main컴포넌트와 하위 컴포넌트를 생성하여 등록합니다.
    {
      path: '/main',
      component: Main,
      children: [
        { path: '', component: MainList }
      ]
    }
  ];
  
  var router = new VueRouter({
    routes
  });
  
  var app = new Vue({
    router
  }).$mount('#app');
  
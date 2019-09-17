# VueTS-Order-Pizza

### What have I learned

* 5-1.  
`<a href="/menu"></a>`  
也可以跳转路由，但是会有【刷新】。所以要替换成
`<router-link to="/menu">menu</router-link>`
------------

* 5-2.navbar里面的登录和注册的ul应该用
`ml-auto`
------------

* 5-3.router-link后面的属性
`to="/menu"===to="menu"`
------------

* 6-1.router-link的tag属性
------------

* 6-2.router-link属性to的动态绑定
`:to="variable-name"`
------------

* 6-3.在配置router初期，先写成
`{path: '*',redirect: '/',}`
------------

* 7-1.路由配置name属性，调用的时候用
`:to="{name: homeLink}"`
------------

* 7-2. **路由跳转方式**
```javascript
changeRouter () {
    //
    this.$router.【go】(-1);
    //
    this.$router.【replace】('/menu');
    this.$router.replace({name: 'menuLink'});
    //
    this.$router.【push】('/menu');
    this.$router.push({name: 'menuLink'});
}
```


* 8-1. **二级路由和三级路由**

```javascript
一级redirect: '/admin'
二级redirect: '/admin/contact'
三级redirect: '/admin/contact/phone'
```

* 9-1. **全局守卫**
```javascript
router.js
router.beforeEach((to, from, next) => {
	if (to.path === '/login' || to.path === '/register') {
        next();
    } else {
        if (!true) {
            next();
        } else {
            next('/login');
        }
    }
})
```

* 10-1. **后置钩子**

```javascript
router.js
router.afterEach((to, from) => {

})
```

* 10-2. **独享守卫**
```javascript
router.js
router.beforeEnter((to, from, next) => {
    
})
```

* 10-3. **组件内的守卫**
```javascript
组件.vue
beforeRouterEnter (to, from, next) {
    console.log(this.name);// 无法获取，都还没有实例化
    // 如何获取组件内部变量
    next(vm => {
        console.log(vm.name);
    })
}
```

```javascript
组件.vue
beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
}
```

```javascript
组件.vue
beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    let confirm = window.confirm('确认离开吗？');
    if (confirm) {
        next();
    } else {
        next(false);// TODO
    }
}
```

* 11-1. 
`<router-view>`的复用
// TODO 遗留了三级路由的问题
------------

* 12-1. **滚动行为**

```javascript
const router = new VueRouter({
    routes: [...],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        
        // 1
        //return {x: 0, y: 200};
        // 2
        //return {selector: '.btn'};
        // 3
        if (savedPosition) {
            return savedPosition;
        } else {
            return {x: 0, y: 0}
        }
    }
})
```

CSS :   
`height: 85vh;`  
`width: 75vw;`  

------------

* 13-1 **登录和注册页面的布局（没学习头）**
------------

* 14-1 **注册请求**
```javascript
(this as any).$axios
    .post('URL', formData)
    .then((res: any) => {
        console.log(res);
        // 跳转
        (this as any).$router.push('/login');
    })
    .catch((err: any) => {
        console.log(err);
    })
```
------------

* 15-1 **登录请求**  
与注册请求相同。没有讲如何将用户名赋值到导航条上面。
------------

* 16-1 **菜单页面**
**tbody内是可以写 v-for。tr内可以继续遍历**
```html
<tbody v-for="item in getMenuItems" :key="item.name">
<tr>
    <td><strong v-text="item.name"></strong></td>
</tr>
<tr v-for="typeItem in item.options">
    <td v-text="typeItem.size"></td>
    <td v-text="typeItem.price"></td>
</tr>
</tbody>
```





* 补充：翻译页面  

**子组件一传事件给父组件**
```javascript
TranslateForm.vue
this.$emit('loginSubmit', param1, param2)
```

**父组件接受并传递给子组件二**
```javascript
:loginSubmit="loginSubmit"

:translatedText="translatedText"
```

**子组件二接受**
```javascript
Prop: ['translatedText']
```
------------

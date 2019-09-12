# vuets-order

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### What have I learned

* 5-1.`<a href="/menu"></a>`也可以跳转路由，但是会有【刷新】。所以要替换成`<router-link to="/menu">菜单</router-link>`
* 5-2.navbar里面的登录和注册的ul应该用`ml-auto`
* 5-3.router-link后面的属性`to="/menu"===to="menu"`
* 6-1.router-link的`tag`属性
* 6-2.router-link属性to的动态绑定`:to="variable-name"`
* 6-3.在配置router初期，先写成`{path: '*',redirect: '/',}`
* 7-1.路由配置name属性，调用的时候用`:to="{name: homeLink}"`
* 7-2.路由跳转方式：
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
* 8-1.二级路由和三级路由
```javascript
一级redirect: '/admin',
二级redirect: '/admin/contact'
三级redirect: '/admin/contact/phone'
```
*9-1.全局守卫
```javascript
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
9-2.
后置钩子
```javascript
router.afterEach((to, from) => {

})
```
独享守卫
```javascript
router.beforeEnter((to, from, next) => {
    
})
```
























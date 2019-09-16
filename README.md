# VueTS-Order-Pizza

### What have I learned

* 5-1.`<a href="/menu"></a>`  
Ҳ������ת·�ɣ����ǻ��С�ˢ�¡�������Ҫ�滻��  
`<router-link to="/menu">�˵�</router-link>`
------------
* 5-2.navbar����ĵ�¼��ע���ulӦ����  
`ml-auto`
------------
* 5-3.router-link���������  
`to="/menu"===to="menu"`
------------
* 6-1.router-link��`tag`����
------------
* 6-2.router-link����to�Ķ�̬��  
`:to="variable-name"`
------------
* 6-3.������router���ڣ���д��   
`{path: '*',redirect: '/',}`
------------
* 7-1.·������name���ԣ����õ�ʱ����  
`:to="{name: homeLink}"`
------------
* 7-2.·����ת��ʽ��
```javascript
changeRouter () {
    //
    this.$router.��go��(-1);
    //
    this.$router.��replace��('/menu');
    this.$router.replace({name: 'menuLink'});
    //
    this.$router.��push��('/menu');
    this.$router.push({name: 'menuLink'});
}
```
* 8-1.����·�ɺ�����·��
```javascript
һ��redirect: '/admin'
����redirect: '/admin/contact'
����redirect: '/admin/contact/phone'
```
* 9-1.ȫ������
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
* 10-1.
���ù���
```javascript
router.js
router.afterEach((to, from) => {

})
```
* 10-2.��������
```javascript
router.js
router.beforeEnter((to, from, next) => {
    
})
```

* 10-3.����ڵ�����
```javascript
���.vue
beforeRouterEnter (to, from, next) {
    console.log(this.name);// �޷���ȡ������û��ʵ����
    // ��λ�ȡ����ڲ�����
    next(vm => {
        console.log(vm.name);
    })
}
```
```javascript
���.vue
beforeRouteUpdate (to, from, next) {
    // �ڵ�ǰ·�ɸı䣬���Ǹ����������ʱ����
    // ������˵������һ�����ж�̬������·�� /foo/:id���� /foo/1 �� /foo/2 ֮����ת��ʱ��
    // ���ڻ���Ⱦͬ���� Foo �����������ʵ���ᱻ���á���������Ӿͻ����������±����á�
    // ���Է������ʵ�� `this`
}
```
```javascript
���.vue
beforeRouteLeave (to, from, next) {
    // �����뿪������Ķ�Ӧ·��ʱ����
    // ���Է������ʵ�� `this`
    let confirm = window.confirm('ȷ���뿪��');
    if (confirm) {
        next();
    } else {
        next(false);// ????
    }
}
```
* 11-1.
`<router-view>`�ĸ���  
// ???? ����������·�ɵ����� 
------------
* 12-1
������Ϊ
```javascript
const router = new VueRouter({
    routes: [...],
    scrollBehavior (to, from, savedPosition) {
        // return �����������ĸ���λ��
        
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























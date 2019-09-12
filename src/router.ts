import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'


Vue.use(Router);

export const asyncRouterMap: any = [
    {
        path: '/',
        name: 'home',
        //component: Home
        components: {
            default: Home,
            'contact': () => import('./views/About/Contact.vue'),
            'delivery': () => import('./views/About/Delivery.vue'),
            'history': () => import('./views/About/History.vue'),
            'guide': () => import('./views/About/Guide.vue'),
        }
    },
    {
        path: '/menu',
        name: 'menu',
        component: () => import('./views/Menu/Menu.vue'),
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('./views/Admin/Admin.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./views/About/About.vue'),
        redirect: '/about/contact',
        children: [
            {
                path: '/about/contact',
                name: 'contact',
                redirect: '/about/contact/phone',
                component: () => import('./views/About/Contact.vue'),
                children: [
                    {
                        path: '/about/contact/phone',
                        name: 'phone',
                        component: () => import('./views/About/Contact/Phone.vue'),
                    },
                    {
                        path: '/about/contact/person',
                        name: 'person',
                        component: () => import('./views/About/Contact/Person.vue'),
                    },
                ]
            },
            {
                path: '/about/delivery',
                name: 'delivery',
                component: () => import('./views/About/Delivery.vue'),
            },
            {
                path: '/about/history',
                name: 'history',
                component: () => import('./views/About/History.vue'),
            },
            {
                path: '/about/guide',
                name: 'guide',
                component: () => import('./views/About/Guide.vue'),
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/Login/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/Login/Register.vue'),
    },
    {
        path: '*',
		redirect: '/',
    },
];

/** 实例化 **/
const router: any = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: asyncRouterMap,
});


/** 全局守卫 **/
router.beforeEach((to: any, from: any, next: any) => {
    if (to.path === '/login' || to.path === '/register') {
        next();
    } else {
        if (true) {
            next();
        } else {
            next('/login');
        }
    }
});

export default router;







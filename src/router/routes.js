
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        meta:{
            title: '登录',
        },
        component: () => import('@/views/Init/login.vue'), 
    },
    {
        path: '/register',
        name: 'Register',
        meta:{
            title: '注册',
        },
        component: () => import('@/views/Init/register.vue'), 
    },
    {
        path: '/home',
        name: 'Home',
        meta: {title: '首页'},
        redirect:'/healthchart',
        component: () => import('@/views/Home/home.vue'), 
        children:[
            {
                path: '/mycenter',
                name: 'MyCenter',
                meta: {title: '健康'},
                component: () => import('@/views/Home/mycenter.vue'), 
            },
            {
                path: '/account',
                name: 'Account',
                meta: {title: '健康'},
                component: () => import('@/views/Home/account.vue'), 
            },
            {
                path: '/cart',
                name: 'Cart',
                meta: {title: '健康'},
                component: () => import('@/views/Shop/cart.vue'), 
            },
            {
                path: '/healthchart',
                name: 'HealthChart',
                meta: {title: '健康'},
                component: () => import('@/views/Health/health.vue'), 
            },
            {
                path: '/healthtype',
                name: 'HealthType',
                meta: {title: '健康状态'},
                component: () => import('@/views/Health/healthtype.vue'), 
            },
            {
                path: '/bodytest',
                name: 'BodyTest',
                meta: {title: '身体检查'},
                component: () => import('@/views/Test/bodytest.vue'), 
            },
            {
                path: '/hearttest',
                name: 'HeartTest',
                meta: {title: '身体检查'},
                component: () => import('@/views/Test/hearttest.vue'), 
            },
            {
                path: '/medicine',
                name: 'Medicine',
                meta: {title: '保健药物'},
                component: () => import('@/views/Shop/medicine.vue'), 
            },
            {
                path: '/apparatus',
                name: 'Apparatus',
                meta: {title: '保健器械'},
                component: () => import('@/views/Shop/apparatus.vue'), 
            },
            {
                path: '/user',
                name: 'User',
                meta: {title: '人员'},
                component: () => import('@/views/User/userlist.vue'), 
            },
            {
                path: '/scroll',
                name: 'Scroll',
                meta: {title: '人员'},
                component: () => import('@/views/User/scrolltable.vue'), 
            },
            {
                path: '/local',
                name: 'Local',
                meta: {title: '人员'},
                component: () => import('@/views/User/local.vue'), 
            },
        ]
    }
]




export default routes
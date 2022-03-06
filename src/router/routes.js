
import store from '@/store'


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
                path: '/weather',
                name: 'Weather',
                meta: {title: '健康状态'},
                component: () => import('@/views/Health/weather.vue'), 
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


const clientMenus = [
    {
      authName: "体质资料管理",
      id: 123,
      order: 1,
      path: "/physiquedata",
      name:'PhysiqueData',
      fileName:'physiquedata',
      meta:{title:'体质资料管理'},
      component:'',
      children: [],
    },
    {
      authName: "订单管理",
      id: 124,
      order: 1,
      path: "/order",
      name:'Order',
      fileName:'order',
      meta:{title:'订单管理'},
      component:'',
      children: [],
    },
    {
      authName: "问题咨询管理",
      id: 125,
      order: 1,
      path: "/issueconsult",
      name:'IssueConsult',
      fileName:'issueconsult',
      meta:{title:'问题咨询管理'},
      component:'',
      children: [],
    }
]

const staticRoutes = [
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
        meta: {title: '首页',keepAlive:false, icon:''},
        component: () => import('@/views/Home/home.vue'), 
        children:[
            {
                path: '/physiquedata',
                name: 'PhysiqueData',
                meta: {title: '体质资料管理',keepAlive:false, icon:''},
                component: () => import('@/views/Client/physiquedata.vue'), 
            },
            {
                path: '/editdata',
                name: 'EditData',
                meta: {title: '体质资料管理',keepAlive:false, icon:''},
                component: () => import('@/views/Client/editdata.vue'), 
            },
            {
                path: '/buyshop',
                name: 'Buyshop',
                meta: {title: '体质资料管理',keepAlive:false, icon:''},
                component: () => import('@/views/Client/buyshop.vue'), 
            },
            {
                path: '/queryorder',
                name: 'QueryOrder',
                meta: {title: '体质资料管理',keepAlive:false, icon:''},
                component: () => import('@/views/Client/queryorder.vue'), 
            },
            {
                path: '/newconsult',
                name: 'NewConsult',
                meta: {title: '体质资料管理',keepAlive:false, icon:''},
                component: () => import('@/views/Client/newconsult.vue'), 
            },
            {
                path: '/queryconsult',
                name: 'QueryConsult',
                meta: {title: '体质资料管理',keepAlive:false, icon:''},
                component: () => import('@/views/Client/queryconsult.vue'), 
            },
        ]
    }
]




export default staticRoutes
// export default routes
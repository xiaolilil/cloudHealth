// import {getPermission} from '@/api/getPermission'
import staticRoutes from '@/router'
import axios from 'axios'


const state = {
    all_router:[],   // router /   staticRouter + 后端返回的数据
    async_router:[], //动态路由，后端返回的数据
    clientMenus: [
        {
          authName: "体质资料",
          children:[
            {
                id: 123,
                path: "/physiquedata",
                name:'PhysiqueData',
                component:'views/Client/physiquedata.vue',
                title:'体质资料管理',
                keepAlive:0,
                children: [],
                icon:''
            },
            {
                id: 122,
                path: "/editdata",
                name:'EditData',
                component:'views/Client/editdata.vue',
                title:'修改资料',
                keepAlive:0,
                children: [],
                icon:''
            }
          ]
        },
        {
          authName: "订单",
          children:[
            {
                id: 124,
                path: "/buyshop",
                name:'BuyShop',
                component:'views/Client/buyshop.vue',
                title:'购买商品',
                keepAlive:0,
                children: [],
                icon:''
            },
            {
                id: 125,
                path: "/queryorder",
                name:'QueryOrder',
                component:'views/Client/queryorder.vue',
                title:'查询订单',
                keepAlive:0,
                children: [],
                icon:''
            },
          ]
        },
        {
          authName: "问题咨询",
          children:[
            {
                id: 126,
                path: "/newconsult",
                name:'NewConsult',
                component:'views/Client/newconsult.vue',
                title:'新建咨询',
                keepAlive:0,
                children: [],
                icon:''
            },
            {
                id: 126,
                path: "/queryconsult",
                name:'queryconsult',
                component:'views/Client/queryconsult.vue',
                title:'查看咨询',
                keepAlive:0,
                children: [],
                icon:''
            }
          ]
        }
    ]
}
const getters = {
    
}

const modules = import.meta.glob("../../views/**/**.vue");


// 路由格式化
function formatRoute(data){
    const menuArray = []
    if(data && data.length > 0){
        data.forEach(i => {
            i.children.forEach((v) => {
                const menuObj = {};
                menuObj.path = v.path // 路由路径
                menuObj.name = v.name // 路由名字
                if(v.redirect){menuObj.redirect = v.redirect} // 重定向存在，才添加
                menuObj.meta = {  
                    title:v.title,
                    icon:v.icon,
                    keepAlive:v.keepAlive && v.keepAlive === '1' ? true : false
                }
                menuObj.component =  modules[`../../${v.component}`] // 映射组件
                // menuObj.component = () => import("../" + v.component) // 映射组件
                menuArray.push(menuObj)
            })
            
        });
        console.log(menuArray)
        return menuArray
    }
}
const mutations = {
    SET_ROUTER(state, router){
        state.async_router = router; // 动态路由
        state.all_router = staticRoutes.options
        router.forEach(i => {
            state.all_router.routes[3].children.push(i)
        })
    },
    
}
const actions = {
    GET_MENU(context, params){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const menus = formatRoute(state.clientMenus)
                context.commit('SET_ROUTER', menus)
                resolve()
            },300)
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}



















            // axios.get('https://checkimage.querydata.org/api').then((res) => {
            //         const menus = formatRoute(state.clientMenus)
            //         commit('SET_ROUTER', menus);
            //         console.log(1)
            // })
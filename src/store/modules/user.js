import { setToken, getToken } from '@/utils/setMsg.js'
// token值存入浏览器，在外部封装存取token的方法， 然后导入只在这里或者是路由拦截中使用

// import generateRoute from '@/utils/newRoute.js'
import router from '@/router'


const state = {
    userInfo: {
        userId: '',
        username: '',
        userHeadImg: '',
        mobile: '',
        roles:''
    },
    userType: {
        name: '张三',
        age: 20,
        native: '四川',
        high: 170,
        weight: 130,
        boold: '60 ~ 120',

    },
    token: {
        // token
        token: '' || getToken('token'),// 调用将token存入浏览器的方法
        // token过期时间 （自己起名）

        // token验证 （自己起名）
    },
    state: {
        // token:localStorage.getItem('token'),
        avatar: '',
        username: '',
        roles: '',
        menus: []
    },
    constantMenus: [

    ],
    clientMenus: [
        
            {
              authName: "体质资料管理",
              children:[
                {
                    id: 123,
                    path: "/physiquedata",
                    name:'PhysiqueData',
                    filePath:'views/Client/physiquedata.vue',
                    title:'体质资料管理',
                    children: [],
                    icon:''
                },
                {
                    id: 122,
                    path: "/editdata",
                    name:'EditData',
                    fileName:'views/Client/editdata.vue',
                    title:'修改资料',
                    children: [],
                    icon:''
                }
              ]

            },
            {
              authName: "订单管理",
              children:[
                {
                    id: 124,
                    path: "/buyshop",
                    name:'BuyShop',
                    fileName:'views/Client/buyshop.vue',
                    title:'购买商品',
                    children: [],
                    icon:''
                },
                {
                    id: 125,
                    path: "/queryorder",
                    name:'QueryOrder',
                    fileName:'views/Client/queryorder.vue',
                    title:'查询订单',
                    children: [],
                    icon:''
                },
              ]
            },
            {
              authName: "问题咨询管理",
              children:[
                {
                    id: 126,
                    path: "/newconsult",
                    name:'NewConsult',
                    fileName:'views/Client/newconsult.vue',
                    title:'新建咨询',
                    children: [],
                    icon:''
                },
                {
                    id: 126,
                    path: "/queryconsult",
                    name:'queryconsult',
                    fileName:'views/Client/queryconsult.vue',
                    title:'查看咨询',
                    children: [],
                    icon:''
                }
              ]

            }

    ]
}


const getters = {
    menus: state => {
        return state.userInfo;
    },
    token: state => {
        return state.token;
    }
};

const mutations = {
    // 登录成功或是重新登陆，更新state的个人信息
    // 清空时传入空字符串
    setToken(state, tokenObj) {
        // 规定这里设置传入token
        state.token.token = tokenObj.token;
        // 规定这里设置token过期时间

        // 调用将token存入浏览器的方法
        setToken('token', tokenObj.token)
        state.userInfo.username = tokenObj.username;
        state.userInfo.userId = tokenObj.id;
        state.userInfo.mobile = tokenObj.mobile;

    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_USERNAME: (state, username) => {
        state.username = username
    },
    SET_ROLES: (state, roles) => {
        state.userInfo.roles = roles
        console.log(state.userInfo)
    },
    SET_MENUS: (state, menus) => {
        state.menus = menus
    },





};

const actions = {
    /* login */
    LoginResult({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            Login(userInfo).then(res => {
                const { code, token } = res.data
                if (code == 200) {
                    setToken('token', token)
                    commit('SET_TOKEN', token)
                }
                resolve(res.data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    /* getUserInfo */
    GetInfo({ commit }, token) {
        return new Promise((resolve, reject) => {

            UserInfo(token).then(res => {
                const { code, data } = res.data

                if (code == 200) {
                    commit('SET_AVATAR', data.avatar)
                    commit('SET_USERNAME', data.username)
                    commit('SET_ROLES', data.roles)
                    commit('SET_MENUS', data.menus)
                    resolve(res.data)
                }

            }).catch(error => {
                reject(error)
            })
        })
    },

    /* 用户登出 */
    Logout({ commit }) {
        commit('SET_TOKEN', '')
        commit('SET_AVATAR', '')
        commit('SET_USERNAME', '')
        commit('SET_ROLES', '')
        commit('SET_MENUS', '')
        // const Routes = router.getRoutes()
        router.push('/login');
        /* 清楚动态路由 */
        // asyncRoutes.forEach((item) => {
        //     router.removeRoute(item.name)
        // })

        // console.log(Routes)
        // localStorage.removeItem('token')

    }




};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
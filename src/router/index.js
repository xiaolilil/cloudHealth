import { createRouter, createWebHistory } from 'vue-router'
// import routes from './routes.js'
import staticRoutes from './routes.js'
import { setToken,getToken } from '@/utils/setMsg.js'
import store from '@/store'




// router.beforeEach(async (to, from, next) => {
//     // console.log("beforeEach ENTER", from.path, "=>", to.path)
//     let token = localStorage.getItem('token')
//     const hasRoles = store.getters.roles && store.getters.roles.length > 0
  
//     if (to.path === '/login') {
//       next()
//     } else if (!token) {
//       next('/login')
//     } else if (!hasRoles) {
//       let { data } = await store.dispatch('user/GetInfo', token)
//       const accessedRoutes = await store.dispatch('asyncRouter/generateRoutes', data.roles)
//       accessedRoutes.forEach((item) => {
//         router.addRoute(item)
//       })
//       next(to.path)
//     } else {
//       next()
//     }
//   })
  



const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes
});



// router.beforeEach((to,from,next) => {
//   // console.log(to)
//   next()
//   if(store.state.user.roles === 'client'){
//     store.dispatch('permission/GET_MENU','test').then(() => {
//       console.log('routerrouterrouterrouter')
//       const all_router = store.state.permission.all_router
//       router.options.routes = all_router.routes
//       const async_router = store.state.permission.async_router
//       async_router.forEach(i => {
//         router.addRoute('home', i)
//       // 动态路由更新完成后执行
//       next({...to, replace: true})
//     })
//     console.log(router)
//   })
// }
// })

export default router
import {createStore} from 'vuex';
import menu from './modules/menu.js';
import user from './modules/user.js';
import permission from './modules/permission.js';


export default createStore({
    state:{
        isHome:true
    },
    mutations:{
        SET_ISHOME(state,data){
            state.isHome = data
        }
    },
    actions:{},
    getters:{},
    modules: {
        menu,
        user,
        permission
    }
});
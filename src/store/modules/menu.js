const state = {
    backstageMenus: [
        {
            authName: "用户管理",
            id: 123,
            order: 1,
            path: "users",
            name:'Users',
            meta:{title:'用户管理'},
            component:'',
            children: [],
          },
    ],
    expertMenus:[],
    clientMenus:[
              {
                authName: "体质资料管理",
                id: 123,
                order: 1,
                path: "physiquedata",
                name:'PhysiqueData',
                meta:{title:'体质资料管理'},
                component:'',
                children: [],
              },
              {
                authName: "订单管理",
                id: 124,
                order: 1,
                path: "order",
                name:'Order',
                meta:{title:'订单管理'},
                component:'',
                children: [],
              },
              {
                authName: "问题咨询管理",
                id: 125,
                order: 1,
                path: "issueconsult",
                name:'IssueConsult',
                meta:{title:'问题咨询管理'},
                component:'',
                children: [],
              }
    ]
};

const getters = {
    menus: state => {
        return state.menu;
    }
};

const mutations = {
    incrementCount(state) {
        state.count++;
    },
    decrementCount(state, payload) {
        state.count -= payload.amout;
    },
    getMenu(state, payload){
        state.menu = payload; 
    },
    
};

const actions = {
    incrementCountAsync({ commit }) {
        setTimeout(() => {
            commit('incrementCount');
        }, 2000);
    },
    decrementCountAsync({ commit }, payload) {
        setTimeout(() => {
            commit('decrementCount', payload);
        }, 1000);
    },
    // getMenu({ commit }, payload){
    //     console.log(commit)
    //     console.log(payload)
    //     setTimeout(() => {
    //         commit('updateMenu', payload);
    //     }, 1000);
    // }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
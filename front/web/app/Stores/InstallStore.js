'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        users:[
            {
                id: 0,
                name: "",
                family: "",
                national_id: "",
                mobile: "",
                role: 2,
                synced: false
            }
        ]
    },
    mutations: {
        SET_USERS(state, payload) {
            state.users = payload
        },
        ADD_USER(state, payload) {
            state.users.push( payload);
        }
    },
    getters: {
        users(state){
            return state.users;
        }
    }
})
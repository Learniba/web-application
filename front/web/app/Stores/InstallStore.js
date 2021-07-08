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
            },

        ],
        templateFiles:{}
    },
    mutations: {
        SET_USERS(state, payload) {
            state.users = payload;
        },
        ADD_USER(state, payload) {
            state.users.push(payload);
        },
        UPDATE_USER(state,payload){
            const item = state.users.find(item => item.id === payload.id);
            Object.assign(item, payload);
        },
        UPDATE_TEMPLATE_FILES(state,payload){
            state.templateFiles=payload;
        }
    },
    getters: {
        users(state){
            return state.users;
        },
        templateFiles(state){
            return state.templateFiles;
        }
    }
})
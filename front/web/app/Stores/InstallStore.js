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
        templateFiles:{},
        enable_next_button:false,
        count:0
    },
    mutations: {
        ENABLE_NEXT_BUTTON(state,status){
          state.enable_next_button=status;
        },
        SET_COUNT(state,count){
            state.count=count;
        },
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
        count(state){
            return state.count;
        },
        enable_next_button(state){
          return state.enable_next_button;
        },
        users(state){
            return state.users;
        },
        templateFiles(state){
            return state.templateFiles;
        }
    }
})
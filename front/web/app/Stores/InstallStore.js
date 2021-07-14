'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        classes: [],
        saved_classes:[],
        levels: [],
        orientations: [],
        users: [
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
        templateFiles: {},
        enable_next_button: false,
        count: 0
    },
    mutations: {
        SET_LEVELS(state, levels) {
            state.levels = levels;
        },


        SET_ORIENTATIONS(state, orientations) {
            state.orientations = orientations;
        },


        ADD_CLASS(state, classObject) {
            state.classes.push(classObject);
        },
        UPDATE_CLASS(state, newData) {
            const item = state.classes.find(item => item.id === newData.id);
            Object.assign(item, newData);
        },
        SET_CLASSES(state, classArray) {
            state.classes = classArray;
        },
        REMOVE_CLASS(state, classID) {
            const index = state.classes.findIndex(item => item.id === classID);
            state.classes.splice(index, 1);
        },
        REMOVE_ALL_CLASSES(state) {
            state.classes = [];
        },



         ADD_SAVED_CLASS(state, classObject) {
             state.saved_classes.push(classObject);
        },
        UPDATE_SAVED_CLASS(state, newData) {
            const item = state.saved_classes.find(item => item.id === newData.id);
            Object.assign(item, newData);
        },
        SET_SAVED_CLASSES(state, classArray) {
            classArray.forEach((value, index) => {
                let item = state.saved_classes.findIndex(item => item.id === value.id);

                if (item === -1) {

                    state.saved_classes.push(value);
                }
            })
        },
        REMOVE_SAVED_CLASS(state, classID) {
            const index = state.saved_classes.findIndex(item => item.id === classID);
            state.saved_classes.splice(index, 1);
        },
        REMOVE_ALL_SAVED_CLASSES(state) {
            state.saved_classes = [];
        },






        ENABLE_NEXT_BUTTON(state, status) {
            state.enable_next_button = status;
        },


        SET_COUNT(state, count) {
            state.count = count;
        },


        SET_USERS(state, payload) {
            state.users = payload;
        },
        ADD_USER(state, payload) {
            state.users.push(payload);
        },
        UPDATE_USER(state, payload) {
            const item = state.users.find(item => item.id === payload.id);
            Object.assign(item, payload);
        },


        UPDATE_TEMPLATE_FILES(state, payload) {
            state.templateFiles = payload;
        }
    },
    getters: {
        saved_classes(state){
          return state.saved_classes;
        },
        levels(state) {
            return state.levels;
        },
        orientations(state) {
            return state.orientations;
        },
        classes(state) {
            return state.classes
        },
        count(state) {
            return state.count;
        },
        enable_next_button(state) {
            return state.enable_next_button;
        },
        users(state) {
            return state.users;
        },
        templateFiles(state) {
            return state.templateFiles;
        }
    }
})
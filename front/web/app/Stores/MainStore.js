'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import DashboardLayout from "../Views/Layouts/DashboardLayout";
import LoadingLayout from "../Views/Layouts/LoadingLayout";
import WizardLayout from "../Views/Layouts/WizardLayout";
import AuthLayout from "../Views/Layouts/AuthLayout";

Vue.use(Vuex)
import app_defaults from "../app-defaults.json"

console.log(app_defaults);
export default new Vuex.Store({
    state: {
        layout: 'loading-layout',
        configs: app_defaults
    },
    mutations: {
        SET_LAYOUT(state, payload) {
            state.layout = payload
        },
        SET_CONFIGS(state, payload) {
            state.configs = payload;
        }
    },
    getters: {
        layout(state) {
            switch (state.layout) {
                case 'dashboard-layout':
                    return DashboardLayout;
                    break;
                case 'loading-layout':
                    return LoadingLayout;
                    break;
                case 'wizard-layout':
                    return WizardLayout;
                    break;
                case 'auth-layout':
                    return AuthLayout;
                    break;
            }

        },
        configs(state){
            return state.configs;
        }
    }
})
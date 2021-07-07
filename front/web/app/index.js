import Vue from "vue"

import Cookie from "vue-cookie"
import MainRouter from "./Routers/MainRouter";
import LayoutView from "./Views/Layouts/LayoutView";
import MainStore from "./Stores/MainStore";
import i18n from "./Helpers/I18N"
import regeneratorRuntime from "regenerator-runtime";
import RouterSolveClass from "./Helpers/RouterSolveClass";
// ECMAScript 2015
import FontAwesomeIcon from "./Helpers/FontAwesome5"

Vue.use(Cookie);
Vue.prototype.$RSolve = RouterSolveClass;

var VueApp = new Vue({
    el: "#vue-app",
    i18n:i18n,
    router: MainRouter,
    components: {LayoutView},
    template: '<LayoutView></LayoutView>',
    store: MainStore,
    beforeCreate() {
        this.$RSolve.vueApp = this;
        this.$RSolve.router = this.$router;
        this.$RSolve.routs.install();
    },
    created() {
        let app = this;
        setTimeout(() => {
            app.$store.commit('SET_LAYOUT', 'dashboard-layout')
        }, 4000)
    }
})
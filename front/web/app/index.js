import Vue from "vue"
import I18N from "vue-i18n"
import Cookie from "vue-cookie"
import MainRouter from "./Routers/MainRouter";
import LayoutView from "./Views/Layouts/LayoutView";
import MainStore from "./Stores/MainStore";
import regeneratorRuntime from "regenerator-runtime";
import RouterSolveClass from "./Helpers/RouterSolveClass";
// ECMAScript 2015

Vue.use(I18N);
Vue.use(Cookie);


var VueApp=new Vue({
    el:"#vue-app",
    router:MainRouter,
    store:MainStore,
    RSolve:RouterSolveClass,
    components: { LayoutView },
    template: '<LayoutView></LayoutView>',
    beforeCreate() {
        RouterSolveClass.vueApp=this;
        RouterSolveClass.router=this.$router;
        RouterSolveClass.routs.install();
    },
    created() {
        let app=this;
        setTimeout(()=>{
            app.$store.commit('SET_LAYOUT','dashboard-layout')
        },4000)
    }
})
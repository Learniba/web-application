import Vue from "vue"
import Vuex from "vuex"
import I18N from "vue-i18n"
import Cookie from "vue-cookie"
import MainRouter from "./Routers/MainRouter";
import LayoutView from "./Views/Layouts/LayoutView";
import MainStore from "./Stores/MainStore";


Vue.use(I18N);
Vue.use(Cookie);

console.log(MainStore);
var VueApp=new Vue({
    el:"#vue-app",
    router:MainRouter,
    store:MainStore,
    components: { LayoutView },
    template: '<LayoutView></LayoutView>',

})
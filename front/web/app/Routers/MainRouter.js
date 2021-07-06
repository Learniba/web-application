import Vue from "vue"
import VueRouter from "vue-router"



import IndexView from "../Views/IndexView";


Vue.use(VueRouter);
const routes=[
    { path: '/', component: IndexView ,name: 'IndexView'},
];

export default new VueRouter(
    {
        routes
    }
)
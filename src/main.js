import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons, NavPlugin, BPagination } from 'bootstrap-vue'
import 'es6-promise/auto'

import JwPagination from 'jw-vue-pagination';

Vue.component('jw-pagination', JwPagination);


Vue.use(NavPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuex)

Vue.use(VueRouter)
Vue.component('b-pagination', BPagination)

Vue.config.productionTip = false

import MyToDo from './components/MyToDo.vue'
import AddForm from './components/AddForm.vue'
import store from './store.js'

const router = new VueRouter({
  mode : 'history', // that is mean that we will use / to change the page not(#)
  routes: [
    {path: '/new', component: AddForm}, 
    {path: '/list', component: MyToDo , props: { whatToDisplay :"all"}}, 
    {path: '/done', component: MyToDo, props: { whatToDisplay :"done"}}, 
    {path: '/todo', component: MyToDo, props: { whatToDisplay :"todo"}}, 

    {path: '*', redirect: '/list'} // in case of tapping any thing else, it will be back to the /new page  
  ]
});

new Vue({
  el:'#app',
  store: store, 
  router,
  render: h => h(App),
}).$mount('#app')


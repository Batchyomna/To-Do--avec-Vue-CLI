import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue, BootstrapVueIcons, NavPlugin } from 'bootstrap-vue'


Vue.use(NavPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false

import MyToDo from './components/MyToDo.vue'
import AddForm from './components/AddForm.vue'

const router = new VueRouter({
  mode : 'history', // that is mean that we will use / to change the page not(#)
  routes: [
    {path: '/new', component: AddForm, name: "AddForm", alias: '/new'}, 
    {path: '/list', component: MyToDo , props: { whatToDisplay :"all"}, alias: '/list' }, 
    {path: '/done', component: MyToDo, props: { whatToDisplay :"done"},alias: '/done' }, 
    {path: '/todo', component: MyToDo, props: { whatToDisplay :"todo"}, alias: '/todo'}, 


  {path: '*', redirect: '/list', // in case of tapping any thing else, it will be back to the /new page
  }
  ]
  
})


new Vue({
  el:'#app',
  
  render: h => h(App),
 router,

}).$mount('#app')


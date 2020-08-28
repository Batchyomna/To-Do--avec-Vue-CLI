import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import myroutes from './myroutes'
import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  mode : 'history', // that is mean that we will use / to change the page not(#)
  routes: [
    {
    path: '/',
  component: require('./components/AddForm.vue')
  }, 
  {
    path: '*',
    redirect: '/',
  }
  ]
  
})


new Vue({
  el:'#app',
  
  render: h => h(App),
 router,

}).$mount('#app')


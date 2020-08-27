import Vue from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false


new Vue({
  el:'#app',
  
  render: h => h(App),
}).$mount('#app')


import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list:[]
      
    },
    mutations: {
        changeTheData(state, dataReceive) {
       state.list = dataReceive
      }
    },
    actions:{
        trigerMutation(context, dataReceive){
            context.commit('changeTheData', dataReceive)
        }
    }
  })
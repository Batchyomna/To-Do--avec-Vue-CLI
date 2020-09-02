import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list:[]
      
    },
    mutations: {
        changeTheData(state, dataReceived) {
            console.log(dataReceived);
           state.list = dataReceived
        },
        changeOnce(state,x){
           let myToDo = state.list.find(element => element.name === x);
           myToDo.todo = false;
        },
        deletElement(state, taskName){
            let index = state.list.indexOf(taskName);
            state.list.splice(index,1)
        },
        postElement (state, taskData){
            state.list.push(taskData)
        }

    },

    actions:{
        triggerMutation(context, dataReceived){
            console.log('actions....'+ dataReceived);
            context.commit('changeTheData', dataReceived)
        },
        trigerForOnce(context, x){
            context.commit('changeOnce', x)
        },
        trigerToDelete(context, taskName){
            context.commit('deletElement', taskName)
        },
        triggerToPost (context, taskData){
            context.commit('postElement', taskData)
        }
    },
    getters:{
        sepatrateTheData: (state) => (whatToDisplay) =>{
            if (whatToDisplay === "all") {
             return state.list;
            }else if (whatToDisplay === "done"){
             return state.list.filter((element) => element.todo == false);
            }else if (whatToDisplay === "todo"){
             return state.list.filter((element) => element.todo == true);
            }
        }
    }
})

export default store
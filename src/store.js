import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        list:[]
      
    },
    mutations: {
        changeTheData(state, dataReceived) {
           state.list = dataReceived
        },
        changeOnce(state,x){// x = an objet
           let myToDoindex = state.list.indexOf(x); 
           x.todo = !x.todo
           state.list.splice(myToDoindex, 1,x); // replace with 3 parameters
        },
        deletElement(state, task){
            let index = state.list.indexOf(task);           
            state.list.splice(index,1) // cut
            
        },
        postElement (state, taskData){
            state.list.push(taskData)
        }

    },

    actions:{
        triggerMutation(context, dataReceived){
            // console.log('actions....'+ dataReceived);
            context.commit('changeTheData', dataReceived)
        },
        triggerForOnce(context, x){
            context.commit('changeOnce', x)
        },
        triggerToDelete(context, taskName){
            
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
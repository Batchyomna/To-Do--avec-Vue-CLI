<template>
  <div id="app" class="jumbotron container">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<hello></hello>-->

    <MyJumbotron v-bind:yomna="list" @toggle3="theResulta" @passTheText="addNewTask"></MyJumbotron>
    

  </div>
</template>

<script>

import MyJumbotron from './components/MyJumbotron.vue'

//import Hello from './components/HelloWorld.vue'
export default {
  name: 'App',
  components :{
   // Hello,
     MyJumbotron , 
  },
  methods :{

    theResulta(myID){
      this.list[myID].todo = !this.list[myID].todo // 
    },

    addNewTask(task){
    var newTask ={
      id:this.list.length,
      name: task,
      todo: true
    }
    this.list.push(newTask)
    }
  
  },

  
  data (){
    return {
      list:[
        {id:0, name:"Ecrire le sujet", todo: true },
        {id:1, name:"Faire le sujet", todo: true },
        {id:2, name:"Vendre le sujet", todo: true },
        {id:3, name:"Partir en acances", todo: true },
      ]
    }
  },
 
 
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  font-size:100px;
}
#p1{
  font-size:30px;
}
#p2{
  font-size:20px;
}
input{
  margin-right: 5px;
}
 
</style>

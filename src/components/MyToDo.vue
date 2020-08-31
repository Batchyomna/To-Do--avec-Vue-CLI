<template>
  <ul>
    <li v-for="item in allMyList" :key="item.id">
      <Single v-bind:myelement="item" @toggle="refrecheThePage()"></Single>
    </li>
  </ul>
</template>

<script>
const axios = require("axios");

import Single from "./SingleTodo.vue";

export default {
  name: "MyToDo",
  components: { Single },
  data() {
    return {
      allMyList: [],
    };
  },
  props: ["whatToDisplay"],
  methods: {
  refrecheThePage: async function(task) {
    this.allMyList = await axios.get("http://localhost:3000/todo")
      console.log(task);
     
    },
    
    // theResulta(myID){
    //   this.allMyList[myID].allMyList = !this.allMyList[myID].allMyList // 
    // },
  },
  mounted() {
    //Axios de ton API
   axios.get("http://localhost:3000/todo").then(res => {
    
     if(this.whatToDisplay == "all"){ 
        this.allMyList = res.data 
      }else if(this.whatToDisplay == "done"){
       this.allMyList = res.data.filter(element=> element.todo == false )
      }else if(this.whatToDisplay =="todo"){
       this.allMyList = res.data.filter(element=> element.todo == true )
      } 
    }).catch(function (error) {
      console.log(error);
    })
    
  },
};
</script>

<style>
li {
  list-style: none;
}
.myinput {
  margin-right: 10px;
}
.done {
  text-decoration: line-through;
}
</style>
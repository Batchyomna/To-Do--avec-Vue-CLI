<template>
  <ul>
    <li v-for="item in todo" :key="item.id">
      <Single v-bind:myelement="item" ></Single>
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
      todo: [],
    };
  },
  props: ["whatToDisplay"],
  methods: {
    // passTheFlag(payload) {
    //   console.log(payload);
    //   this.$emit("toggle2", payload);
    // },
    
    // theResulta(myID){
    //   this.todo[myID].todo = !this.todo[myID].todo // 
    // },
  },
  mounted() {
    //Axios de ton API
   axios.get("http://localhost:3000/todo").then(res => {
     console.log(res);
     if(this.whatToDisplay == "all"){ 
        this.todo = res.data 
       }else if(this.whatToDisplay == "done"){
       this.todo = res.data.filter(element=> element.todo == false )
       }else if(this.whatToDisplay =="todo"){
       this.todo = res.data.filter(element=> element.todo == true )
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
<template>
 
  <div>
  <b-form @submit="addToDo">
    <label for="text">New Task</label>
    <b-input type="text" id="text" aria-describedby="ToDo Name"></b-input>
    <button @click="addToDo">
       <b-icon icon="plus-square"></b-icon>Add
    </button>
   </b-form>
</div>
</template>

<script>
const axios = require("axios");
export default {
  name: "AddForm",
  data: () => ({
    message: "",
  }),
  

  //   method: {
  //     addToDo() {
  //       var newTask = {
  //         name: this.message,
  //         id: this.myData.length,

  //         todo: true,
  //       };
  //       this.myData.push(newTask);
  //     },
  //   },

  //   methods : {
  //       addToDo(){
  //           this.$emit('myNewToDo', this.message)
  //       }
  //},
 
  methods: {
    addToDo: function() {
      let x = (new Date()).toString()
      //console.log(typeof x );
      //console.log(x);
      axios.get("http://localhost:3000/todo").then((res) => {// it is better to put post in the get beacuse we will sur that we won' have undefined      
       console.log(res);
       axios.post("http://localhost:3000/todo",{
          name: this.message,
          id: Date.now(), // it will add a different number every time
          createdAt: x,
          todo: true,
        }).then(function (res) {
          console.log(res);
          this.message = ""
        }).catch(function (error) {
          console.log(error);
        })   
      }).catch(function (error) {
        console.log(error);
      });        
    },
  },
};
</script>

<style>
label {
  margin-right: 5px;
}
</style>
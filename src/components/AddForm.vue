<template>
  <div>
    <label>New Task</label>
    <input v-model="message" placeholder="ToDo Name" type="text" @keydown.enter="addToDo" />
    <button @click="addToDo">
       <b-icon icon="plus-square"></b-icon>Add
    </button>
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
      let that = this 
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
          that.message = "";
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
<template>
  <div>
    <label>New Task</label>
    <input v-model="message" placeholder="ToDo Name" type="text" />
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
 
  method: {
    addToDo : function() {
      console.log(this.message);
      let myList = [];
      axios.get("http://localhost:3000/todo").then((res) => {
          myList.push(res.data);
        }).catch(function (error) {
          console.log(error);
        });
        console.log(myList);

      axios.post("http://localhost:3000/todo",{
          name: this.message,
          id: myList.length,
          ceatedAt: new Date(),
          todo: true,
        }).then(function (response) {
          console.log(response);
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
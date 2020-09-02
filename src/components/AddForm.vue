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
  methods: {
    addToDo: function() {
      let today = (new Date()).toString()
      let newTask ={
          name: this.message,
          id: Date.now(),
          createdAt: today,
          todo: true,
        }

       axios.post("http://localhost:3000/todo",newTask)
            .then(function (res) {
                this.$store.dispatch('triggerToPost',newTask) 
                
                console.log(res);
            }).catch(function (error) {
                console.log(error);
        });  
        this.message = "";     
    },
  },
};
</script>

<style>
label {
  margin-right: 5px;
}
</style>
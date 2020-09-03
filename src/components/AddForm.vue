<template>
   
    <b-form-group id="input-group-2" label-for="input-2" variant="info">
      <b-form-input
        id="input-2"
        v-model="message"
        required
        placeholder="Enter your Task"
        @keydown.enter="addToDo"
      ></b-form-input>
      <b-button variant="secondary" @click="addToDo">Submit</b-button>
    </b-form-group>
 
</template>

<script>
const axios = require("axios");
export default {
  name: "AddForm",
  data: () => ({
    message: "",
  }),
  methods: {
    addToDo: function () {
      if (this.message) {
        let today = new Date().toString();
        let newTask = {
          name: this.message,
          id: Date.now(),
          createdAt: today,
          todo: true,
        };
        let that = this
        axios
          .post("http://localhost:3000/todo", newTask)
          .then(function (res) {
            that.$store.dispatch("triggerToPost", newTask);
            console.log(res);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.message = "";
      }else{
        alert('You have to fill the champs first')
      }
    },
  },
};
</script>

<style>
label {
  margin-right: 5px;
}
</style>
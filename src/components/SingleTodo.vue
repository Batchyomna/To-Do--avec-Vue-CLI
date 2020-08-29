<template>
  <h5 v-if="myelement.todo" class="nonDone" v-on:click="changeToDo()">
    <b-icon icon="check2-circle"></b-icon>
    {{myelement.name}}
  </h5>

  <h5 v-else class="done" v-on:click="changeToDo">
    <b-icon icon="check-circle-fill"></b-icon>
    {{myelement.name}}
  </h5>
</template>

<script>

const axios = require("axios");

export default {
  name: "Single",
  props: ["myelement"],
  methods: {
    // sendFlag(){
    //   this.$emit('toggle', this.myelement.id )
    // }
  changeToDo(){
    axios
      .put(`http://localhost:3000/todo/{{this.myelement.name}}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
h5 {
  cursor: pointer;
}
</style>
<template>
<div>
  <h5 v-if="myelement.todo" class="nonDone" v-on:click="changeToDo()">
    <b-icon icon="check2-circle"></b-icon>
    {{myelement.name}}
     <b-icon icon="trash" class="orange" v-on:click="removeElem(myelement.name)"></b-icon>
  </h5>

  <h5 v-else class="done" v-on:click="changeToDo()">
    <b-icon icon="check-circle-fill"></b-icon>
    {{myelement.name}}
    <b-icon icon="trash" class="rouge" v-on:click="removeElem(myelement.name)"></b-icon>
  </h5>
  </div>
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
    changeToDo() {
      let x = this.myelement.name;
      let that = this // he will not understand this in function fleshed
      axios
        .put(`http://localhost:3000/todo/${x}`)
        .then(function (response) {
          that.$emit('reLoad', x); // now we are sur that we had changed the status of x
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    removeElem(x) {
      axios
        .delete(`http://localhost:3000/todo/${x}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
.done {
  text-decoration: line-through;
}
h5 {
  cursor: pointer;
}
.rouge {
  color: red;
}
.orange {
  color: orange;
}
</style>
<template>
<b-row class="justify-content-md-center"> 
  <h6 v-if="myelement.todo" class="nonDone" v-on:click="changeToDo()">
    <b-icon icon="check2-circle"></b-icon>
    {{myelement.name}}  
  </h6>
  <!--styleobj is a variable for give the required style to be assigned to the div. -->
  <h6 v-else class="done" v-on:click="changeToDo()" >
    <b-icon icon="check-circle-fill"></b-icon>
    {{myelement.name}} 
  </h6>
  <b-icon icon="trash" class="deletion" v-on:click="removeElem()"></b-icon>
</b-row> 
</template>

<script>

const axios = require("axios");
export default {
  name: "Single",
  props: ["myelement"],
  methods: {
    changeToDo() {
      let x = this.myelement.name;
      let that = this // he will not understand this in function fleshed
      axios
        .put(`http://localhost:3000/todo/${x}`)
        .then(function (response) {
          that.$emit('reLoad', x); // now we are sur that we had changed the status of x
         this.$store.dispatch('trigerForOnce',x);
         console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    removeElem() {
      let x = this.myelement.name;
      axios
        .delete(`http://localhost:3000/todo/${x}`)
        .then(function (response) {
          this.$store.dispatch('trigerToDelete',x)
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    changeColor : function() {
        this.styleobj.color = "green";
    }
  },
};
</script>

<style>
.done{
  text-decoration: line-through;
}
h6{
  cursor: pointer;
  text-align: center;  
}
.deletion{
  cursor: pointer;
  color: red;
}
#myDiv{
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
 border: 1px solid gray;
 border-radius: 20px;
}
</style>
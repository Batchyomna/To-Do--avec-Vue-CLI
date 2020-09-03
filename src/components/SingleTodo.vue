<template>
<b-row class="justify-content-md-center"> 
  <h6 v-if="myelement.todo" class="nonDone" v-on:click="changeToDo()">
    <b-icon icon="check2-circle"></b-icon>
    {{myelement.name}}  
  </h6>
  <!--styleobj is a variable for give the required style to be assigned to the div. -->
  <h6 v-else class="done" v-on:click="changeToDo()" >
    <b-icon icon="check-circle-fill"></b-icon><i>
    {{myelement.name}} </i>
  </h6>
  <b-icon icon="trash" class="deletion" v-on:click="removeElem()" id="pubelle"></b-icon>
</b-row> 
</template>

<script>

const axios = require("axios");
export default {
  name: "Single",
  props: ["myelement"],
  data() {
    return {
     hover: false,
    } 
  },
  methods: {
    changeToDo() {
      let x = this.myelement.name;
      let that = this
      axios
        .put(`http://localhost:3000/todo/${x}`)
        .then(function (response) {
         that.$store.dispatch('trigerForOnce',x);
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

<style scoped>

.done{
  text-decoration: line-through;
  color: rosybrown;
  
}
h6{
  cursor: pointer;
  text-align: center;  
  font-size:20px ;
}
h6:hover {
  color:#E6AE76;
  font-size: 25px;
}
#pubelle:hover{
  cursor: pointer;
  color: red;
  width: 100px;
}
#myDiv{
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
 border: 1px solid gray;
 border-radius: 20px;
}

</style>
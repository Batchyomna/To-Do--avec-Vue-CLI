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
  <div id="deletIcon">
     <b-icon icon="trash" class="deletion" v-on:click="removeElem()"></b-icon>
  </div>
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
         that.$store.dispatch('triggerForOnce',that.myelement);// marche parfaitement
         console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    removeElem() {
      let x = this.myelement.name;
      let that = this
      axios
        .delete(`http://localhost:3000/todo/${x}`)
        .then(function (response) {
          that.$store.dispatch('triggerToDelete',that.myelement)
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
#deletIcon:hover{
  cursor: pointer;
  color: red;
  width: 100px;
}

#deletIcon{
  
  margin-left: 5%;
}

</style>
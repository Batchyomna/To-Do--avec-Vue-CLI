<template>

  
 <ul>   
   <li v-for="item in todo" :key="item.id">
       <Single  @toggle="passTheFlag" v-bind:myelement="item"></Single> 
    </li>
  </ul>


</template>

<script>
import Single from './SingleTodo.vue'
 export default {
  name: 'MyToDo',
  components :{Single},
  props :['todo'],
  methods:{
    passTheFlag(payload){
      console.log(payload);
      this.$emit('toggle2', payload)

    }
  }
 
}
</script>

<style>
li{
   list-style: none;
 } 
.myinput{
  margin-right: 10px;
}
.done{
  text-decoration: line-through;
}
</style>
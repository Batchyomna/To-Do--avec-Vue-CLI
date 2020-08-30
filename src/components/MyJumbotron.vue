<template>
  <div>
    
    <h1>Todo List</h1>
    <p id="p1">
      New Features we will have to do for this project
    </p>
    <hr>
    <p id="p2">
    Easy to use, we created this web app just for you!
    </p>
    <Sentence v-bind:data="yomna"></Sentence> 
  
    <hr>
    <router-view :key="$route.path"></router-view><!-- here with key proerty we force Vue to create a new instance of the component-->

    <!-- <MyToDo v-bind:todo="yomna" @toggle2="passAgainFlag"></MyToDo>-->
    <!-- <AddForm @myNewToDo="passTheTask"></AddForm>  -->
  </div>
</template>

<script>

// import MyToDo from './MyToDo.vue'
 //import AddForm from './AddForm.vue'
import Sentence from './Sentence.vue'


 export default {
  name: 'MyJumbotron',
  // components :{MyToDo, AddForm, Sentence},
  props :['yomna'],
  components:{
    
    Sentence,
  },
  // method:{
  //   passAgainFlag(data){
  //     this.$emit('toggle3', data)
  //   },
    // passTheTask(text){
    //   console.log(text);
      
    //   this.$emit('passTheText', text)

    // }
  //}
}
</script>

<style>
li{
   list-style: none;
 } 
</style>
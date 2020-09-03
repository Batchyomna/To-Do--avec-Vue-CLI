<template>
  <b-card-group deck>
     <b-card header="Card Todo List">
    
    <p id="p1">
      New Features we will have to do for this project
    </p>
    <hr>
    <p id="p2">
    Easy to use, we created this web app just for you!
    </p>
    <!-- <Sentence v-bind:data="yomna"></Sentence>  -->
  
    <hr>
    <router-view :key="$route.path"></router-view>

  </b-card>
  </b-card-group>
</template>

<script>
//import Sentence from './Sentence.vue'
 export default {
  name: 'MyJumbotron',
  // components :{ Sentence},
  props :['yomna'],
  components:{
    
    //Sentence,
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
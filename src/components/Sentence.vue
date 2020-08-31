<template>
  <div>  
    <p  v-if="counterTask == 0" id="rouge">
      <b-icon icon="emoji-angry"></b-icon> It's time to start working you have {{data.length}} task to do!! <b-icon icon="emoji-angry"></b-icon>
    </p>
    
    <p v-else-if="counterTask == data.length" id="greenFonce">
      <b-icon icon="emoji-sunglasses"></b-icon> Congratulation!!You finished all the {{data.length}} <b-icon icon="emoji-sunglasses"></b-icon>
    </p>
    <p v-else-if="counterTask > calculHalf" id="green">
      <b-icon icon="emoji-laughing"></b-icon> Good!! you made half or more {{counterTask}}/{{data.length}} tasks<b-icon icon="emoji-laughing"></b-icon>
    </p>
     <p v-else id="orange">
      <b-icon icon="emoji-smile"></b-icon> Continue that way and you will finish soon, still have {{data.length -counterTask}}/{{data.length}} tasks<b-icon icon="emoji-smile"></b-icon>
    </p>  
  </div>
</template>

<script>

 export default {
  name: 'Sentence',

  props :['data'],
    computed : {
        counterTask : function(){
            var x = 0;
            this.data.forEach(element => {
              if(element.todo === false){
                   x++;
                }
            });
            console.log("it is the value of task done " + x);
            return x
        },
        calculHalf:function(){ 
          var y = this.data.length*0.5;
          return y
        }
    }

 
}

</script>

<style>
li{
   list-style: none;
 } 
 #rouge{
     color:red
 }
 #green{
     color: springgreen;
 }
 #greenFonce{
     color: rgb(13, 63, 13);
 }
 #orange{
     color: orange;
 }
</style>
<template>

 <div>
 
  <label for=""> New Task</label>
   <input v-model="message" placeholder="ToDo Name" type="text">
   
   <button @click="addToDo"> <b-icon icon="plus-square"></b-icon> Add </button>

 </div>  
     
   
 
</template>

<script>


export default {
    name: 'AddForm',
    data: () => ({
            message:'',  
        }),
    methods : {
        addToDo(){
            this.$emit('myNewToDo', this.message)
        }
    }
  
      

}
    
 

 

</script>

<style>
label{
    margin-right: 5px;
}
</style>
<template>

 <div>
 <nav>
     <router-link to='/new'> New</router-link>
 </nav>

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

</style>
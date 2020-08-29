<template>
  
<div>
    
 <b-nav>
     <router-link to='/new'> New</router-link>
      <router-link to='/list'> List</router-link>
       <router-link to='/done'> done</router-link>
      <router-link to='/todo'> todo</router-link>

  </b-nav>
 </div>  
   
</template>

<script>
export default {
    name: 'MyHeader',
    props:['whatToDisplay']
}

</script>

<style>

</style>
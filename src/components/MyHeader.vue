<template>
  
<div>
    
 <b-nav>
      <b-link to="/new">New</b-link>
       <b-link to="/list">List</b-link>
        <b-link to="/todo">todo</b-link>
         <b-link to="/done">done</b-link>

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
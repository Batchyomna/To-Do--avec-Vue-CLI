<template>
  
<!-- <div>
    
 <b-nav id="nav">
      <b-link to="/new">New</b-link>
       <b-link to="/list">List</b-link>
        <b-link to="/todo">todo</b-link>
         <b-link to="/done">done</b-link>

  </b-nav>
 </div>   -->
 <div>
     <b-navbar toggleable="lg" type="dark" variant="dark">
  <!-- <b-nav tabs fill class="navbar-dark"> -->
    <b-nav-item to="/list">List</b-nav-item>
    <b-nav-item to="/todo">todo</b-nav-item>
    <b-nav-item to="/done">done</b-nav-item>
    <b-nav-item to="/new">New</b-nav-item>
  </b-navbar>
</div>
   
</template>

<script>
export default {
    name: 'MyHeader',
    props:['whatToDisplay']
}

</script>

<style>
#nav{
    background: green;
}
</style>
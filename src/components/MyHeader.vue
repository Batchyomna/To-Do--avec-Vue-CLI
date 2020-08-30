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
    <b-navbar toggleable="lg" type="dark" variant="dark" id="nav" >
       
             <b-nav-item to="/list" class="fontLink">List</b-nav-item> 
            <b-nav-item to="/todo">ToDo</b-nav-item>
            <b-nav-item to="/done">Done</b-nav-item>
            <b-nav-item to="/new">New</b-nav-item>
    </b-navbar>
</div> 
<!-- <div>
   
        <nav>
            <router-link to="/list">List</router-link>
            <router-link to="/todo">ToDo</router-link>
            <router-link to="/done">Done</router-link>
            <router-link to="/new">New</router-link>
    </nav>
</div> -->
   
</template>

<script>
export default {
    name: 'MyHeader',
    props:['whatToDisplay']
}

</script>

<style>
#nav{
   color: honeydew !important;
}

</style>
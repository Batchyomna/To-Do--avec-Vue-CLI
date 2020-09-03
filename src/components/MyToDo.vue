<template>
  <div id="myList">
    <b-list-group v-for="item in loadPage" :key="item.id" variant="warning">
      <b-list-group-item button variant="warning"><Single v-bind:myelement="item"></Single></b-list-group-item>
      <!-- {{ names }} -->
      </b-list-group>
    <div class="mt-3">
     <b-pagination v-model="currentPage" pills :total-rows="rows" align="center"  variant="warning"></b-pagination>
    </div>
  </div>
</template>

<script>


import Single from "./SingleTodo.vue";

export default {
  name: "MyToDo",
  components: { Single },
  props: ["whatToDisplay"],
  data() {
    return {
     
      rows:this.loadPage*0.1,
      currentPage: 1,
    }
  },
  computed: {
    loadPage() {
      return this.$store.getters.sepatrateTheData(this.whatToDisplay) 
    },
    // names() {
    //   return this.$store.getters.sepatrateTheData(this.whatToDisplay).map(elem => elem.name).join(" ")

    // }
  },

}
</script>

<style>



</style>
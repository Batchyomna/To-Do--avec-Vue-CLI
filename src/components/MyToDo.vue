<template>
  <div>
    <ul>
      <li v-for="item in loadPage" :key="item.id">
        <Single v-bind:myelement="item"></Single>
      </li>
    </ul>
   <!-- {{ names }} -->
    <div class="mt-3">
      <b-pagination v-model="currentPage" pills :total-rows="rows" align="center"></b-pagination>
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
     
      rows: (this.allMyList)*0.1,
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
li {
  list-style: none;
}
.myinput {
  margin-right: 10px;
}
.done {
  text-decoration: line-through;
}
</style>
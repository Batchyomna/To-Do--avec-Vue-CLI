<template>
  <div id="myList">
    <b-list-group v-for="item in pageOfItems" :key="item.id" variant="warning">
      <b-list-group-item button variant="warning">
        <Single v-bind:myelement="item"></Single>
      </b-list-group-item>
      <!-- {{ names }} -->
    </b-list-group>
    <div class="card-footer pb-0 pt-3">
      <jw-pagination :items="loadPage" @changePage="onChangePage"></jw-pagination>
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
      pageOfItems: []
    };
  },
  computed: {
    loadPage() {
      return this.$store.getters.sepatrateTheData(this.whatToDisplay);
    },
    // names() {
    //   return this.$store.getters.sepatrateTheData(this.whatToDisplay).map(elem => elem.name).join(" ")

    // }
  },
  methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        }
    }
};
</script>

<style>
</style>
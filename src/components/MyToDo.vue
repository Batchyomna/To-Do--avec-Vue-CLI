<template>
  <div>
    <ul>

      <li v-for="item in allMyList" :key="item.id">
        <Single v-bind:myelement="item" @reLoad="refreshPage"></Single>
      </li>
    </ul>
    <div class="mt-3">
      <b-pagination v-model="currentPage" pills :total-rows="rows" align="center" ></b-pagination>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

import Single from "./SingleTodo.vue";

export default {
  name: "MyToDo",
  components: { Single },
  data() {
    return {
      allMyList: [],
      rows: (this.allMyList)*0.1,
      currentPage: 1,
    };
  },
  props: ["whatToDisplay"],
  //methods: {
  // theResulta(myID){
  //   this.allMyList[myID].allMyList = !this.allMyList[myID].allMyList //
  // },
  //  refreshPage: function (flag) {
  //   if (flag) {
  //     this.$forceUpdate();
  //   }
  // },
  //},

  mounted() {
    // it will be executed just when we refresh the page

    this.init(); // call the function init who centent the method get  and refill the data
  },
  methods: {
    init() {
      axios
        .get("http://localhost:3000/todo")
        .then((res) => {
          if (this.whatToDisplay == "all") {
            this.allMyList = res.data;
          } else if (this.whatToDisplay == "done") {
            this.allMyList = res.data.filter(
              (element) => element.todo == false
            );
          } else if (this.whatToDisplay == "todo") {
            this.allMyList = res.data.filter((element) => element.todo == true);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    refreshPage: function () {
      this.init();
    },
  },
};
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
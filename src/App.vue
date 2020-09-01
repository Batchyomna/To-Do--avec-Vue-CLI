<template>
  <div>
    <MyHeader></MyHeader>
    <div id="app" class="jumbotron container">
      <MyJumbotron v-bind:yomna="list"></MyJumbotron>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyJumbotron from "./components/MyJumbotron.vue";

export default {
  name: "App",
  components: {
    MyJumbotron,
    MyHeader,
  },
  method: {
     init() {
      axios
        .get("http://localhost:3000/todo")
        .then((res) => {
          // if (this.whatToDisplay == "all") {
          //   this.allMyList = res.data;
          // } else if (this.whatToDisplay == "done") {
          //   this.allMyList = res.data.filter((element) => element.todo == false);
          // } else if (this.whatToDisplay == "todo") {
          //   this.allMyList = res.data.filter((element) => element.todo == true);
          // }
          store.dispatch('trigerMutation', res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
   mounted() {
     this.init()
   },

  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 100px;
}
#p1 {
  font-size: 30px;
}
#p2 {
  font-size: 20px;
}
input {
  margin-right: 5px;
}
</style>

<template>
  <div>
    <MyHeader></MyHeader>
    <div id="app" class="jumbotron container">
      <MyJumbotron></MyJumbotron>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
import MyHeader from "./components/MyHeader.vue";
import MyJumbotron from "./components/MyJumbotron.vue";

export default {
  name: "App",
  components: {
    MyJumbotron,
    MyHeader,
  },
  methods: {
     init() {
      axios
        .get("http://localhost:3000/todo")
        .then((res) => {
         this.$store.dispatch('triggerMutation', res.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
   mounted() {
     this.init()
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

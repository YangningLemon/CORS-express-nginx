<template>
  <div id="app">
    <button @click="requestLocalHost97">请求主机localhost:97</button>
    <button @click="requestLocalHost98">请求主机localhost:98</button>
  </div>
</template>

<script>
import axios from "axios";

//跨域的请求URL
// const URL97 = "http://localhost:97/moxi";
// const URL98 = "http://localhost:98/moxi";
//正常的请求URL
const URL97 = "apis/moxi";
const URL98 = "apis2/moxi";

export default {
  name: "App",
  components: {},
  methods: {
    requestLocalHost97() {
      axios.get(URL97).then((res) => {
        console.log(res);
      });
    },
    requestLocalHost98() {
      axios.get(URL98).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
body {
  background-color: rgba(255, 255, 255, 0.3);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

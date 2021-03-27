<template>
  <div id="app">
    <Navbar />
    <Home />
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Footer
  },
  data() {
    return {
      msg: "Welcome to Vuejs"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

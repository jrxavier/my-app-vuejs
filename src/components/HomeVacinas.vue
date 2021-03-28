<template>
  <div id="home-vacinas">
    <Navbar />
    <h1>{{msg}}</h1>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home-vacinas",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      msg: "Página Home das Vacinas"
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

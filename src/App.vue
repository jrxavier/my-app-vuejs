<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */

import Navbar from './views/Navbar';
import Footer from './views/Footer'

export default {
  name: "App",
  components: {
    Navbar,
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

<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
/* eslint-disable */

import Navbar from './components/Navbar';
import Footer from './components/Footer'

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

<template>
  <div v-if="vacina">
    <h1>Vacina Edit Route</h1>
    <h2>{{ vacina.name }}</h2>
    <h2>Descrição: {{ vacina.descricao }}</h2>
  </div>
  <div v-else>
    <h1>Carregando vacina ...</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["id"],
  data() {
    return {
      vacina: null
    };
  },
  mounted() {
    fetch("http://localhost:3000/vacinas/" + this.id)
      .then(res => res.json())
      .then(data => (this.vacina = data))
      .catch(err => console.log(err));
  }
  // data () {
  //   return {
  //   }
  // }
};
</script>

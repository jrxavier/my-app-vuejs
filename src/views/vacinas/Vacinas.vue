<template>
    <div>
        <h1>Lista de Vacinas</h1>
        <div v-for="vacina in vacinas" v-bind:key="vacina.id">
          <router-link :to="{name: 'VacinasDetails', params: {id:vacina.id}}">
            <h2>{{vacina.name}}</h2>
          </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      vacinas: []
    }
  },
  mounted () {
    fetch('http://localhost:3000/vacinas')
      .then(res => res.json())
      .then((data) => (this.vacinas = data))
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>

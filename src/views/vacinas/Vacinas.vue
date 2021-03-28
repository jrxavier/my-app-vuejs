<template>
    <div v-if="vacinas.length">
        <h1>Lista de Vacinas</h1>
        <div v-for="vacina in vacinas" v-bind:key="vacina.id">
          <router-link :to="{name: 'VacinasDetails', params: {id:vacina.id}}">
            <SingleVacina :vacina="vacina" />
          </router-link>
        </div>
    </div>
    <div v-else>
      <h1>Carregando a lista de vacinas ...</h1>
  </div>
</template>

<script>
import SingleVacina from '../../components/SingleVacina'

export default {
  components: { SingleVacina },
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

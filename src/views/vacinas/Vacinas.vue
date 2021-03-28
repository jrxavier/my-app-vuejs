<template>
    <div>
        <h1>Lista de Vacinas</h1>
        <div v-for="vacina in vacinas" v-bind:key="vacina.id">
            <h2>{{vacina.name}}</h2>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      vacinas: [
        {name: 'Vacina 01', id: 1, detalhes: 'loren 0001'},
        {name: 'Vacina 02', id: 2, detalhes: 'loren 0001'},
        {name: 'Vacina 03', id: 3, detalhes: 'loren 0001'},
        {name: 'Vacina 04', id: 4, detalhes: 'loren 0001'}]
    }
  }
}
</script>

<style>

</style>

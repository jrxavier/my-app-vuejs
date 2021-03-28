<template>
  <div>
  <h1>Vacina Edit Route</h1>
  <h2>O id da vacina é {{ id }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>

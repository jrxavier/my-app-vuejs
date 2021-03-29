<template>
  <b-card
    title="Vacina"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="vacina"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ vacina.name }}
    </b-card-text>

    <b-button href="#" variant="primary">Vacinar</b-button>
    <b-button href="#" variant="primary">Detalhes</b-button>
  </b-card>
</template>

<script>
/* eslint-disable */
export default {
  props: ["vacina"]
};
</script>

<style></style>

<template>
  <b-card
    title="Vacina"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo beatae neque
      explicabo voluptas ipsam nostrum soluta atque mollitia cupiditate in!
    </b-card-text>

    <b-button @click="clickVacinar" variant="primary">Vacinar</b-button>
    <b-button @click="clickDetalhes" variant="primary">Detalhes</b-button>
  </b-card>
</template>

<script>
/* eslint-disable */
export default {
  name: "SingleVacina",
  props: ["vacina"],
  methods: {
    clickVacinar() {
      console.log("Cliquei no botao Vacinar");
    },
    clickDetalhes() {
      console.log("Cliquei no botão Detalhes");
    }
  }
};
</script>

<style></style>

<template>
  <v-container class=" overflow-auto fixed">
    <dia />
    <h1>Recomedações</h1>
    <carousel />
  </v-container>
</template>

<script>
import dia from '../components/dia.vue'
import carousel from '../components/carousel.vue'

export default {
  components: {
    dia,
    carousel
  },
  layout: 'complex'
}
</script>

<style>

</style>

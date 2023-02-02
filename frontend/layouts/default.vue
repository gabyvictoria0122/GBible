<template>
  <v-app id="inspire">
    <!-- <toolbar/> -->
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  data: () => ({
  }),
  computed: {
    snack () {
      return this.$store.getters.snack
    }
  }
}
</script>

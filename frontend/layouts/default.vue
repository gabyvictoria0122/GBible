<template>
  <v-app id="inspire">
    <!-- <toolbar/> -->
    <v-main>
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-main>
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

<style>
</style>

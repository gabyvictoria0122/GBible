<template>
  <v-app>
    <toolbar />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <le-footer />
  </v-app>
</template>

<script>
import toolbar from '~/components/toolbar.vue'
import footer from '~/components/footer.vue'
export default {
  components: {
    toolbar,
    leFooter: footer
  },
  data: () => ({
  })
}
</script>

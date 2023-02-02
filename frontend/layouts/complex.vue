<template>
  <v-app>
    <toolbar />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
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

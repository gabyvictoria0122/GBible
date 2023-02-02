<template>
  <v-card>
    <v-tabs
      dark
      v-model="tab"
      color="purple darken-1"
      centered
      icons-and-text
    >
      <v-tabs-slider />

      <v-tab
        href="#tab-1"
        :to="{name: 'start'}"
      >
        Início
        <v-icon>mdi-church</v-icon>
      </v-tab>

      <v-tab
        href="#tab-2"
        :to="{name: 'bible'}"
      >
        Bíblia
        <v-icon>mdi-book-cross</v-icon>
      </v-tab>

      <v-tab
        href="#tab-3"
        :to="{name: 'record'}"
      >
        Registros
        <v-icon>mdi-sticker-check</v-icon>
      </v-tab>
      <v-tab
        href="#tab-4"
        :to="{name: 'more'}"
      >
        Mais
        <v-icon>mdi-menu</v-icon>
      </v-tab>
    </v-tabs>
</v-card>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    icons: [
      'mdi-church',
      'mdi-book-cross',
      'mdi-sticker-check',
      'mdi-menu'
    ]
  })
}
</script>
<style>
body, html {height:100%;}
</style>

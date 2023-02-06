
<template>
  <!-- botão de voltar, referencias, historico
  // pesquisar
jsdjsdn
  // abas: livros, capitulos, versiculos
  // botão de certo (vai para o primeiro capitulo, se clica no livro ou primeiro versiculo se clica no capitulo) -->
  <div>
    <v-card>
      <v-tabs
        dark
        v-model="tab"
        fixed-tabs
        color="purple darken-1"
        text
      >
        <v-tabs-slider />
        <v-tab
          @click="books_bible"
        >
          LIVROS
        </v-tab>

        <v-tab
          href="#tab-2"
          :to="{name: 'bible'}"
        >
          CAPÍTULOS
        </v-tab>

        <v-tab
          href="#tab-3"
          :to="{name: 'record'}"
        >
          VERSÍCULOS
        </v-tab>
      </v-tabs>
    </v-card>
    <div v-if="livros">
      <!-- pesquisar e chamar livros -->
      <h2>LIVROSSS</h2>
    </div>
    <div v-else-if="capitulos">
      <h2>CAPITULOS</h2>
    </div>
    <div v-else>
      <h2>VERSICULOS</h2>
    </div>
  </div>
</template>
<script>
import api from '~api'

export default {
  data: () => ({
    livros: true,
    capitulos: false,
    versiculos: false,
    list_books: []
  }),
  methods: {
    // eslint-disable-next-line require-await
    async books_bible () {
      debugger
      this.livros = true
      const data = await api.list_books()
      this.list_books = data
    }
  }
}
</script>

<style>

</style>

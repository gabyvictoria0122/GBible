
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
        fixed-tabs
        color="purple darken-1"
        text
      >
        <v-tabs-slider />
        <v-tab
          href="#tab-5"
          @click=" livros = true; capitulos = false; versiculos = false"
        >
          LIVROS
        </v-tab>

        <v-tab
          href="#tab-6"
          @click=" livros = false; capitulos = true; versiculos = false"
        >
          CAPÍTULOS
        </v-tab>

        <v-tab
          href="#tab-7"
          @click=" livros = false; capitulos = false; versiculos = true"
        >
          VERSÍCULOS
        </v-tab>
      </v-tabs>
    </v-card>
    <div v-if="versiculos">
      <!-- pesquisar e chamar livros -->
      <h2>VERSICULOS</h2>
    </div>
    <div v-if="capitulos">
      <h2>CAPITULOS</h2>
    </div>
    <div v-if="livros">
      <v-card
        class="mx-auto"
        tile
      >
        <v-list rounded>
          <v-list-item-group
            v-model="selectedBook"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in listar_books"
              :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>
<script>
import api from '~api'

export default {
  data: () => ({
    livros: false,
    capitulos: false,
    versiculos: false,
    selectedBook: null,
    listar_books: []
  }),
  mounted () {
    this.livros = true
    api.list_books().then(result => {
      this.listar_books = result.livros
    })
  }
}
</script>

<style>

</style>

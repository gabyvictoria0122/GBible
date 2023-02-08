
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
          :active-class="livros"
          @click=" livros = true; capitulos = false; versiculos = false"
        >
          LIVROS
        </v-tab>

        <v-tab
          href="#tab-6"
          :active-class="capitulos"
          @click=" livros = false; capitulos = true; versiculos = false"
        >
          CAPÍTULOS
        </v-tab>

        <v-tab
          href="#tab-7"
          active-class
          @click=" livros = false; capitulos = false; versiculos = true"
        >
          VERSÍCULOS
        </v-tab>
      </v-tabs>
    </v-card>

    <div v-if="livros">
      <a href="#tab-7">teste</a>
      <v-responsive
        max-width="400"
        class="mx-auto mb-4"
      >
        <v-text-field
          color="purple darken-1"
          v-model="benched"
          :items="listar_livros"
          :loading="isLoading"
          :search-input.sync="search"
          chips
          clearable
          hide-selected
          item-text="name"
          item-value="id"
          label="Search for a book..."
          prepend-icon="mdi-magnify"
          single-line
        />
      </v-responsive>

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
              v-for="(item, i) in listar_livros"
              :key="i"
              @click=" livros = false; capitulos = true; versiculos = false"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div class="py-10 px-6" v-if="capitulos">
      <v-row justify="space-around">
        <v-btn
          class="ma-2"
          v-model="versiculo"
          v-for="(cap, i) in listar_livros[selectedBook].chapters"
          :key="i"
          fab
          icon
          outlined
          @click="infoLivro(cap)"
        >
          {{ cap }}
        </v-btn>
      </v-row>
    </div>
    <div class="py-10 px-6" v-if="versiculos">
      <!-- pesquisar e chamar livros -->
      <v-row justify="space-around">
        <v-btn
          class="ma-2"
          v-model="versiculo"
          v-for="(ver, i) in listar_capitulos[0]?.chapter.verses"
          :key="i"
          fab
          icon
          outlined
          @click=" conteudo = true; versiculos = false"
        >
          {{ ver }}
        </v-btn>
      </v-row>
      {{ versiculo }}
    </div>
    <div v-if="conteudo">
      <h1>CONTEUDO</h1>
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
    conteudo: false,
    selectedBook: null,
    chapters: null,
    isLoading: false,
    search: null,
    livro: null,
    versiculo: null,
    benched: null,
    listar_livros: {},
    listar_capitulos: []
  }),
  mounted () {
    this.livros = true
    api.list_books().then(result => {
      this.listar_livros = result.livros
    })
  },
  methods: {
    infoLivro (abbrev) {
      this.livros = false
      this.capitulos = false
      this.versiculos = true
      api.list_books().then(result => {
        this.listar_capitulos = result.livrosInfo
      })
      console.log('esse é o livro', this.livro)
    }
  }
}
</script>

<style>

</style>

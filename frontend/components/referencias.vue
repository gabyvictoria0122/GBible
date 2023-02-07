
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
      <v-btn
        v-for="(cap, i) in chapters"
        :key="i"
        fab
        icon
        outlined
      >
        {{ cap }}
      </v-btn>
    </div>
    <div v-if="livros">
      <v-responsive
        max-width="400"
        class="mx-auto mb-4"
      >
        <v-text-field
          color="purple darken-1"
          v-model="benched"
          :items="listar_books"
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
        elevation="16"
        max-width="400"
        class="mx-auto"
      >
        <v-virtual-scroll
          :bench="benched"
          :items="listar_books"
          height="300"
          item-height="64"
        >
          <template v-slot:default="{ item }">
            <v-list-item :key="item" @click="livros = false; capitulos = true; versiculos = false">
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider />
          </template>
        </v-virtual-scroll>
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
    chapters: null,
    isLoading: false,
    search: null,
    benched: 0,
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

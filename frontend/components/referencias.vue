
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
        v-model="selectedTab"
        color="purple darken-1"
        text
      >
        <v-tab
          href="#livros"
          @click=" livros = true; capitulos = false; versiculos = false"
        >
          LIVROS
        </v-tab>

        <v-tab
          href="#capitulos"
          @click=" livros = false; capitulos = true; versiculos = false"
        >
          CAPÍTULOS
        </v-tab>

        <v-tab
          href="#versiculos"
          active-class
          @click=" livros = false; capitulos = false; versiculos = true"
        >
          VERSÍCULOS
        </v-tab>
        <v-tab-item id="livros" key="livros">
          <div
            class=" overflow-auto fixed"
          >
            <v-responsive
              max-width="400"
              class="mx-auto mb-4"
            >
              <v-text-field
                color="purple darken-1"
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
                    @click="nextTab('livros')"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </div>
        </v-tab-item>
        <v-tab-item id="capitulos" key="capitulos">
          <div class="overflow-auto py-6 px-6 fixed">
            <v-row justify="space-around">
              <v-btn
                class="ma-2"
                v-model="versiculo"
                v-for="(cap, i) in listar_livros[selectedBook]?.chapters"
                :key="i"
                fab
                icon
                outlined
                @click="infoLivro(selectedBook, cap); nextTab ('capitulos')"
              >
                {{ cap }}
              </v-btn>
            </v-row>
          </div>
        </v-tab-item>
        <v-tab-item id="versiculos" key="versiculos">
          <div class="py-10 px-6">
            <!-- pesquisar e chamar livros -->
            <v-row justify="space-around">
              <v-btn
                class="ma-2"
                v-model="versiculo"
                v-for="(ver, i) in listar_capitulos.chapter.verses"
                :key="i"
                fab
                icon
                outlined
                @click="lerConteudo(ver, capitulo)"
              >
                {{ ver }}
              </v-btn>
            </v-row>
            <!-- {{ versiculo }} -->
          </div>
        </v-tab-item>
      </v-tabs>
      <div v-if="conteudo">
        <router-link to="/conteudo">conteudoCap</router-link>
      </div>
    </v-card>
  </div>
</template>
<script>
import api from '~api'

export default {
  data: () => ({
    selectedTab: 'livros',
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
    capitulo: null,
    listar_livros: [],
    listar_capitulos: []
  }),
  mounted () {
    this.livros = true
    api.list_books().then(result => {
      this.listar_livros = result
      console.log(this.listar_livros)
    })
  },
  methods: {
    infoLivro (abbrev, chapterId) {
      this.livro = this.listar_livros[abbrev].abbrev.pt
      console.log('abrevia', this.livro, 'num', chapterId)
      api.list_chapters(this.livro, chapterId).then(result => {
        this.listar_capitulos = result
        console.log(this.listar_capitulos)
      })
    },
    nextTab (selected) {
      if (selected === 'livros') {
        this.selectedTab = 'capitulos'
      } else if (selected === 'capitulos') {
        this.selectedTab = 'versiculos'
      } else {
        this.conteudo = true
      }
    },
    lerConteudo (versiculo, capitulo) {
      this.$router.push({ name: 'conteudoCap', params: { versiculo, capitulo } })
    }
    // async chamaLivros () {
    //   const data = await api.list_books()
    //   this.listar_livros = data
    //   debugger
    // }
  }
}
</script>

<style>
.fixed{
  height:77vh
}
</style>

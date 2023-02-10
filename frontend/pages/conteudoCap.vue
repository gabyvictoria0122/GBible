<template>
  <div class="overflow-auto fixed">
    <v-list-item
      v-for=" versos in listar_conteudo.verses"
      :key="versos.number"
    >
      {{versos.number}}
      {{versos.text}}
    </v-list-item>
  </div>
</template>

<script>
import api from '~api'

export default {
  layout: 'complex',
  data: () => ({
    cap: null,
    ver: null,
    listar_conteudo: []
  }),
  mounted () {
    this.ver = this.$route.params.versiculo
    this.cap = this.$route.params.capitulo
    this.liv = this.$route.params.livro
    api.list_chapters(this.liv, this.cap).then(result => {
      this.listar_conteudo = result
    })
  }
}
</script>

<style>
.fixed{
  height:77vh
}
</style>

<template>
  <div>
    <v-list-item
      v-for=" versos in listar_conteudo[0]?.verses"
      :key="versos.number"
    >
      {{versos.text}}
    </v-list-item>
  </div>
</template>

<script>
import api from '~api'

export default {
  data: () => ({
    cap: null,
    ver: null,
    listar_conteudo: []
  }),
  mounted () {
    this.ver = this.$route.params.versiculo
    this.cap = this.$route.params.capitulo
    api.list_books().then(result => {
      this.listar_conteudo = result.livrosInfo
    })
  }
}
</script>

<style>

</style>

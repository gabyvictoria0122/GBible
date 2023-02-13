<template>
  <div ref="test" class="overflow-auto fixed">
    <v-list-item
      v-for=" versos in listar_conteudo.verses"
      :key="versos.number"
    >
      {{versos.number}}
      <p>{{versos.text}}</p>
    </v-list-item>
  </div>
</template>

<script>
import api from '~api'

// document.getElementById('test').addEventListener('selectionchange', function (event) {
//   console.log('pegooo')
// }, false)
export default {
  layout: 'complex',
  data: () => ({
    cap: null,
    ver: null,
    el: null,
    listar_conteudo: []
  }),
  mounted () {
    this.$refs.test.addEventListerner('click', function (event) {
      console.log(event)
    }, false)
    this.ver = this.$route.params.versiculo
    this.cap = this.$route.params.capitulo
    this.liv = this.$route.params.livro
    api.list_chapters(this.liv, this.cap).then(result => {
      this.listar_conteudo = result
    })
  },
  methods: {
    mostra (text) {
      console.log(text)
    }
  }
}
</script>

<style>
.fixed{
  height:77vh
}
</style>

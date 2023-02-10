<template>
  <v-container class="flex-column d-flex justify-space-around mb-6" fill-height>
    <h1 class="align-center">GBIBLE</h1>
    <windows />
    <div>
      <v-row cols="12" sm="12">
        <v-col class="d-flex flex-column">
          <v-btn rounded>Inscrever-se</v-btn>
          <v-btn class="my-4" rounded>Entrar</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-btn
        class="align-end"
        plain
        rounded
        :to="{name: 'start'}"
      >
        Criar conta mais tarde
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import windows from '../components/windows.vue'

export default {
  layout: 'default',
  components: {
    windows
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>

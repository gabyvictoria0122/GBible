<template>
  <div>
    <windows />
    <v-layout justify-center align-center>
      <BtnInicial />
    </v-layout>
  </div>
</template>

<script>
import windows from '../components/windows.vue'
import BtnInicial from '~/components/BtnInicial.vue'

export default {
  layout: 'default',
  components: {
    BtnInicial,
    windows
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>

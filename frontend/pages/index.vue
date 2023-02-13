<template>
  <v-container class="flex-column d-flex justify-space-around mb-6" fill-height>
    <h1 style="font-size: 5rem" class="align-center">GBible</h1>
    <!-- <windows /> -->
    <div>
      <v-row cols="12" sm="12">
        <v-col class="d-flex flex-column">
          <v-btn x-large rounded>Inscrever-se</v-btn>
          <v-btn x-large class="my-4" rounded>Entrar</v-btn>
        </v-col>
      </v-row>
    </div>
    <div>
      <v-btn
        class="align-end white--text"
        plain
        rounded
        x-large
        :to="{name: 'start'}"
      >
        Criar conta mais tarde
      </v-btn>
    </div>
    <video autoplay loop muted plays-inline class="bg_video">
      <source src="../static/video2.mp4" type="video/mp4">
    </video>
  </v-container>
</template>

<script>
// import windows from '../components/windows.vue'

export default {
  layout: 'default',
  components: {
    // windows
  },
  data () {
    return {}
  }
}
</script>

<style>
#inspire {
  background: none;
}
.bg_video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -100;
}
@media (min-aspect-ratio:18/9) {
  .bg_video{
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio:18/9) {
  .bg_video{
    width: auto;
    height: 100%;
  }
}
</style>

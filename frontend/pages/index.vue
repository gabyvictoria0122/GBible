<template>
  <v-container class="flex-column d-flex justify-space-around mb-6" fill-height>
    <h1 style="font-size: 5rem" class="align-center">GBible</h1>
    <!-- <windows /> -->
    <div>
      <v-row cols="12" sm="12">
        <v-col class="d-flex flex-column">
          <v-btn x-large rounded>Inscrever-se</v-btn>
          <v-btn x-large class="my-4" @click="open_login_dialog($event)" rounded>Entrar</v-btn>
          <login-dialog ref="login_dialog" />
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
import loginDialog from '~/components/login-dialog.vue'

export default {
  layout: 'default',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    loginDialog
  },
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  },
  methods: {
    open_login_dialog (evt) {
      this.$refs.login_dialog.open()
      if (this.$store.state.auth.currentUser) {
        this.$router.push({ name: 'start' })
      }
      evt.stopPropagation()
    }
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

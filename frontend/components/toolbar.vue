<template>
  <v-toolbar max-height="72px" dark fixed app clipped-right>
    <v-toolbar-title class="'purple--text">GBible</v-toolbar-title>
    <v-spacer />
    <v-btn v-if="!logged_user" flat dark ripple class="ma-0 ml-5" @click="open_login_dialog($event)">Login</v-btn>
    <login-dialog ref="login_dialog" />
  </v-toolbar>
</template>

<script>
import Vuex from 'vuex'
import loginDialog from '~/components/login-dialog.vue'
export default {
  components: {
    loginDialog
  },
  computed: Object.assign(
    {},
    Vuex.mapGetters([
      'logged_user'
    ])
  ),
  // eslint-disable-next-line vue/order-in-components
  props: ['state'],
  methods: {
    open_login_dialog (evt) {
      this.$refs.login_dialog.open()
      evt.stopPropagation()
    }
  }
}
</script>

<template>
  <div>
    <v-row cols="12" sm="12">
      <v-col>
        <v-btn rounded>Inscrever-se</v-btn>
        <v-btn class="my-4" rounded>Entrar</v-btn>
        <v-btn
          plain
          rounded
          :to="{name: 'start'}"
        >
          Criar conta mais tarde
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

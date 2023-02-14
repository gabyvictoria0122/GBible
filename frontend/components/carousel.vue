<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-subheader>Novo Testamento</v-subheader>
        <v-container fluid>
          <v-row>
            <v-col>
              <img
                src="../static/mat.png"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
            <v-col>
              <img
                src="../static/mar.png"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
            <v-col>
              <img
                src="../static/luc.png"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
          </v-row>
        </v-container>

        <v-subheader>Velho Testamento</v-subheader>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 3"
              :key="i"
              cols="4"
            >
              <img
                src="../static/sal.png"
                alt="lorem"
                class="image"
                height="100%"
                width="100%"
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    model: null
  })
}
</script>

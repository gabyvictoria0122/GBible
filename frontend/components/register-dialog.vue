<template>
    <v-dialog v-model="showPopup" max-width="500">
        <v-card>
            <v-card-title>
                <h2>Registre-se</h2>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" v-model="valid" method="post">
                    <v-text-field v-model="username" label="Nome de usuário" required :rules="nameRules"></v-text-field>
                    <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Senha" type="password" required
                        :rules="passwordRules"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Fechar</v-btn>
                <v-btn color="blue darken-1" text @click="register" :disabled="!valid">Registrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
import axios from 'axios'

export default {
    name: 'RegisterDialog',
    props: {
        registerVisible: {
            type: Boolean,
            default: false,
        }
    },
    data: () => ({
        dialog: false,
        username: '',
        email: '',
        password: '',
        valid: false,
        nameRules: [
            (v) => !!v || 'Nome é obrigatorio',
            (v) => (v && v.length <= 20) || 'Nome precisa ser menor que 20 caracteres',
        ],
        emailRules: [
            (v) => !!v || 'E-mail é obrigatorio',
            (v) => /.+@.+\..+/.test(v) || 'E-mail precisa ser valido',
        ],
        passwordRules: [
            (v) => !!v || 'Senha deve ser preenchida',
            (v) => (v && v.length >= 4) || 'A senha precisa ter no minimo 4 caracteres',
        ],
    }),
    computed: {
        showPopup: {
            get() {
                return this.registerVisible
            }
        },
    },
    methods: {
        close() {
            this.registerVisible = !this.registerVisible
        },
        register() {
            if (this.$refs.form.validate()) {
                const data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                };
                axios.post('/api/register', data)
                    .then(response => {
                        console.log(response)
                        this.close()
                    })
                    .catch(error => {
                        console.error(error);
                        this.$refs.form.errors = ['Ocorreu um erro ao registrar o usuário. Por favor, tente novamente mais tarde.'];
                    });
            }
        },
    },
}
</script>

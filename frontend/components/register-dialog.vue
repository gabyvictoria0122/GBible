<template>
    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title>
                <h2>Registre-se</h2>
            </v-card-title>
            <v-card-text>
                <v-form ref="registerForm" v-model="valid">
                    <v-text-field v-model="name" label="Nome de usuário" required :rules="nameRules"></v-text-field>
                    <v-text-field v-model="email" label="Email" required :rules="emailRules"></v-text-field>
                    <v-text-field v-model="password" label="Senha" type="password" required
                        :rules="passwordRules"></v-text-field>
                    <v-text-field v-model="confirmPassword" label="Confirme a senha" type="password" required
                        :rules="confirmPasswordRules"></v-text-field>
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
    data: () => ({
        dialog: false,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        nameRules: [
            (v) => !!v || 'Name is required',
            (v) => (v && v.length <= 20) || 'Name must be less than 20 characters',
        ],
        emailRules: [
            (v) => !!v || 'E-mail is required',
            (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
            (v) => !!v || 'Password is required',
            (v) => (v && v.length >= 8) || 'Password must be at least 8 characters',
        ],
        confirmPasswordRules: [
            (v) => !!v || 'Confirm password is required',
            (v) => v === this.password || 'Passwords must match',
        ],
    }),
    methods: {
        close() {
            this.dialog = false
        },
        register() {
            axios.post('/api/register', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
                .then((response) => {
                    console.log(response.data)
                    this.dialog = false
                })
                .catch((error) => {
                    console.log(error.response.data);
                    this.error = error.response.data.message;
                });
        }
    }
}

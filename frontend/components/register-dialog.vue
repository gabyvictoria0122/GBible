<template>
    <v-dialog v-model="dialog" max-width="500">
        <v-card>
            <v-card-title>
                <h2>Registre-se</h2>
            </v-card-title>
            <v-card-text>
                <v-form ref="registerForm">
                    <v-text-field v-model="username" label="Nome de usuário" required></v-text-field>
                    <v-text-field v-model="email" label="Email" required></v-text-field>
                    <v-text-field v-model="password" label="Senha" type="password" required></v-text-field>
                    <v-text-field v-model="confirmPassword" label="Confirme a senha" type="password"
                        required></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" @click="register">Registre-se</v-btn>
                <v-btn @click="dialog = false">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script>
export default {
    data() {
        return {
            dialog: false,
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    },
    methods: {
        register() {
            if (this.$refs.registerForm.validate()) {
                if (this.password !== this.confirmPassword) {
                    this.$refs.registerForm.errors.push("As senhas não coincidem.")
                    return
                }
                const data = {
                    username_field: this.username,
                    email_field: this.email,
                    password_field: this.password,
                }
                axios.post('/api/register/', data)
                    .then(response => {
                        this.dialog = false
                        this.$refs.registerForm.reset()
                        this.$emit('registered', response.data)
                    })
                    .catch(error => {
                        console.error(error)
                        this.$refs.registerForm.errors.push("Ocorreu um erro ao registrar o usuário. Por favor, tente novamente mais tarde.")
                    })
            }
        },
    },
}
</script>
  
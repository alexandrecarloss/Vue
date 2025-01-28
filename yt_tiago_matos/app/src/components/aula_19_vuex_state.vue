<template>
    <div>
        Hello {{  $store.state.user.first_name }} {{  $store.state.user.last_name }}
        <br>
        {{  $store.state.user.email }}
        <br>
        <button @click="updateUser">
            Atualizar perfil
        </button>
    </div>
</template>
  
<script>
    export default {
        name: 'aula_19_vuex_state',
        props: {
            msg: String
        }, 
        data() {
            return {
                
            }
        },
        // created() {
        //     const newUser = {
        //         first_name: 'Carlos',
        //         last_name: 'Souza',
        //         email: 'carlos.souza@gmail.com'
        //     }
        //     // console.log(this.$store.state.user);
        //     this.$store.commit('storeUser', newUser);
        // },
        computed: {
        
        },
        methods: {
            updateUser() {
                const newUser = {
                first_name: 'Carlos',
                last_name: 'Souza',
                email: 'carlos.souza@gmail.com'
            }
            
            // this.$store.commit('storeUser', newUser);
            this.$store.dispatch('storeUser', newUser).then(() => {
                console.log('terminou com sucesso')
            });
            }
        }
    }
  
</script>

<style>
  
</style>
<template>
    <div>
        {{ $route.query.page }}
        Usuario
    </div>

    <div>
        <button @click="login()">
            Login
        </button>
    </div>
</template>
  
<script>
    export default {
        name: 'UsersEditView',
        props: {
            msg: String
        }, 
        data() {
            return {
            
            }
        },
        created() {
            console.log(this.$router);
        },
        computed: {
        
        },
        methods: {
            login() {
                console.log('chegou');
                this.$router.push({name: 'about'})
                // this.$router.push({ path: '/login' });
            }
        }
    }
  
</script>

<style>
  
</style>
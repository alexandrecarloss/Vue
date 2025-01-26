<template>
    <div>
        <TheHeader>
            <template v-slot:title>
                Home
            </template> 
            <template v-slot:description>
                <p>Descrição do header</p>
            </template>
            Content do header
        </TheHeader>
    </div>
</template>
  
<script>
    import TheHeader from './TheHeader.vue';
    export default {
        name: 'aula_13_slot',
        components: { TheHeader },
        props: {
            msg: String
        }, 
        data() {
            return {
            
            }
        },
        mounted() {
            console.log(this.$slots);
        },
        computed: {
        
        },
        methods: {
        
        }
    }
  
</script>

<style>
  
</style>
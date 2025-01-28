<template>
    <div>
        {{  name }}
        <button @click="name = 'John'">
            Change
        </button>
    </div>
</template>
  
<script>
// const name = 'Carlos a'
    export default {
        name: 'aula_24_composition_api',
        props: {
            msg: String
        }, 
        data() {
            return {
                // name
            }
        },
        computed: {
        
        },
        methods: {
        
        }
    }
  
</script>

<style>
  
</style>
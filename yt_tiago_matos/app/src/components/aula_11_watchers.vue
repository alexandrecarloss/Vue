<template>
    <div>
        <input 
        v-model="name"
        type="text">
        <p>{{ name }}</p>	
    </div>

    <br> <br>
    <div>
        <input 
        v-model="user.first_name"
        type="text">
        <input 
        v-model="user.last_name"
        type="text">
        <p>{{ user.first_name }} {{ user.last_name }}</p>	
    </div>


    <br> <br> <br>
    <select v-model="pageCount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </select>

    <p>
        {{  pageCount }} pages
    </p>
</template>
  
<script>
    export default {
        name: 'aula_11_watchers',
        props: {
            msg: String
        }, 
        data() {
            return {
                name: '',
                pageCount: 5,
                user: {
                    first_name: 'Carlos',
                    last_name: 'Souza',
                }
            }
        },
        computed: {
        
        },
        methods: {
            saveName() {
                // Simulando a chamada de uma API
                console.log('Salvando nome:', this.name);
            },
            changePage(newPageCount) {
                // Simulando a mudança de página
                console.log('Alterando página para:', newPageCount);
            }
        },
        watch: {
            name: function(newVal, oldVal) {
                console.log('Nome alterado de:', oldVal, 'para:', newVal);
                if(newVal.length > 3) {
                    this.saveName();
                }
            },
            pageCount: function(newVal) {
                // Ajax
                this.changePage(newVal);
            },
            user: {
                deep: true,
                handler: function(newVal, oldVal) {
                    console.log('Usuário alterado:', oldVal, 'para:', newVal);
                }   
            }
    
        }
    }
  
</script>

<style>
  
</style>
<template>
    <TheHeader v-if="showHeader"/>
    <div >
        <h1>Hello</h1>
        {{  name }}
    </div>

    <br>
    <button @click="showHeaderFunction">
        Toggle Header
    </button>
    <button @click="showHeader = !showHeader">
        Toggle Header
    </button>
</template>
  
<script>
    import TheHeader from './TheHeader.vue';
    export default {
        name: 'aula_12_life_cycle',
        components: { TheHeader },
        props: {
            msg: String
        }, 
        data() {
            return {
                name: 'Carlos Souza',
                showHeader: true
            }
        },
        // beforeUpdate() {	
        //     console.log('beforeUpdate');
        //     console.log('Estado: ', this.name);
        //     console.log('DOM: ', this.$el);
        // },
        // updated() {
        //     console.log('updated');
        //     console.log('Estado: ', this.name);
        //     console.log('DOM: ', this.$el);
        // },
        // beforeCreate() {
        //     console.log('beforeCreate');
        //     console.log('Estado: ', this.name);
        //     console.log('DOM: ', this.$el);
        // },
        // created() {
        //     console.log('created');
        //     console.log('Estado: ', this.name);
        //     console.log('DOM: ', this.$el);
        // },
        // beforeMount() {
        //     console.log('beforeMount');
        //     console.log('Estado: ', this.name);
        //     console.log('DOM: ', this.$el);
        // },
        mounted() {
            // console.log('mounted');
            // console.log('Estado: ', this.name);
            // console.log('DOM: ', this.$el);
            window.addEventListener('resize', this.resize);
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.resize);
        },
        computed: {
        
        },
        methods: {
            showHeaderFunction() {
                this.showHeader =!this.showHeader;
            },
            resize($event){
                console.log($event);
            }
        }
    }
  
</script>

<style>
  
</style>
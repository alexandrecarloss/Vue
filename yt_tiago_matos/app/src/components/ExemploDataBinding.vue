<template>
    <img v-bind:src="imgSrc" v-bind:alt="imgAlt">
</template>
  
<script>
    export default {
        // import logo from '../assets/logo.png';
        name: 'ExemploDataBinding',
        props: {
            msg: String
        }, 
        data() {
            return {
            imgAlt: 'Logo vue',
            imgSrc: require('../assets/logo.png')
            // imgSrc: logo
            }
        }
    }
  
</script>

<style>
  
</style>
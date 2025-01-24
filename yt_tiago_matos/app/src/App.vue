<template>
  <!-- <TheHeader
  v-if="showHeader"/>
  
  <ExemploCondicionais/>
  <ExemploRepeticao/> -->

  <!-- <img 

  alt="Vue logo" 
  src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <ExemploDataBinding/> -->

  <!-- <ExemploClassStyleDinamico/> -->
  <aula_8TwoWayDataBinding/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheHeader from './components/TheHeader.vue'
// import ExemploCondicionais from './components/ExemploCondicionais.vue'
// import ExemploRepeticao from './components/ExemploRepeticao.vue'
// import ExemploDataBinding from './components/ExemploDataBinding.vue'
// import ExemploClassStyleDinamico from './components/ExemploClassStyleDinamico.vue'
import aula_8TwoWayDataBinding from './components/aula_8TwoWayDataBinding.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TheHeader,
    // ExemploCondicionais,
    // ExemploRepeticao,
    // ExemploDataBinding,
    aula_8TwoWayDataBinding
  },
  data() {
    return {
      showHeader: true,
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

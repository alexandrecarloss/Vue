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
  <!-- <aula_8TwoWayDataBinding/> -->
  <!-- <aula_09_eventos/> -->

  <!-- <div id="app">
    <aula_10_computed_property ref="aulaComponent" />
  </div> -->

  <!-- <aula_11_watchers/> -->
   <!-- <aula_12_life_cycle/> -->
   <!-- <aula_13_slot/> -->
   <!-- <aula_14_base_card/> -->
  <!-- <div>
    <aula_15_props 
    :variant="variant">
      {{  text }}
    </aula_15_props>
    
  </div> -->
  <!-- <div>
    <aula_16_emit 
    v-if="showAlert"
    :variant="variant"
    @close="onClose()">
      {{  text }}
    </aula_16_emit>
  </div> -->
  <!-- <aula_19_vuex_state/>
  <AppProducts/>

  <div>
    {{  $store.state.cart }}
  </div>

  {{ $store.getters.total }} -->

  <!-- <aula_24_composition_api/> -->
  <!-- <AppProduct_24/> -->
  <!-- <aula_25_composition_ref/> -->
   <!-- <aula_26_computed_e_ref/> -->
    <!-- <div>
      <aula_27_composition_ciclo_de_vida v-if="showAppHook"/>
    <button @click="showAppHook = !showAppHook">
      Mostrar App Hook
    </button>
    </div> -->
    <div>
      <aula_28_composition_props_emit 
      data-vue="Jon"
      @update="getUpdate"
      variant="danger">
        Save
        <template #icon>Icon</template>
      </aula_28_composition_props_emit>
    </div>
    
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TheHeader from './components/TheHeader.vue'
// import ExemploCondicionais from './components/ExemploCondicionais.vue'
// import ExemploRepeticao from './components/ExemploRepeticao.vue'
// import ExemploDataBinding from './components/ExemploDataBinding.vue'
// import ExemploClassStyleDinamico from './components/ExemploClassStyleDinamico.vue'
// import aula_8TwoWayDataBinding from './components/aula_8TwoWayDataBinding.vue'
// import aula_09_eventos from './components/aula_09_eventos.vue'
// import aula_10_computed_property from './components/aula_10_computed_property.vue'
// import aula_11_watchers from './components/aula_11_watchers.vue'
// import aula_12_life_cycle from './components/aula_12_life_cycle.vue'
// import aula_13_slot from './components/aula_13_slot.vue'
// import aula_14_base_card from '@/components/aula_14_base_card.vue'
// import aula_15_props from '@/components/aula_15_props.vue'
// import aula_16_emit from '@/components/aula_16_emit.vue'
// import aula_19_vuex_state from '@/components/aula_19_vuex_state.vue'
// import AppProducts from '@/components/aula_20_products/AppProducts.vue'
// import AppProduct_24 from '@/components/aula_24_products/AppProduct_24.vue'
// import aula_24_composition_api from '@/components/aula_24_composition_api.vue'
// import aula_25_composition_ref from '@/components/aula_25_composition_ref.vue'
// import aula_26_computed_e_ref from '@/components/aula_26_computed_e_ref.vue'
// import aula_27_composition_ciclo_de_vida from '@/components/aula_27_composition_ciclo_de_vida.vue'
import aula_28_composition_props_emit from '@/components/aula_28_composition_props_emit.vue'


import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TheHeader,
    // ExemploCondicionais,
    // ExemploRepeticao,
    // ExemploDataBinding,
    // aula_8TwoWayDataBinding
    // aula_09_eventos
    // aula_10_computed_property: aula_10_computed_property,
    // aula_10_computed_property,
    // aula_11_watchers,
    // aula_12_life_cycle,
    // aula_13_slot,
    // aula_14_base_card,
    // aula_15_props,
    // aula_16_emit,
    // aula_19_vuex_state,
    // AppProducts,
    // aula_24_composition_api,
    // AppProduct_24,
    // aula_25_composition_ref,
    // aula_26_computed_e_ref,
    // aula_27_composition_ciclo_de_vida,
    aula_28_composition_props_emit,
  },
  setup() {
    const showAppHook = ref(true)  
    const getUpdate = (data) => {
      console.log('getUpdate', data);
    }
    return {
      showAppHook,
      getUpdate
    }
  },
  data() {
    return {
      showHeader: true,
      showAlert: true,
      variant: 'success',
      text: 'Seu formulário foi enviado com sucesso!',
    }
  },
  methods: {
    onClose() {
      this.showAlert = false;
      console.log('onClose');
    },
  },
  // mounted() {
  //   console.log(this.$refs.aulaComponent.user); 
  // },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
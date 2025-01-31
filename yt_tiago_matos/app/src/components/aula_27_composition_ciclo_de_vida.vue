<template>
    <div>
        <h5>Hook</h5>
    </div>
</template>
  
<script>
import { onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted
 } from 'vue';
export default {
    name: 'aula_27_composition_ciclo_de_vida',
    data() {
        return {
        
        }
    },
    setup() {
       onBeforeMount(() => {
        console.log('Antes de montar');
       }),
       onMounted(() => {
        console.log('Depois de montar');
       }),
       onBeforeUnmount(() => {
        console.log('Antes de desmontar');
       }),
       onUnmounted(() => {
        console.log('Depois de desmontar');
       })
    }
}
  
</script>

<style>
  
</style>
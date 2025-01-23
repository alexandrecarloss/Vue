<!-- 
    Lifecycle: são ações que podem acontecer em três etapas de um componente: 

    - Antes da criação;
    - Durante a criação;
    - Depois da criação.
 
-->

<!-- Script -->
<script setup>
// Importações 
    import { onMounted, ref } from 'vue';

    // Variável de texto
    let texto = ref('Hello world!');

    // Lifecycle onMounted
    // Ação executada assim que o componente é montado
    onMounted(() => {
        setTimeout(() => {
            texto.value = 'Alterando texto!';
        }, 3000);
    });
</script>
<!-- HTML -->
<template>
    <h1>{{ texto }}</h1>
</template>
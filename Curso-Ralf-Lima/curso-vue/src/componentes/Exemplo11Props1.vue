<!-- 
    Props -> Propriedades
    A utilização de Props fornece uma comunicação  entre os componentes, podemos enviar informações estáticas, variáveis e funções.
-->
<!-- Script -->
<script setup>

    // Importar componentes
    import Exemplo11Props2 from './Exemplo11Props2.vue';

    //  Variáveis
    let cidade = 'Iranduba';
    let cidades = ['Manaus', 'Iranduba', 'São Paulo', 'Curitiba', 'Florianópolis'];

    // Função
    function mensagem() {
        alert('Função criada no componente: Exemplo11Props1');
    }
</script>
<!-- HTML -->
<template>
    <Exemplo11Props2 nome="Carlos" idade="21" :cidade="cidade" :vetor="cidades" :funcao="mensagem"></Exemplo11Props2>
</template>
<!-- Script -->
<script setup>
    // Função para validar o formulário
    function validaFormulario(event) {
        alert('Formulário enviado!');
        event.preventDefault(); // Previne o envio padrão do formulário
    }
</script>
<!-- HTML -->
<template>
    <form action="https://chatgpt.com/" @submit="validaFormulario">
        <input type="submit" value="Enviar formulário">
    </form>
</template>
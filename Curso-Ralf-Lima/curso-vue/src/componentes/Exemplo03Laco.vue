<!-- Script -->
<script setup>
  // Vetor
  let nomes = ['Kesia', 'Bruna', 'Juliana', 'Alexandre']
</script>

<!-- HTML -->
<template>
    <ul>
        <li v-for="nome in nomes">
            {{  nome  }}
        </li>
    </ul>
</template>

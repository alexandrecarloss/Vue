<!-- Script -->
<script setup>
    // Importar o ref
    import { ref } from 'vue';

    // Variável
    let texto = ref('');
</script>
<!-- HTML -->
 <template>
    <input type="text" name="" id="" v-model="texto">
    <p>{{ texto }}</p>
 </template>
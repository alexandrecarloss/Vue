<template>
    <div>
        <h5>User</h5>
        {{  user.first_name }}
        {{  user.last_name }}
        <br>
        <br>
        <h5>Full name</h5>
        {{  fullName }}
    </div>
    <br>
    <button @click="user.first_name = 'Sansa'">
        Atualizar
    </button>
</template>
  
<script>
import { ref, computed, watch } from 'vue';
export default {
    name: 'aula_26_computed_e_ref',
    data() {
        return {
        
        }
    },
    setup() {
        const user = ref({
            first_name: 'Carlos',
            last_name: 'Souza'
        })

        //Observar o objeto inteiro com profundidade
        // watch(user, () => {
        //     console.log('Lógica cabulosa');
        // }, {
        //     deep: true,
        // })
        
        //Observar o first name 
        watch(() => user.value.first_name, () => {
            console.log('Lógica cabulosa');
        })

        const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)
        return {
            user,
            fullName,
        }
    }
}
  
</script>

<style>
  
</style>
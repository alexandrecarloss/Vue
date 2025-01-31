<template>
    <div>
        {{  name }}
        <button @click="changeName()">
            Change name
        </button>
    </div>

    <h5>User</h5>
    {{  user.first_name }} {{  user.last_name }}
    <br> <br>
    <h5>Admin</h5>
    {{  admin.first_name }} {{ admin.last_name }}
</template>
  
<script>
import { ref, reactive } from 'vue';
export default {
    name: 'aula_25_composition_ref',
    setup() {
        let name = 'Carlos'

        const admin = ref({
            first_name: 'admin',
            last_name: 'Master',
        })

        const changeName = () => {
            alert('change name')
            name = 'Alexandre Moraes'
            user.first_name = 'Sansa'
            admin.value.first_name = 'Pedro'
        }
        const user = reactive({
            first_name: 'John',
            last_name: 'Doe',
        })
        return {
            user,
            admin,
            name,
            changeName,
        }


    },
}
  
</script>

<style>
  
</style>
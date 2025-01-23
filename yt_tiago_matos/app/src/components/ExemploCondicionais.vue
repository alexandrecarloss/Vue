<template>
    <div v-if="showName">
        Nome: {{ firstName }}
        <br/>
        Sobrenome: {{ lastName }}
    </div>

    <div>
        <div v-if="accessLevel === 'admin'">Admin</div>
        <div v-else-if="accessLevel === 'marketing'">Marketing</div>
        <div v-else>User</div>
    </div>
</template>

<script>
export default {
  name: 'ExemploCondicionais',
  props: {
    msg: String
  }, 
  data() {
    return {
        firstName: 'John',
        lastName: 'Snow',
        showName: false,
        accessLevel: 'Marketing'
        }
    }
}
</script>

<style>
  
</style>
<template>
    <h1 :class="{ 'title': true, 'title' ? isHome }">
        Curso Vue 3
    </h1>
</template>

<script>
export default {
  name: 'ExemploClassStyleDinamico',
  props: {
    msg: String
  }, 
  data() {
    return {
            isHome: false,
            ClassTitle: 'title'
        }
    }
}
</script>

<style>
  .title {
    font-size: 20px;
    color: blue;
  }

  .title-home {
    font-size: 40px;
    color: green;
  }
</style>
<template>
    <header class="header">
        Header
    </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    msg: String
  }
}
</script>

<style>
  .header {
    background: #000;
    color: #fff;
  }
</style>
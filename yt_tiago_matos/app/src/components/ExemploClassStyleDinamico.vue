<template>
    <h1 :class="{ 'title': true, 'title-home': isHome }">
        Curso Vue 3
    </h1>

    <p :class="pClass">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dolor non dolorem nam rerum alias quo enim, iure perferendis, recusandae rem aspernatur ea illum nesciunt! Inventore nisi qui perspiciatis nulla.
    </p>
    <p :style="styleClass">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, officiis. Architecto mollitia fugiat rerum totam harum tempora et, reiciendis ratione, debitis, omnis adipisci repellat illum. Rerum odit asperiores repellat quia!
    </p>
</template>

<script>
export default {
  name: 'ExemploClassStyleDinamico',
  props: {
    msg: String
  }, 
  data() {
    return {
            isHome: true,
            pClass: ['text', 'text-home'],
            ClassTitle: 'title',
            styleClass: { color: 'aqua', backgroundColor: 'black', 'font-size': '20px' }
        }
    }
}
</script>

<style>
  .title {
    font-size: 20px;
    color: blue;
  }
  .text {
    color: yellow;
  }

  .text-home {
    color: aquamarine;
  }

  .title-home {
    font-size: 40px;
    color: green;
  }
</style>
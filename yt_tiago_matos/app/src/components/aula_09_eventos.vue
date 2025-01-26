<template>
    <div>
        <button
        @click="onClick">
            Enviar
        </button>
    </div>

    <div @mouseover="OnMouseOver" @mouseout="OnMouseOut">
        Mouse over
    </div>

    <br> <br>
    
    <form action="https://google.com"
    @submit.prevent="OnSubmit">

        <input @keyup.enter="OnKeyUp" type="text" name="" id="">
        <button type="submit">
            Enviar
        </button>
    </form>
</template>
  
<script>
    export default {
        name: 'aula_09_eventos',
        props: {
            msg: String
        }, 
        data() {
            return {
                
            }
        },
        methods: {
            onClick(Sevt) {
                console.log('click', Sevt);
            },
            OnMouseOver() {
                console.log('Mouse over');
            },
            OnMouseOut() {
                console.log('Mouse out');
            },
            OnSubmit() {
                console.log('submit');
            },
            OnKeyUp(evento) {
                console.log('key up', evento);
            }
        }
    }
  
</script>

<style>
  
</style>
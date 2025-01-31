<template>
    <div>
        <button @click="sendData">
            {{  variant }}
            <slot></slot>
            <slot name="icon"/>
        </button>
    </div>
</template>
  
<script>
export default {
    name: 'aula_28_composition_props_emit',
    data() {
        return {
        
        }
    },
    props: {
        variant: {
            type: String,
            default: 'success'
        }
    },
    // setup(props, ctx) {
    //    console.log(ctx)
    // },
    setup(props, { slots, emit }) {
       console.log(slots)

       const sendData = () => {
        emit('update', props.variant)
       }

       return {
        sendData
       }
    }
}
  
</script>

<style>
  
</style>
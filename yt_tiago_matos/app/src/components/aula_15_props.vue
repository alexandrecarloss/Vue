<template>
    <!-- <div :class="['alert', { 'alert-success': variant === 'success',
'alert-danger': variant === 'alert' }]">
        Seu formulário foi enviado com sucesso!
    </div> -->
    <div :class="baseClass">
        {{  test }}
        <slot/>
    </div>
</template>
  
<script>
    export default {
        name: 'aula_15_props',
        // props: ['variant', 'test'],
        props: {
            variant: {
                type: String,
                default: '',
            },
            // test: {
            //     type: String,
            //     default: 'test',
            // },
            test: {
                type: Object,
                default: () => {
                    return {}
                },
            },
        },
        data() {
            return {
            
            }
        },
        mounted() {
            console.log(this.test);
        },
        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant ? `alert-${this.variant}` : ''
                ]
            },
        },
        methods: {
        
        }
    }
  
</script>

<style scoped>
    .alert {
        padding: 5px;
        border-radius: 6px;
        color: gray;
        background-color: #ddd;
    }
    .alert-success {
        background: #42b983;
        color: #fff;
    }
    .alert-danger {
        background: red;
        color: #fff;
    }
</style>
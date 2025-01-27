<template>
    <div>
        <AppProduct 
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"/>
    </div>
</template>
  
<script>
    import AppProduct from '@/components/aula_20_products/AppProduct.vue'
    export default {
        name: 'AppProducts',
        components: {
            AppProduct
        },
        props: {
            msg: String
        }, 
        data() {
            return {
            
            }
        },
        computed: {
        
        },
        methods: {
        
        }
    }
  
</script>

<style>
  
</style>
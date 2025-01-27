<template>
    <div class="card">
        <pre>
            {{  product.name }} - R${{  product.price }}
            <br>
            <button @click="addProduct()">
                Adicionar ao carrinho
            </button>
            <button
            v-if="productInCart()"
            @click="removeProduct()">
                Remover
            </button>
            {{ productInCart() }}
        </pre>
    </div>
</template>

<script>
    export default {
        name: 'AppProduct',
        props: {
            product: Object
        }, 
        data() {
            return {
                
            }
        },
        computed: {
        
        },
        methods: {
            addProduct() {
                this.$store.commit('addProduct', this.product);
            },
            removeProduct() {
                this.$store.commit('removeProduct', this.product.id);
            },
            productInCart() {
                return this.$store.state.cart.some(cartItem => cartItem.id === this.product.id);
            }

        }
    }
  
</script>

<style>
    .card {
        background: bisque;
        padding: 6px;
        margin-bottom: 5px;

    }
</style>
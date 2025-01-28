<template>
    <div @click="changeName()">
        Produto 
    </div>
    {{  name }}
</template>

<script>
import CalculateDiscountMixin from '@/components/aula_24_products/CalculateDiscountMixin.vue';
export default {
    mixins: [CalculateDiscountMixin],
    created() {
        this.CalculateDiscount()
    },
    setup() {
        //Lógica cabulosa
        let name = 'Carlos';

        const changeName = () => {
            // Lógica cabulosa
            alert('chegou')
            name = 'John  Wick'
        }
        return {
            name,
            changeName
        }
    },
}
</script>
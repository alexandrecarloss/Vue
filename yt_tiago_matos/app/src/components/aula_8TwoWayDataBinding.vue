<template>
    <label for="nomeInput">Nome:</label><br/>
    <input 
    v-model="nome"
    id="nomeInput"
    type="text">
    {{  nome  }}
<br><br>
    <div>
        <label for="sports">Sports</label>
        <select 
        v-model="sports"
         name="sports" id="">
         <option value="" selected>Escolha</option>
        <option value="futebol">Fitebol</option>
        <option value="basquetebol">Basquetebol</option>
        <option value="tenis">Tênis</option>
    </select>
    <br>
    {{ sports }}
    </div>
    
    <br> <br>

    <div>
        <label for="Newsletter">Newsletter</label><br>
        <label for="sim">Sim</label>
        <input v-model="Newsletter" type="radio" value="Sim" name="Newsletter" id="sim">
        <label for="nao">Não</label>
        <input v-model="Newsletter" type="radio" value="Não" name="Newsletter" id="nao">
        <br>
        {{  Newsletter }}
    </div>

    <br> <br>

    <div>
        <label for="contract">Contrato</label><br>
        <label for="sim">Aceita nossos termos...</label>
        <input v-model="contract" type="checkbox" name="contract" id="sim">
        <br>
        {{  contract }}
    </div>

    <br> <br>

    <div>
        <label>Cores que você mais gosta</label><br>
        <label for="azul">Azul</label>
        <input v-model="colors" type="checkbox" name="azul" id="azul" value="Azul">
        <br>
        <label for="verde">Verde</label>
        <input v-model="colors" type="checkbox" name="verde" id="verde" value="Verde">
        <br>
        <label for="vermelho">Vermelho</label>
        <input v-model="colors" type="checkbox" name="vermelho" id="vermelho" value="Vermelho">
        <br>
        {{  colors }}
    </div>

</template>
  
<script>
    export default {
        name: 'aula_8TwoWayDataBinding',
        props: {
            msg: String
        }, 
        data() {
            return {
                nome: 'John Snow',
                sports: 'basquetebol',
                Newsletter: 'Sim',
                contract: 'false',
                colors: []
            }
        }
    }
  
</script>

<style>
  
</style>
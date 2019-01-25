<template>
    <div id="rif" class="card horizontal deep-orange-text orange lighten-5 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header" style="font-weight: bolder"> 
                    <a style="text-decoration: none;" class="deep-orange-text">
                        Ruby Interactive Fiction  (RIF) </a>
                        <i class="fas fa-laptop-code" style="font-size: 40px"></i></h3>
                <p style="font-size: medium">
                    Meu trabalho consiste da criação de uma linguagem de domínio específico (Domanin Specific
                    Language --- DSL) que visa facilitar a criação de jogos de texto. As fases principais
                    estão abaixo
                </p> <br>
                <ul class="collection with-header">
                    <li class="collection-header center"> Fases do trabalho  </li> <br>
                    <li class="collection-item"> Descrição da proposta de trabalho </li>
                    <li class="collection-item"> Leituras iniciais (Metaprogramação [Ruby] e Linguagem Zil) </li>
                    <li class="collection-item"> Planejamento da ferramenta </li>
                    <li class="collection-item"> Implementação de testes e software </li>
                    <li class="collection-item"> Produção da monografia </li>
                </ul>
            </div>
            <div class="card-action red-text">
                <router-link to="/rif" 
                    class="waves-effect waves-light btn deep-orange white-text"> Veja mais aqui </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: '#rif'
}
</script>

<style scoped>
li {
    margin: 0;
    font-weight: bolder;
    width: 100%;
}

div#inner {
    margin-bottom: 0px;
}
</style>

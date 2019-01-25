<template>
    <div class="card horizontal teal-text green lighten-5 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header" style="font-weight: bolder"> Sobre mim <i class="fas fa-child" style="font-size: 40px"></i> </h3>
                <p style="font-size: medium">
                Um aluno do Bacharelado em Ciência da Computação (BCC) com múltiplos interesses. Tenho vontade
                de conhecer sobre muitos assuntos, e com eles, propiciar tecnologias, e talvez, mais conhecimento.
                </p>
                <div class="row">
                    <div class="col s12 m6 l6">
                        <ul class="collection with-header">
                            <li class="collection-header center"> Áreas de interesse </li>
                            <li class="collection-item"> Programação Web </li>
                            <li class="collection-item"> Bancos de dados (SQL e no-SQL) </li>
                        </ul>
                    </div>
                    <div class="col s12 m6 l6">
                        <ul class="collection with-header">
                            <li class="collection-header center"> Interesses diversos </li>
                            <li class="collection-item"> Economia </li>
                            <li class="collection-item"> Política | Filosofia | História </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: '#about'
}
</script>

<style scoped>
li {
    margin: 0;
    font-weight: bolder;
    width: 100%;
}
</style>

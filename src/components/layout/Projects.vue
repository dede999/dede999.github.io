<template>
    <div id="projects" class="card horizontal deep-purple-text indigo lighten-5 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header center" style="font-weight: bolder"> 
                    <a class="deep-purple-text">
                        Projetos e demais repositórios </a>
                        <i class="fab fa-git" style="font-size: 40px"></i></h3>
                <p style="font-size: medium">
                    Aqui vai uma lista de alguns projetos mais relevantes
                    e alguns repositórios dos quais eu fui criador ou 
                    colaborador. Alguns são projetos reais, e outros, apenas
                    motivações para desenvolvermos algo. Caso se interesse 
                    por algum deles, fique a vontade para explorá-los.
                </p> <br>
                <p style="font-size: medium"> 
                    Bom saber que projetos com a marcação (A) são os
                    acadêmicos. Projetos que tinham como motivação principal
                    o aprendizado de alguma técnica, software ou paradigma. A 
                    marca (P) significa que trata-se de algo pessoal, mas que 
                    têm sua relevância por sua motivação, ou mesmo para me 
                    fazer ver de onde comecei como Web-Dev, e me lembrar de 
                    quando HTML e CSS eram as únicas peças que conhecia. A marca
                    (U) acompanha projetos cuja finalidade era facilitar minha vida de alguma forma.
                </p> <br>
                <!-- <ul class="collection with-header">
                    <li class="collection-header center"> Projetos repositórios  </li> <br>
                    <li v-for="p in projects" class="collection-item"> 
                        {{ p.name }} 
                        <span v-for="t in p.tags" v-tags=t> 
                            <i class="center"> {{ t }} </i> </span> 
                        <span class="right"> VEJA MAIS </span> </li>
                </ul> -->
            </div>
            <div class="card-action red-text">
                <router-link to="/projects" 
                    class="waves-effect waves-light btn indigo white-text"> Veja mais aqui </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: '#projects',
    directives: {
        tags: {
            bind (el, bindings) {
                el.className = "btn purple darken-4 white-text"
            }
        }
    },
    data() {
        return {
            projects: []
        }
    }
}
</script>

<style>
li {
    margin: 0;
    font-weight: bolder;
    width: 100%;
}
span {
    margin-left: 8px;
    margin-right: 8px;
}
</style>

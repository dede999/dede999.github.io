<template>
    <div id="index" class="green lighten-3">
        <cabecalho color="teal" t="Web CV"></cabecalho>
        <div class="row">
            <div class="col l8 m12 s12">
                <about></about>
                <exp></exp>
                <rif></rif>
                <idioms></idioms>
                <cv></cv>
            </div>  
            <div class="col l4 m12 s12">
                <contato></contato>
                <projetos></projetos>
                <habilities></habilities>
            </div>
        </div>

        <rodape color="teal" t="Web CV"></rodape>
    </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'
import About from './layout/About.vue'
import Rif from './layout/Rif.vue'
import Contact from './layout/Contact.vue'
import Projects from './layout/Projects.vue'
import Experience from './layout/Experience.vue'
import Languages from './layout/Languages.vue'
import Curricula from './layout/Curricula.vue'
import Habilities from './layout/Habilities.vue'

export default {
    components : {
        'cabecalho': Header,
        'rodape': Footer,
        'about': About,
        'rif': Rif,
        'contato': Contact,
        'projetos': Projects,
        'exp' : Experience,
        'idioms' : Languages,
        'cv' : Curricula,
        'habilities' : Habilities
    },
    el: '#index',
    data () {
        return {
            time: ''
        }
    },
}
</script>

<style scoped>
div#index {
    font-family: 'Abel', Verdana, Geneva, Tahoma;
    font-size: larger;
    font-weight: bold;
}
</style>

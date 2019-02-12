<template>
    <div id="projects" class="indigo lighten-4">
        <cabecalho color="indigo" t="Projetos e Repositórios"></cabecalho>
        <router-view></router-view>
        <h3> Projetos e Repositórios </h3>
        <div class="row">
            <div v-for="(p, key) in projects" class="col s12 m6 l4" :key="p.id">
                <div class="card indigo z-depth-4 white-text">
                    <div class="card-content">
                        <span style="font-weight: bold" class="card-title"> {{ p.name }} </span>
                    <p> {{ p.desc }} </p>
                    </div>
                    <div class="row">
                        <div class="col s1"></div>
                        <div class="col s4">
                            <a v-bind:href="p.link" class="indigo darken-4 btn"> 
                                <i class="fas fa-link"></i> Link 
                            </a>
                        </div>
                        <div class="col s2"></div>
                        <div class="col s4">
                            <router-link :to="{name: 'a_proj', params: {id:key}}" tag="a" class="indigo darken-4 btn">
                                <i class="far fa-eye"></i> Veja +
                            </router-link>
                        </div>
                        <div class="col s1"></div>
                    </div>        
                </div>
            </div>
        </div>
        <rodape color="indigo" t="Projetos e Repositórios"></rodape>
    </div>
</template>

<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'

export default {
    el: '#projects',
    components: {
        'cabecalho' : Header,
        'rodape' : Footer
    },
    data() {
        return {
            projects: []
        }
    },
    beforeMount : function() {
        this.$http.get('https://home-andre.firebaseio.com/projects.json')
            .then(r => {
                this.projects = r.data
                // this.projects.sort((a, b) => a.first < b.first ? -1 : 1)
                console.log(r.data)
            }).catch(e => {
                console.log(e)
            })
    }
}
</script>

<style scoped>
div#projects {
    font-family: 'Special Elite';
}

h3 {
    text-align: center;
}

/* div.proj {
    height: 35px;    
} */

div.card-content {
    padding: 15px;
    height: 280px;
}
</style>

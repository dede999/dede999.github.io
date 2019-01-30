<template>
    <div id="experience" class="card horizontal orange-text yellow lighten-3 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header" style="font-weight: bolder">
                    <a class="orange-text"> Experiências de trabalho 
                        <i class="fas fa-briefcase" style="font-size: 40px"></i>
                    </a>
                </h3>
                <div class="row">
                    <div class="col s3 m3 l3">
                        <div class="job">
                            <i v-on:click="clear()"> Limpar seleção
                                <i class="fas fa-broom"></i> </i>
                        </div>
                        <div v-for="w in works" class="job" :key="w.title">
                            <i v-on:click="pick(w)"> {{ w.title }} ({{ w.begin }} - {{ w.end }}) </i>
                        </div>
                    </div>
                    <div class="col s9 m9 l9">
                        <h5 style="font-weight: bolder"> {{ titulo }} </h5>
                        <h5 v-if="begin"> ({{ begin}} - {{ end }}) </h5> <hr>
                        <p> 
                            <span style="font-weight: bolder"> Descrição </span> :  
                            {{ desc }} 
                        </p> <br>
                        <p> 
                            <span style="font-weight: bolder"> Saída </span>: 
                            {{ reason }} 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: '#experience',
    data() {
        return {
            works: [],
            titulo: '',
            begin: '',
            end: '',
            desc: '',
            reason: ''
        }
    },
    methods: {
        pick : function(work) {
            this.titulo = work.title
            this.begin = work.begin
            this.end = work.end
            this.desc = work.description
            this.reason = work.reason
        },
        clear : function() {
            this.titulo = ''
            this.begin = ''
            this.end = ''
            this.desc = ''
            this.reason = ''
          }
    },
    beforeMount: function() {
        this.$http.get('https://home-andre.firebaseio.com/works.json')
            .then(response => {
                this.works = response.data
                console.log("Dados " + response.data)
            }).catch(e => {
                console.log("Olha o erro" + e)
            })
    }
}
</script>

<style>
div.job {
    border-radius: 15px;
    background-color: #ffd54f;
    color: #e65100;
    margin-bottom: 10px;
}
</style>

<template>
    <id id="show">
        <div class="row z-depth-5 indigo darken-1">
            <h3> {{ project.name }} </h3>
            <div v-for="t in project.tags" class="chip ligth-blue lighten-3">
                {{ show_tag(t) }}
            </div> <br>
            <div v-for="t in project.tools" class="chip ligth-blue lighten-1">
                {{ t }}
            </div> <br>
            <div class="row white-text desc">
                <div class="col s2 m2 l2 btn indigo darken-3">
                    <a href="" class="white-text">
                        Repositório
                        <i class="fab fa-git-square"></i>    
                    </a>
                </div>
                <div class="col s10 m10 l10">
                    {{ project.desc }}
                </div>
            </div>
        </div>
    </id>
</template>

<script>
export default {
    el: '#show',
    data() {
        return {
            id: this.$route.params.id,
            project : []
        }
    },
    methods: {
        este_projeto () {
            this.$http.get('https://home-andre.firebaseio.com/projects/'+ this.id + '.json')
                .then(r => {
                    this.project = r.data
                }).catch(e => {
                    console.log(e)
                })
        },
        show_tag: function(tag) {
            if (tag == "A") return "Acadêmico"
            else if (tag ==  "P") return "Pessoal"
            else return "Utilidades"
        }
    },
    created: function () {
        this.este_projeto()
    },
    watch: {
        '$route' (to, from) {
            this.id = to.params.id
            this.este_projeto()
        }
    }
}
</script>

<style scoped>
div.row {
    width: 80%;
    padding: 1px;
    margin-top: 20px;
}

div.desc {
    font-size: large;
}

div.btn {
    margin-top: 5%;
    margin-left: -5%;
}

h3 {
    text-align: center;
    font-weight: bold;
    color: azure;
}

.chip {
    align-content: left;
    font-size: large;
    font-weight: 600;
    margin-left: 5px;
}
</style>

<template>
    <div id="habilities" class="card horizontal brown-text brown lighten-4 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header center" style="font-weight: bolder">
                    Ferramentas Conhecidas
                    <i class="fas fa-atom" style="font-size:40x"></i>
                </h3>
                <table class="centered highlights">
                    <thead>
                        <tr>
                            <th> Ferramentas </th>
                            <th> Nível </th>
                            <th> Frameworks/Exemplos </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="hab in habilities">
                            <td> {{ hab.language }} </td>
                            <td> {{ get_hab(hab.nivel) }}</td>
                            <td> 
                                <span v-for="f in hab.framework"> 
                                    {{ f }} 
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: '#habilities',
    data() {
        return {
            habilities: []
        }
    },
    methods: {
      get_hab: function (hab) {
        if (hab == "B") return "Bom"
        else if (hab == "M") return "Mediano"
        else return "Insuficiente"
      }
    },
    beforeMount: function (){
        this.$http.get('https://home-andre.firebaseio.com/habilities.json')
            .then(r => {
                this.habilities = r.data
                console.log(r.data)
            }).catch(e => {
                console.log("Olha o erro " + e)
            })
    }
}
</script>

<style>

</style>

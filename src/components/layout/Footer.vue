<template>
    <div>
        <footer class="page-footer" v-bind:class="color">
            <div class="container">
                <div class="row" id="titulo">
                    <div class="col l6 s12">
                        <h4 class="white-text"> {{ t }} </h4>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text"> Links relevantes </h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" v-bind:href="ime"> 
                                ** Instituto de Matemática e Estatística (USP) <span style="font-size: small"> (Alma mater) </span> </a></li>
                            <!-- <li><a class="grey-text text-lighten-3" href="#"> -->
                                <!-- ** Biblioteca Digital </a></li> -->
                            <!-- <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col s12 m4 l4" id="one"> Portfólio Pessoal </div>
                        <div class="col s12 m4 l4" id="two"> {{ t }} </div>
                        <div class="col s12 m4 l4" id="three"> {{ relogio }} </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    el: "#footer",
    props: ['color', 't'],
    data () {
        return {
            relogio: new Date().toLocaleString(),
            ime: 'https://www.ime.usp.br/' 
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    footer {
        padding: 0%;
        font-family: 'Arvo'
    }
    #titulo {
        align-content: center;
        display: table-cell;
        vertical-align: center;
    }
    div.container {
        align-content: center;
    }
    #one {
        text-align: left;
    }
    #two {
        text-align: center;
    }
    #three {
        text-align: right;
    }
</style>

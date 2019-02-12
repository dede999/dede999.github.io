<template>
    <div id="tcc">
        <cabecalho color="deep-orange" t="Ruby Interactive Fiction"></cabecalho>
        <div class="row">
            <div class="col s12 orange darken-2" style="padding-top: 5px">
                <ul class="tabs">
                    <li class="tab col s12 m6 l4 orange darken-2" v-show="visible != 'index'" v-on:click="show_it('index')"><a href="#index" class="white-text"> Resumo </a> </li>
                    <li class="tab col s12 m6 l4 orange darken-4" v-show="visible == 'index'"><a href="#index" class="white-text"> Resumo </a> </li>
                    <li class="tab col s12 m6 l4 orange darken-2" v-show="visible != 'fases'" v-on:click="show_it('fases')"><a href="#fases" class="white-text"> Fases  </a> </li>
                    <li class="tab col s12 m6 l4 orange darken-4" v-show="visible == 'fases'"><a href="#fases" class="white-text"> Fases  </a> </li>
                    <li class="tab col s12 m6 l4 orange darken-2" v-show="visible != 'fontes'" v-on:click="show_it('fontes')"><a href="#fontes" class="white-text"> Fontes </a> </li>
                    <li class="tab col s12 m6 l4 orange darken-4" v-show="visible == 'fontes'"><a href="#fontes" class="white-text"> Fontes </a> </li>
                </ul>
            </div>
            <div id="index" class="col s12" style="padding-top: 7px" v-show="visible == 'index'">
                <div class="row black-text orange lighten-2 z-depth-3">
                    <div class="col s12 l6">
                        <h2 style="font-weight: bolder; text-align: center"> Detalhes Técnicos </h2>
                        <p class="data"> Aluno: <a href="../index.html"> André Luiz Abdalla Silveira </a> </p>
                        <p class="data"> Orientador: <a href="https://www.ime.usp.br/~gubi/"> Marco Dimas Gubitoso </a> </p>
                        <p class="data"> Ferramenta escrita em <a> Ruby </a></p>
                        <p class="data"> Testes escritos em <a> RSpec </a></p>
                        <p class="data"> Status: <a> Em desenvolvimento </a></p>
                        <p class="data"> Observação: A sessão de fontes receberá o devido cuidado quando as demais partes forem concluídas </p>
                        <div class="row" id="links">
                            <div class="col s6 m6 l6">
                                <a v-bind:href="mono">
                                    Monografia
                                    <i class="fas fa-book"></i>
                                </a>
                            </div>
                            <div class="col s6 m6 l6">
                                <a :href="repo">
                                    Repositório
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col l6 s12">
                        <h2 style="font-weight: bolder; text-align: center"> Calendário de Atividades </h2>
                        <table class="striped">
                            <thead>
                                <tr>
                                    <td> Fase </td>
                                    <td>  </td>
                                    <td> Prazo/Conclusão </td>
                                    <td> Status </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 1 </td>
                                    <td> Descrição da proposta de trabalho </td>
                                    <td> 23/Abril/2.018 </td>
                                    <td> <span style="font-weight: bolder"> Concluído </span> </td>
                                </tr>
                                <tr>
                                    <td> 2 </td>
                                    <td> Leituras Básicas </td>
                                    <td> 30/Julho/2.018 </td>
                                    <td> <span style="font-weight: bolder"> Concluída </span> </td>
                                </tr>
                                <tr>
                                    <td> 3 </td>
                                    <td> Planejamento da ferramenta </td>
                                    <td> 04/Outubro/2.018 </td>
                                    <td> <span style="font-weight: bolder"> Concluída </span> </td>
                                </tr>
                                <tr>
                                    <td> 4 </td>
                                    <td> Implementação </td>
                                    <td> Fevereiro/2.019 </td>
                                    <td> <span style="font-weight: bolder"> Em Andamento </span> </td>
                                </tr>
                                <tr>
                                    <td> 5 </td>
                                    <td> Produção da monografia </td>
                                    <td> Fevereiro/2.019 </td>
                                    <td> <span style="font-weight: bolder"> Em Andamento </span> </td>
                                </tr>							
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="fases" class="col s12" v-show="visible == 'fases'">
                <div class="row fases">
                    <div class="col l3 m5 s6">
                        <div class="phases orange lighten-2" v-for="(p, key) in fases" :key="key">
                            <i v-bind:class=p.icon></i> 
                            <i v-on:click="get_phase(p, key)"> {{ p.name }} </i>
                        </div>
                    </div>
                    <div class="col l9 m7 s6">
                        <div class="phases orange lighten-2">
                            <h4 v-if="fase_id >= 0"> Fase {{ fase_id + 1 }}: {{ fase.name }} </h4>
                            <h5 v-if="fase.completed" class="chip green"> Completa </h5>
                            <h5 v-else-if="fase.icon" class="chip red"> Incompleta </h5>
                            <p v-for="par in fase.paragraphs" :key="par">
                                {{ par }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="fontes" class="col s12" style="padding-top: 7px" v-show="visible == 'fontes'">
                <div class="row fases">
                    <div class="col l3 m5 s6">
                        <div class="phases orange lighten-2" v-for="(f, key) in fontes" :key="key">
                            <i class="fas fa-book"></i> 
                            <i v-on:click="get_font(f, key)"> {{ f.titulo }} </i>
                        </div>
                    </div>
                    <div class="col l9 m7 s6">
                        <div class="phases orange lighten-2">
                            <h4> {{ fonte.titulo }} </h4>
                            <div class="row" v-show="fonte.titulo">
                                <div class="col s6"> <h6> <b> Autor: </b> {{ fonte.autor }} </h6> </div>
                                <div class="col s6"> <h6> <b> Editora: </b> {{ fonte.editora }} </h6></div>
                            </div>
                            <p v-for="par in fonte.desc" :key="par">
                                {{ par }}
                            </p>
                            <p v-show="fonte.titulo"> Veja informações detalhadas <a v-bind:href="fonte.link"> <i class="fas fa-book"></i> </a> </p>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
        <rodape color="deep-orange" t="Ruby Interactive Fiction (RIF)"></rodape>
    </div>
</template>

<script>
import Header from './layout/Header.vue'
import Footer from './layout/Footer.vue'

export default {
    el: '#tcc',
    components: {
        'cabecalho' : Header,
        'rodape' : Footer
    },
    data() {
        return {
            visible: 'index',
            mono: 'https://linux.ime.usp.br/~andreluizas/mac0499/monografia_template.pdf',
            repo: 'https://github.com/dede999/InteractiveFiction',
            fase: [
                {
                    name : "",
                    icon: "",
                    completed: false,
                    paragraphs: []
                } 
            ],
            fase_id: -1,
            fonte: [
                {
                    titulo: "",
                    autor : "",
                    editora : "",
                    desc: []
                }
            ],
            fonte_id: 0,
            fontes: [],
            fases : [
                {
                    name : "Descrição da proposta de trabalho",
                    icon : "fas fa-clipboard-list",
                    completed: true,
                    paragraphs : [
                        "Tema -- DSL Jogos de Ficcção Interativa",
                        "O objetivo dessa proposta é criar uma ferramenta, uma DSL (domanin specific language, linguagem de domínio espcífico) que viabilize a criação do jogos de ficção interativa. Nesse gênero de jogo, confrontado com a descrição verbal do ambiente (escassa ou abundante), o jogador se vê convidado a explorar e imaginar aquele mundo. Vê-se estimulado à leitura que o induz a expandir o mundo e o vocabulário. Ainda que não possa ser preciso a esse respeito, acredito que essa ferramenta possa ser uma  esplêndida maneira de incentivar a leitura. Confirmar esse palpite foge do escopo desse trabalho"
                    ]
                },
                {
                    name : "Leituras Básicas - Preparando o terreno",
                    icon : "fas fa-book-open",
                    completed: true,
                    paragraphs : [
                        "Pesquisa sobre metaprogramação em Ruby (concluída com a descoberta do livro Ruby Cookbook, que apresenta conhecimentos a serem utilizados na aplicação de metaprogramação, como também, na interpretação de expressões regulares e outros fatores cruciais",
                        "Programação em Zil. Alguns conceitos dessa linguagem e a forma como ela foi pensada foram grandes inspirações para mim. Um exemplo disso é como Zil pensa os ambientes"
                    ]
                },
                {
                    name : "Planejamento da ferramenta",
                    icon : "fas fa-map",
                    completed: true,
                    paragraphs : [
                        "Fase prihncipal do trabalho, consiste na criação da linguagem em si.",
                        "Planejamento do fluxo de trabalho",
                        "Criação dos arquivos necessários. A conclusão dessa eatapa pressupõe a criação dos claases, módulos e métodos",
                        "Criação de testes usando RSpec"
                    ]
                },
                {
                    name: "Implementação",
                    icon: "fas fa-code",
                    completed: false,
                    paragraphs: [
                        "O primeiro passo, sempre que possível, é criar testes para as funções que serão criadas. Tais testes devem refletir o comportamento das funções a serem implementadas. Depois de terminada a implementação, todos os testes devem passar.",
                        "Depois dos testes concluídos, é hora de implementar o que que é necessário pra fazer as engrenagens girarem. Esses dois passos podem ser repetidos para cada módulo, ou para todo o software.",
                        "Atualmente, os eforços estão na implementação do módulo de jogo."
                    ]
                },
                {
                    name: "Documentação / Produção da monografia",
                    icon: "fas fa-book",
                    completed: false,
                    paragraphs: [
                        "Concluída essa fase, estará pronta a monografia auto contida e com uma documentação plenamente capaz de orientar quem eventualmente queira utilizar.",
                        "A ideia é gerar uma documentação que pode ser facilmente pesquisada, tornando o processo de criação mais focado na criatividade que em resolução de problemas",
                        "Esse documento também contará com uma reflexão sobre o que deveria ser feito (na minha opinião), e algumas recomendações, e features que eu gostaria de implementar e não pude.",
                        "Atualmente ela conta com uma descrição breve do que está sendo feita, e com uma boa introdução boa tratando, ainda que superficialmente, de um panorama histórico sobre o mundo da ficção interativa. Não é o foco do trabalho, mas trata-se de um arcabouço cognitivo razoável para que o leitor compreenda o que está sendo feito."
                    ]
                }
            ],
        }
    },
    methods: {
        show_it : function(tag) {
            this.visible = tag
        },
        get_phase : function (p, id) {
            this.fase = p
            this.fase_id = id
        },
        get_font : function (f, id) {
            this.fonte = f
            this.fonte_id = id
        }
    },
    beforeMount: function () {
        this.$http.get('https://home-andre.firebaseio.com/fonts.json')
            .then(r => {
                this.fontes = r.data
            }).catch(e => {
                console.log(e)
            })
    }
}

</script>

<style scoped>
div#tcc {
    background-color: #e65100;
    font-family: 'Bitter', Verdana, Geneva, Tahoma;
    font-weight: bolder;
}

a {
    text-decoration: none;
    color: #bf360c;
}

p.data {
    padding-left: 7px;
    font-size: larger
}

div.col.s6.m6.l6 {
    text-align: center;
    font-size: larger;
}

div.row.fases {
    margin-top: 15px;
}

div.phases {
    border-radius: 15px;
    /* color: #ffd54f; */
    color: #bf360c;
    margin-bottom: 11px;
    margin-top: 11px;
    font-size: larger;
    padding-left: 7px;
}

div#fases {
    min-height: 300px;
}

div#fontes {
    min-height: 300px;
}
</style>

<template>
    <div id="curricula" class="card horizontal red-text red lighten-5 z-depth-3">
        <div class="card-stacked">
            <div class="card-content">
                <h3 class="header">
                    Currículos (CV's)
                    <i class="fas fa-id-badge" style="font-size:40px"></i>
                </h3>
                <p>
                    Abaixo encontram-se versões do meu CV em diferentes línguas
                </p>
                <ul class="collection with-header">
                    <li class="collection-header center"> Opções </li>
                    <li class="collection-item"> 
                        Português <a v-bind:href="port" class="btn waves-effect red-text red lighten-5">
                        VEJA AQUI 
                        </a>
                    </li>
                    <li class="collection-item">
                        Inglês <i style="margin-left:28px"></i>
                        <a v-bind:href="eng" class="btn waves-effect red-text red lighten-5"> VEJA AQUI </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    el: '#curricula',
    data() {
        return {
            port: 'https://drive.google.com/open?id=1hwGiuR_99kJz_w8ujnycl9Mh80xyWMu2',
            eng: 'https://drive.google.com/open?id=1oSBIAinkDoTwX02VqTegsTwKgZsxTqzf',
            ita: ''
        }
    },
}
</script>

<style scoped>
a {
    /* margin-right: -5px; */
    margin-left: 600px;
}
</style>

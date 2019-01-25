<template>
    <div id="header">
        <nav>
            <div class="nav-wrapper darken-2 z-depth-3" v-bind:class="color" 
            style="font-family: 'Arvo';font-weight: bolder">
                <a class="right hide-on-med-and-down"> {{ t }} </a>
                <!-- <a class="brand-logo left" href="/" style="font-size: 45px"> André Luiz Abdalla Silveira </a> -->
                <router-link to="/" class="brand-logo left" style="font-size: 45px">
                    André Luiz Abdalla Silveira
                </router-link>
                </div>
        </nav>
    </div>
</template>

<script>
export default {
    el: "#header",
    props: ['color', 't'],
}
</script>

<style scoped>
    a.brand-logo {
        margin-left: 1em;
    }
    a.right {
        margin-right: 2em;
        font-size: 30px;
    }
</style>
 
//  -- 4 nucleos
//  -- 2 GHz
//  - intel > i3
//  -- 8 GB
//  ddr 4
//  hdd > 512 GB
//  ssd > 256 GB
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import TCC from '../components/TCC'
import IndexP from '../components/projects/Index'
import ShowP from '../components/projects/Show'

Vue.use(VueRouter)

const router = new VueRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        }
        else {
          return {x:0, y:0}
        }
    },
    routes: [
        {path: '/webcv', redirect: '/'},
        {path: '/', component: Index},
        {path: '/rif', component: TCC},
        {path: '/projects', component: IndexP, children: [
            {path : ':id', name: 'a_proj', component: ShowP}
        ]}
    ],
    mode: 'history'
})

export default router
import Vue from 'vue'
import Router from 'vue-router'
const Inicio = () => import('./components/Inicio')
const Busqueda = () => import('./components/Busqueda')
const Ventas = () => import('./components/Ventas')
const Total = () => import('./components/Total')

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        
        {
            path: '/busqueda',
            name:'busqueda',
            component: Busqueda
        },

        {
            path: '/ventas',
            name: 'ventas',
            component: Ventas
        },

        {
            path: '/total',
            name:'total',
            component: Total
        },
        
    ]
})
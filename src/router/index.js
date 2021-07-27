import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Nosotros from '../views/Nosotros.vue'
import Servicios from '../views/Servicios.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/Servicios',
    name: 'Servicios',
    component: Servicios
  },
]

const router = new VueRouter({
  routes
})

export default router

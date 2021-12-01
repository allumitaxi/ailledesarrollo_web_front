import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Clientes from '../views/clientes/Clientes.vue'
import Proveedores from '../views/proveedores/Proveedores.vue'
import Productos from '../views/productos/Productos.vue'
import Pedidos from '../views/pedidos/Pedidos.vue'
import AgregarCliente from '../views/clientes/AgregarCliente.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/proveedores',
    name: 'Proveedores',
    component: Proveedores
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos
  },
  {
    path: '/agregar-cliente',
    name: 'AgregarCliente',
    component: AgregarCliente
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

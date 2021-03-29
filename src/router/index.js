import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/authentication/Login'
import Register from '../views/authentication/Register'
import Home from '../views/Home'
import VacinasDetails from '../views/vacinas/VacinasDetails'
import NotFound from '../views/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vacinas/:id',
      name: 'VacinasDetails',
      component: VacinasDetails,
      // Passa o id como propriedade para o componente VacinaDetails
      props: true
    },
    {
      path: ':catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

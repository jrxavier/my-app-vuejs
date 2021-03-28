import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/authentication/Login'
import Register from '../views/authentication/Register'
import Vacinas from '../views/vacinas/Vacinas'
import VacinasDetails from '../views/vacinas/VacinasDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vacinas',
      component: Vacinas
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
      path: '/vacinas',
      name: 'Vacinas',
      component: Vacinas
    },
    {
      path: '/vacinas/:id',
      name: 'VacinasDetails',
      component: VacinasDetails,
      // Passa o id como propriedade para o componente VacinaDetails
      props: true
    }
  ]
})

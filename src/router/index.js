import Vue from 'vue'
import Router from 'vue-router'
import HomeVacinas from '../views/HomeVacinas'
import Login from '../views/authentication/Login'
import Register from '../views/authentication/Register'
import VacinasAll from '../views/vacinas/VacinasAll'
import VacinasEdit from '../views/vacinas/VacinasEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeVacinas',
      component: HomeVacinas
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
      component: VacinasAll
    },
    {
      path: '/vacina/:id',
      name: 'VacinaEdit',
      component: VacinasEdit
    }
  ]
})

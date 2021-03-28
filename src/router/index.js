import Vue from 'vue'
import Router from 'vue-router'
import HomeVacinas from '../views/HomeVacinas'
import Login from '../components/authentication/Login'
import Register from '../components/authentication/Register'
import VacinasAll from '../components/vacinas/VacinasAll'
import VacinasEdit from '../components/vacinas/VacinasEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-vacinas',
      component: HomeVacinas
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'registe',
      component: Register
    },
    {
      path: '/vacinas',
      name: 'vacinas',
      component: VacinasAll
    },
    {
      path: '/vacina/:id',
      name: 'vacinas-edit',
      component: VacinasEdit
    }
  ]
})

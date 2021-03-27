import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/authentication/Login'
import Home from '../components/Home'
import Register from '../views/authentication/Register'
import VacinasAll from '../views/vacinas/VacinasAll'
import VacinasEdit from '../views/vacinas/VacinasEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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

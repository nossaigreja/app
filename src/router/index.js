import Vue from 'vue'
import Router from 'vue-router'
import GSignInButton from 'vue-google-signin-button'
import Register from '@/components/authentication/Register.vue'
import Dashboard from '@/views/dashboard/panel.vue'

Vue.use(GSignInButton)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Register
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/authentication/Register.vue'
import Dashboard from '@/views/dashboard/panel.vue'

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

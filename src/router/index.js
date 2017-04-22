import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard/panel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})

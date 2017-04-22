<template>
  <div id="app">
    <div id="main" v-if="authenticated">
      <img src="./assets/logo.png">
      <h1>Authenticated</h1>
      <router-view></router-view>
    </div>
    <div class="login-wrapper" v-if="!authenticated">
      <login></login>
    </div>
  </div>
</template>

<script>
  import storage from '@/services/storage'
  import { event } from '@/utils'

  import Login from 'components/authentication/login.vue'

  export default {
    name: 'app',
    data: () => {
      return {
        authenticated: false
      }
    },
    mounted () {
      const token = storage.get('jwt-token')
      if (token) {
        this.authenticated = true
      }
    },
    created () {
      event.on({
        'user:loggedin': () => {
          this.authenticated = true
        }
      })
    },
    components: { Login }
  }
</script>

<style>
  @import '~semantic-ui-css/semantic.css';
  @import '~nprogress/nprogress.css';
</style>

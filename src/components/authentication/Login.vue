<template>
<div class="login ui middle aligned center aligned grid">
  <div class="column column-login">
    <h2 class="ui teal image header">
      <div class="content">
        Log-in to Nossa Igreja
      </div>
    </h2>
    <form @submit.prevent="login" class="ui large form">
      <div class="ui stacked segment" style="padding: 30px">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input v-model="email" type="text" name="email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input v-model="password" type="password" name="password" placeholder="Password">
          </div>
        </div>
        <button type="submit" class="ui fluid large teal submit button">Login</button type="submit">
      </div>

      <div class="ui error message"></div>

    </form>

  </div>
</div>
</template>

<script>
  import NProgress from 'nprogress'

  import { event } from '@/utils'
  import { http } from '@/services'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        failed: false
      }
    },

    methods: {
      login (email, password) {
        this.failed = false

        NProgress.start()

        http.post('/usuarios/login', { email, password }, () => {
          this.password = ''

          event.emit('user:loggedin')
        }, () => {
          this.password = ''
        })
      }
    }
  }
</script>

<style scoped>
    body {
      background-color: #DADADA;
    }
    .login {
      margin-top: 100px;
    }
    .column-login {
      max-width: 450px;
    }
</style>

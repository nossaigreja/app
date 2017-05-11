<template>
<div class="login ui middle aligned center aligned grid">
  <div class="column column-login">
    <h2 class="ui teal image header">
      <img src="~assets/images/logo-c1.png" class="image">
      <div class="content">
        Nossa Igreja
      </div>
    </h2>
    <form @submit.prevent="login" class="ui large form">
      <div class="ui stacked segment" style="padding: 30px">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input v-model="username" type="text" name="username" placeholder="Username">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input v-model="password" type="password" name="password" placeholder="Password">
          </div>
        </div>
        <button type="submit" class="ui fluid large teal submit button">Acessar</button type="submit">
      </div>

      <div class="ui error message"></div>

      <div class="ui message">
        Ainda não é cadastrado? <a href="#/cadastro">Cadastre-se</a>
      </div>

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
        username: '',
        password: '',
        failed: false
      }
    },

    methods: {
      login (username, password) {
        this.failed = false

        NProgress.start()

        http.post('/usuarios/login', { username, password }, () => {
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

    .header .content {
      color: #fff;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.63);
      font-weight: bold;
      font-size: 40px;
    }
</style>

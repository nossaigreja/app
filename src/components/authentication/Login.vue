<template>
<div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui teal image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>
    <form @submit.prevent="login" class="ui large form">
      <div class="ui stacked segment">
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

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>
</template>

<script>
  import { event } from '@/utils'

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
      login () {
        this.failed = false

        this.password = ''

        event.emit('user:loggedin')
      }
    }
  }
</script>

<style >
    body {
      background-color: #DADADA;
    }
    .column {
      max-width: 450px;
    }
</style>

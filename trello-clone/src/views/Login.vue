<template>
  <div class="login">
    <div class="container">
      <h2>log in to Trello</h2>
      <form @submit.prevent="onSubmit">
        <div>
          <label for="email">Email</label>
          <input class="form-control" type="text" name="email" v-model="email"
          autofocus placeholder="e.g., test@test.com">
        </div>
        <div>
          <label for="password">Password</label>
          <input class="form-control" type="password" placeholder="123123" v-model="password">
        </div>
        <button class="btn" type="submit" :class="{'btn-success': !invalidForm}"
        :disabled="invalidForm">Log in</button>
      </form>
      <p class="error" v-if="error">{{error}}</p>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created(){
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
      'LOGIN'
    ]),
    onSubmit() {
      this.LOGIN({email: this.email, password: this.password})
        .then(() => {
          this.$router.push(this.rPath)
        })
        .catch((err) => {
          this.error = err.message
        })
    }
  }
}
</script>

<style>

</style>

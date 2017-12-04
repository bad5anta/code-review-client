<template>
  <b-container>
    <b-alert variant="danger"
      dismissible
      :show="showAlert"
      @dismissed="showAlert=false">
      Failed to login
    </b-alert>
    <b-row align-v="center" align-h="center" class="container">
      <b-col>
        <b-card>
          <b-form @submit="login">
            <b-form-group label="Email address:" >
              <b-form-input v-model="email" type="email" placeholder="Email" required/>
            </b-form-group>
            <b-form-group label="Password:" >
              <b-form-input v-model="password" type="password" placeholder="Password" required/>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { users, base } from '@/services/api';

export default {
  data() {
    return {
      email: '',
      password: '',
      showAlert: false,
    };
  },
  methods: {
    async login(evt) {
      evt.preventDefault();
      const { error, data: user } = await users.login(this.email, this.password);
      if (!error && user.token) {
        base.defaults.headers.common.Authorization = user.token;
        localStorage.setItem('user', user);
        const redirect = localStorage.getItem('redirect') || '/';
        this.$router.push(redirect);
      } else {
        this.showAlert = true;
      }
    },
    reset() {
      this.email = '';
      this.password = '';
      this.showAlert = false;
    },
  },
};
</script>

<style>
.container {
  height: 100vh;
}
</style>

<template>
  <div>
    <login-view @login="onLogin" />
  </div>
</template>

<script>
import LoginView from "../components/LoginView.vue";
export default {
  components: {
    LoginView,
  },
  methods: {
    onLogin(username, password) {
      if (username != "" && password != "") {
        this.$router.push({ name: "Home", params: { username: username } });
      }
    },
  },
};
</script>

<style>
#login .form-inputs {
  padding-bottom: 10px;
}
#login .form-inputs label {
  padding-right: 10px;
}
</style>
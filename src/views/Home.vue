<template>
  <div id="login">
    <h1>Hello {{ $route.params.username }}</h1>
    <button type="button" v-on:click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    if (!this.$route.params.username) {
      this.logout();
    }
  },
  methods: {
    logout() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

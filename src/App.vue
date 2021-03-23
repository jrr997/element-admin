<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Admin from "views/Admin";
export default {
  name: "App",
  components: {
    Admin,
  },
};
</script>

<style scoped>
@import url("~assets/css/normalize.css");
</style>

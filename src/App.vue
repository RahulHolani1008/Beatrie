<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    showPassword: false
  })
};
</script>

<style lang="scss">
@import "./SCSS/app.scss";
</style>

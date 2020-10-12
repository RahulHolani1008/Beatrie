<template>
  <v-navigation-drawer v-model="drawer" absolute temporary right>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="property in component" :key="property.title">
        <v-list-item-content>
          <v-list-item-title>{{ property.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      default: false
    },
    name: {
      default: null
    },
    component: {
      default: null
    }
  }
};
</script>
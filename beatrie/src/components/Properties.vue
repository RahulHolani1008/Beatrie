<template>
  <v-navigation-drawer v-model="isOpen" absolute temporary right>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content v-if="name=='TextField'">
          <v-text-field
            label="Label"
            v-model="component.title"
            outlined
            class="rounded-lg"
            type="text"
          />

          <v-text-field
            label="Placeholder"
            v-model="component.placeholder"
            outlined
            class="rounded-lg"
            type="text"
          />

          <v-select
            label="Type"
            v-model="component.type"
            outlined
            class="rounded-lg"
            :items="textfieldTypes"
          />
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
      default: () => ({})
    }
  },
  data: () => ({
    textfieldTypes: ["text", "password", "email"]
  }),
  computed: {
    isOpen: {
      get: function() {
        return this.drawer;
      },
      set: function(value) {
        if (!value) {
          this.$emit("close", this.component);
        }
      }
    }
  },
  watch: {
    component: function(newVal) {
      this.$emit("component", this.component);
    }
  }
};
</script>
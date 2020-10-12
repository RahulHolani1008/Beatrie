<template>
  <!-- <v-card>
    <v-navigation-drawer v-model="drawer" dark :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://i.pinimg.com/originals/5d/06/09/5d0609f989b68bc2908ab83ef9160357.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Beatrie</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item @click="add('textfield')">
          <v-list-item-icon>
            <v-icon>short_text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>TextField</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>-->
  <v-navigation-drawer permanent width="100%" class="window-height py-0">
    <v-row class="window-height" no-gutters>
      <v-navigation-drawer dark mini-variant mini-variant-width="56" permanent>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://i.pinimg.com/originals/5d/06/09/5d0609f989b68bc2908ab83ef9160357.png"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="component in components"
            :key="component.title"
            @click="subcomponents = component.subcomponents"
          >
            <v-list-item-action>
              <v-icon>{{ component.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ component.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-list class="grow">
        <v-list-item
          v-for="subcomponent in subcomponents"
          :key="subcomponent"
          class="cursor-pointer"
          @click="add(subcomponent)"
        >
          <v-list-item-title v-text="subcomponent"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-navigation-drawer>
</template>
<script>
export default {
  data: () => ({
    mini: true,
    drawer: true,
    components: [
      {
        title: "Inputs",
        icon: "short_text",
        subcomponents: ["Textfield", "Textarea", "Select"]
      }
    ],
    subcomponents: ["Textfield", "Textarea", "Select"]
  }),
  methods: {
    add(component) {
      this.$emit("add", component);
    }
  }
};
</script>
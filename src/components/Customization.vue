<template>
  <v-card color="accent" class="mb-12 rounded-xl">
    <v-row>
      <div v-for="(custom, index) in customizability" class="mx-auto col-4" :key="index">
        <v-card class="ma-3 rounded-xl" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{custom.overline}}</div>
              <v-list-item-title class="headline mb-1">{{custom.heading}}</v-list-item-title>
              <v-list-item-subtitle>{{custom.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize rounded-lg"
              @click="customizationSelected(custom.overline)"
            >Continue</v-btn>
            <v-btn text class="text-capitalize">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-row>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    customizability: [
      {
        overline: "None",
        heading: "Minimum Customization",
        subtitle: "Just build me a website, goddamnit!"
      },
      {
        overline: "Medium",
        heading: "Basic Customization",
        subtitle: "I don't like the look and feel of the templates."
      },
      {
        overline: "Full",
        heading: "Maximum Customization",
        subtitle: "I'm a programmer myself!"
      }
    ]
  }),
  methods: {
    customizationSelected(data) {
      this.$emit("customization", data);
      console.log(data);
    }
  }
};
</script>
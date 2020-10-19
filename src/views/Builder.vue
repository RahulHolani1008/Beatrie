<template>
  <v-main>
    <v-app-bar color="accent" flat></v-app-bar>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Select level of customization
        <small>None, Medium, Full</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <Customization @customization="getCustomization" />
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Select functionalities
        <small>Data visualization, payments, etc.</small>
      </v-stepper-step>
      <v-stepper-content step="2">
        <Functionalities @functionalities="getFunctionalities" />
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">
        Select website type
        <small>Blog posting, e-Commerce, etc.</small>
      </v-stepper-step>

      <v-stepper-content step="3">
        <Type @types="getTypes" />
      </v-stepper-content>

      <v-stepper-step step="4">Install the customizer</v-stepper-step>
      <v-stepper-content step="4">
        <v-row>
          <v-text-field
            label="Website name"
            v-model="website.name"
            outlined
            class="rounded-lg"
            type="text"
          ></v-text-field>
        </v-row>
        <v-row>
          <v-textarea
            outlined
            class="rounded-lg"
            label="Website description"
            v-model="website.description"
          ></v-textarea>
        </v-row>
        <v-btn
          color="primary"
          depressed
          class="col-5 ml-auto rounded-lg text-capitalize full-width"
          large
          @click="installWithDependancies"
        >Download and Install</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-main>
</template>

<script>
import Customization from "../components/Customization.vue";
import Functionalities from "../components/Functionalities.vue";
import Type from "../components/Types.vue";
export default {
  components: {
    Customization,
    Functionalities,
    Type
  },

  data: () => ({
    e6: 1,
    customization: null,
    functionalities: null,
    types: null,
    website: {
      name: null,
      description: null
    }
  }),

  methods: {
    getCustomization(data) {
      this.e6 = 2;
      this.customization = data;
    },
    getFunctionalities(data) {
      this.e6 = 3;
      this.functionalities = data;
    },
    getTypes(data) {
      this.e6 = 4;
      this.types = data;
    },
    installWithDependancies() {}
  }
};
</script>
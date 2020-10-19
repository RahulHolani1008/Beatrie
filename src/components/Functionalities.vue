<template>
  <v-card color="accent" class="mb-12 rounded-xl">
    <v-row>
      <div v-for="(functionality, index) in functionalities" class="mx-auto col-4" :key="index">
        <v-card class="ma-3 rounded-xl" outlined>
          <v-img
            :src="functionality.image"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title class="ml-3" v-text="functionality.heading"></v-card-title>
          </v-img>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4 ml-3">{{functionality.overline}}</div>
              <v-list-item-subtitle class="ml-3">{{functionality.subtitle}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              color="primary"
              class="text-capitalize rounded-lg ml-3"
              @click="functionalitySelected(functionality, index)"
            >{{functionality.button}}</v-btn>
            <v-btn text class="text-capitalize">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-row>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" class="text-capitalize rounded-lg" @click="next">Continue</v-btn>
      <v-btn text class="text-capitalize">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    selectedFunctionalities: [],
    functionalities: [
      {
        image:
          "https://media.geeksforgeeks.org/wp-content/uploads/20200531031949/Highchartsbasiclinechart-1024x653.JPG",
        overline: "Data Visualization",
        heading: "Data Visualization",
        subtitle: "Visualize the traffic on your website.",
        button: "Select"
      },
      {
        image:
          "https://www.netsolutions.com/insights/wp-content/uploads/2019/01/Single-Tenant-Vs-Multi-Tenant-Architecture.jpg",
        overline: "Multi-tenancy",
        heading: "Multiple Tenants",
        subtitle:
          "Let groups of people use your website independant of one another",
        button: "Select"
      },
      {
        image:
          "https://d1e00ek4ebabms.cloudfront.net/production/e4885aba-70c2-436e-a5d2-5c251ad1c2da.jpg",
        overline: "e-Commerce",
        heading: "Payments",
        subtitle: "Let users make payments to an entity/ one another",
        button: "Select"
      }
    ]
  }),
  methods: {
    functionalitySelected(functionality, index) {
      if (functionality.button == "Select") {
        this.selectedFunctionalities.push(functionality.heading);
        this.functionalities[index].button = "Deselect";
      } else {
        this.selectedFunctionalities = this.selectedFunctionalities.filter(
          func => {
            return func != functionality.heading;
          }
        );
        this.functionalities[index].button = "Select";
      }
      console.log(this.selectedFunctionalities);
    },
    next() {
      this.$emit("functionalities", this.selectedFunctionalities);
    }
  }
};
</script>
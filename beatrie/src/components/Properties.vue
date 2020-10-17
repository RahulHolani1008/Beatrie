<template>
  <v-navigation-drawer v-model="isOpen" absolute temporary right>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content v-if="name == 'TextField'">
          <v-text-field
            label="Label"
            v-model="component.title"
            outlined
            hide-details
            class="rounded-lg my-2"
            type="text"
          />

          <v-text-field
            label="Placeholder"
            v-model="component.placeholder"
            outlined
            hide-details
            class="rounded-lg my-2"
            type="text"
          />

          <v-select
            label="Type"
            v-model="component.type"
            outlined
            hide-details
            class="rounded-lg my-2"
            :items="textfieldTypes"
          />
          <HR />
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.outlined"
            label="Outlined"
          ></v-checkbox>
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.filled"
            label="Filled"
          ></v-checkbox>
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.solo"
            label="Solo"
          ></v-checkbox>
          <v-text-field
            label="Border Radius"
            v-model="component.borderRadius"
            outlined
            hide-details
            class="rounded-lg my-2 col-12"
            type="text"
          />
        </v-list-item-content>
        <v-list-item-content v-if="name == 'TextArea'">
          <v-text-field
            label="Label"
            v-model="component.title"
            outlined
            hide-details
            class="rounded-lg my-2"
            type="text"
          />

          <v-text-field
            label="Placeholder"
            v-model="component.placeholder"
            outlined
            hide-details
            class="rounded-lg my-2"
            type="text"
          />
        </v-list-item-content>
        <v-list-item-content v-if="name == 'Button'">
          <v-text-field
            label="Label"
            v-model="component.title"
            outlined
            hide-details
            class="rounded-lg my-2"
            type="text"
          />
        </v-list-item-content>
        <v-list-item-content v-if="name == 'Select'">
          <v-text-field
            label="Label"
            v-model="component.title"
            outlined
            class="rounded-lg my-2"
            type="text"
            hide-details
          />

          <v-text-field
            label="Placeholder"
            v-model="component.placeholder"
            outlined
            class="rounded-lg my-2"
            type="text"
            hide-details
          />

          <v-text-field
            label="Select values"
            v-model="value"
            outlined
            class="rounded-lg my-2"
            type="text"
            hide-details
            append-icon="add_circle_outline"
            @click:append="insertValue"
            v-on:keyup.enter="insertValue"
          />
          <v-list shaped dense>
            <v-subheader>Values</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item dense v-for="(item, i) in component.values" :key="i">
                <v-list-item-icon @click="removeValue(item)">
                  <v-icon>clear</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <HR />
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.outlined"
            label="Outlined"
          ></v-checkbox>
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.filled"
            label="Filled"
          ></v-checkbox>
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.solo"
            label="Solo"
          ></v-checkbox>
          <v-text-field
            label="Border Radius"
            v-model="component.borderRadius"
            outlined
            class="rounded-lg my-2 col-12"
            type="text"
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
    textfieldTypes: ["text", "password", "email"],
    value: ""
  }),
  methods: {
    insertValue() {
      this.component.values.push(this.value);
      this.value = "";
    },
    removeValue(item) {
      this.component.values = this.component.values.filter(value => {
        return value != item;
      });
    }
  },
  computed: {
    isOpen: {
      get: function() {
        return this.drawer;
      },
      set: function(value) {
        if (!value) {
          this.$emit("close", this.component);
          this.value = "";
          this.component = {};
        }
      }
    }
  },
  watch: {
    component: function(newVal) {
      this.$emit("component", this.component);
    },
    value: function(newVal) {
      this.component.values.pop();
      this.component.values.push(newVal);
    }
  }
};
</script>
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
          <v-select
            v-model="component.prependIcon"
            outlined
            hide-details
            class="rounded-lg my-2 col-6 pr-1"
            :items="icons"
            label="Prepend Icon"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
              <v-icon>{{ clear }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
          </v-select>
          <v-select
            v-model="component.appendIcon"
            outlined
            hide-details
            class="rounded-lg pl-1 my-2 col-6"
            :items="icons"
            label="Append Icon"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
              <v-icon>{{ clear }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
          </v-select>
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
          <v-select
            v-model="component.prependIcon"
            outlined
            hide-details
            class="rounded-lg my-2 col-6 pl-1"
            :items="icons"
            label="Prepend Icon"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
          </v-select>
          <v-select
            v-model="component.appendIcon"
            outlined
            hide-details
            class="rounded-lg my-2 col-6 pr-1"
            :items="icons"
            label="Append Icon"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
              <v-icon>{{clear}}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
          </v-select>
          <v-select
            v-model="color1"
            outlined
            hide-details
            class="rounded-lg my-2 col-6 pr-1"
            :items="colors"
            label="Color"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-btn
                :dark="data.item != 'white' && data.item != 'transparent' && data.item != 'yellow'"
                :color="data.item"
              >{{ data.item }}</v-btn>
            </template>
            <template slot="item" slot-scope="data">
              <v-btn
                :dark="data.item != 'white' && data.item != 'transparent' && data.item != 'yellow'"
                :color="data.item"
              >{{ data.item }}</v-btn>
            </template>
          </v-select>
          <v-select
            v-model="color2"
            outlined
            hide-details
            class="rounded-lg my-2 col-6 pr-1"
            :items="coloraccent"
            label="Color Accent"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-btn
                :dark="color1 != 'white' && color1 != 'transparent' && data.item != 'lighten-5' && data.item != 'lighten-4'"
                :color="color1+' '+data.item"
              >{{ data.item }}</v-btn>
            </template>
            <template slot="item" slot-scope="data">
              <v-btn
                :dark="color1 != 'white' && color1 != 'transparent' && data.item != 'lighten-5'  && data.item != 'lighten-4'"
                :color="color1+' '+data.item"
              >{{ data.item }}</v-btn>
            </template>
          </v-select>
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
            v-model="component.depressed"
            label="Depressed"
          ></v-checkbox>
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.text"
            label="Is Textual?"
          ></v-checkbox>
          <v-checkbox
            color="primary"
            class="col-6"
            hide-details
            v-model="component.dark"
            label="Is Dark?"
          ></v-checkbox>
          <v-text-field
            color="primary"
            class="col-12 my-2 rounded-lg"
            outlined
            hide-details
            v-model="component.borderRadius"
            label="Border Radius"
          ></v-text-field>
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
          <v-select
            v-model="component.prependIcon"
            outlined
            hide-details
            class="rounded-lg my-2 col-6 pr-1"
            :items="icons"
            label="Prepend Icon"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
              <v-icon>{{ clear }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
          </v-select>
          <v-select
            v-model="component.appendIcon"
            outlined
            hide-details
            class="rounded-lg pl-1 my-2 col-6"
            :items="icons"
            label="Append Icon"
          >
            <template v-slot:selection="{ item }">
              <v-icon>{{ item }}</v-icon>
              <v-icon>{{ clear }}</v-icon>
            </template>
            <template slot="selection" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
            <template slot="item" slot-scope="data">
              <v-icon>{{ data.item }}</v-icon>
            </template>
          </v-select>
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
    textfieldTypes: ["text", "password", "email", "number"],
    value: "",
    icons: [
      "account_circle",
      "add_shopping_cart",
      "add_task",
      "arrow_circle_down",
      "arrow_circle_up",
      "arrow_right_alt",
      "bookmark_border",
      "delete_outline",
      "cached",
      "done",
      "event",
      "favorite",
      "get_app",
      "launch",
      "clear",
      "perm_identity",
      "perm_phone_msg",
      "schedule",
      "search",
      "shopping_cart",
      "stars",
      "work_outline",
      "visibility",
      "visibility_off",
      "upgrade",
      "trending_up",
      "trending_down"
    ],
    colors: [
      "red",
      "pink",
      "purple",
      "deep-purple",
      "indigo",
      "blue",
      "light-blue",
      "cyan",
      "teal",
      "green",
      "light-green",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deep-orange",
      "brown",
      "blue-grey",
      "grey",
      "black",
      "white",
      "transparent"
    ],
    coloraccent: [
      "lighten-1",
      "lighten-2",
      "lighten-3",
      "lighten-4",
      "lighten-5",
      "darken-1",
      "darken-2",
      "darken-3",
      "darken-4",
      "accent-1",
      "accent-2",
      "accent-3",
      "accent-4"
    ],
    color1: "",
    color2: ""
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
    },
    icon() {
      return "mdi-checkbox-blank-outline";
    }
  },
  watch: {
    component: function(newVal) {
      if (this.component.color) {
        this.color1 = this.component.color.split(" ")[0];
        this.color2 = this.component.color.split(" ")[1];
      }
      this.$emit("component", this.component);
    },
    value: function(newVal) {
      this.component.values.pop();
      this.component.values.push(newVal);
    },
    color1: function(newVal) {
      this.component.color = this.color1 + " " + this.color2;
    },
    color2: function(newVal) {
      this.component.color = this.color1 + " " + this.color2;
    }
  }
};
</script>
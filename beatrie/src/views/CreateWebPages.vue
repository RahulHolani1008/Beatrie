<template>
  <v-row>
    <Components @add="add" class="col-3 window-height" />
    <v-container fluid class="col-9">
      <v-row class="window-height">
        <v-col>
          <transition name="fade">
            <DragAndDrop
              :textfields="textfields"
              :textareas="textareas"
              :selects="selects"
              :buttons="buttons"
              :radiobuttons="radiobuttons"
              :checkboxes="checkboxes"
              @openProperties="openProperties"
              :component="component"
            />
          </transition>
        </v-col>
      </v-row>
    </v-container>
    <Properties
      :drawer="drawer"
      :name="name"
      :component="component"
      @close="closeDrawer"
      @component="getComponentData"
    />
  </v-row>
</template>
<script>
import VueDraggableResizable from "vue-draggable-resizable";
import Components from "../components/Components.vue";
import DragAndDrop from "../components/DragAndDrop.vue";
import Properties from "../components/Properties.vue";
export default {
  data: () => ({
    textfields: 0,
    textareas: 0,
    selects: 0,
    buttons: 0,
    radiobuttons: 0,
    checkboxes: 0,
    name: null,
    component: {},
    drawer: false
  }),
  components: {
    Components,
    Properties,
    DragAndDrop
  },
  methods: {
    openProperties(name, component) {
      console.log(name, component);
      this.name = name;
      this.component = component;
      this.drawer = true;
    },
    add(component) {
      switch (component) {
        case "Textfield":
          this.textfields += 1;
          break;
        case "Textarea":
          this.textareas += 1;
          break;
        case "Select":
          this.selects += 1;
          break;
        case "Button":
          this.buttons += 1;
          break;
        case "CheckBox":
          this.checkboxes += 1;
          break;
        case "RadioButton":
          this.radiobuttons += 1;
          break;
      }
    },
    closeDrawer(component) {
      this.drawer = false;
      this.component = component;
    },
    getComponentData(component) {
      console.log(component);
      this.component = component;
    }
  }
};
</script>
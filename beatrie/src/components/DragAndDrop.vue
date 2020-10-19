<template>
  <div class="window-height" id="container-div">
    <vue-draggable-resizable
      v-for="(textfield, n) in componentData.textfields"
      :key="'textfield' + n"
      :w="textfield.width"
      :h="textfield.height"
      :grid="[gridY, gridX]"
      @dragging="onDrag('textfields', n)"
      @resizing="onResize('textfields', n)"
      :parent="true"
    >
      <v-text-field
        @contextmenu.native="editProperties('textfield', n, $event)"
        :outlined="textfield.outlined"
        :filled="textfield.filled"
        :solo="textfield.solo"
        :type="textfield.type"
        :label="textfield.title"
        :placeholder="textfield.placeholder"
        :style="'border-radius: '+textfield.borderRadius"
        :append-icon="textfield.appendIcon"
        :prepend-inner-icon="textfield.prependIcon"
      />
    </vue-draggable-resizable>
    <vue-draggable-resizable
      v-for="(textarea, n) in componentData.textareas"
      :key="'textarea' + n"
      :w="textarea.width"
      :h="textarea.height"
      :grid="[gridY, gridX]"
      @dragging="onDrag('textareas', n)"
      @resizing="onResize('textareas', n)"
      :parent="true"
    >
      <v-textarea
        @contextmenu.native="editProperties('textarea', n, $event)"
        outlined
        :label="textarea.title"
        :placeholder="textarea.placeholder"
        :style="'border-radius: '+textarea.borderRadius"
      />
    </vue-draggable-resizable>
    <vue-draggable-resizable
      v-for="(select, n) in componentData.selects"
      :key="'select' + n"
      :w="select.width"
      :h="select.height"
      :grid="[gridY, gridX]"
      @dragging="onDrag('selects', n)"
      @resizing="onResize('selects', n)"
      :parent="true"
    >
      <v-select
        @contextmenu.native="editProperties('select', n, $event)"
        :outlined="select.outlined"
        :filled="select.filled"
        :solo="select.solo"
        :label="select.title"
        :placeholder="select.placeholder"
        :items="select.values"
        :append-icon="select.appendIcon"
        :prepend-inner-icon="select.prependIcon"
        :style="'border-radius: '+select.borderRadius"
      />
    </vue-draggable-resizable>
    <vue-draggable-resizable
      v-for="(button, n) in componentData.buttons"
      :key="'button' + n"
      :w="button.width"
      :h="button.height"
      :grid="[gridY, gridX]"
      @dragging="onDrag('buttons', n)"
      @resizing="onResize('buttons', n)"
      :parent="true"
    >
      <v-btn
        @contextmenu.native="editProperties('button', n, $event)"
        :style="'border-radius: '+button.borderRadius"
        :depressed="button.depressed"
        :outlined="button.outlined"
        :text="button.text"
        :color="button.color"
        @click="onButtonClick(button)"
        :dark="button.dark"
      >
        <v-icon dark>{{button.prependIcon}}&nbsp;</v-icon>
        {{button.title}}
        <v-icon dark>&nbsp;{{button.appendIcon}}</v-icon>
      </v-btn>
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";
export default {
  data: () => ({
    components: {
      textfields: [],
      selects: [],
      textareas: [],
      buttons: [],
      radiobuttons: [],
      checkboxes: [],
      gridX: 10,
      gridY: 10
    },
    lastEmitted: { index: null, name: null }
  }),
  props: {
    textfields: {
      default: 0
    },
    textareas: {
      default: 0
    },
    selects: {
      default: 0
    },
    buttons: {
      default: 0
    },
    radiobuttons: {
      default: 0
    },
    checkboxes: {
      default: 0
    },
    component: {
      default: () => ({})
    }
  },
  methods: {
    onResize(component, index, x, y, width, height) {
      switch (component) {
        case "textfields":
          this.componentData.textfields.forEach((textfield, n) => {
            if (n === index) {
              this.componentData.textfields[index].height = height;
              this.componentData.textfields[index].width = width;
              this.componentData.textfields[index].x = x;
              this.componentData.textfields[index].y = y;
            }
          });
          break;
        case "textareas":
          this.componentData.textareas.forEach((textarea, n) => {
            if (n === index) {
              this.componentData.textareas[index].height = height;
              this.componentData.textareas[index].width = width;
              this.componentData.textareas[index].x = x;
              this.componentData.textareas[index].y = y;
            }
          });
          break;
        case "selects":
          this.componentData.selects.forEach((select, n) => {
            if (n === index) {
              this.componentData.selects[index].height = height;
              this.componentData.selects[index].width = width;
              this.componentData.selects[index].x = x;
              this.componentData.selects[index].y = y;
            }
          });
          break;
        case "buttons":
          this.componentData.buttons.forEach((select, n) => {
            if (n === index) {
              this.componentData.buttons[index].height = height;
              this.componentData.buttons[index].width = width;
              this.componentData.buttons[index].x = x;
              this.componentData.buttons[index].y = y;
            }
          });
          break;
      }
    },
    onDrag: function(component, index, x, y) {
      switch (component) {
        case "textfields":
          this.componentData.textfields[index] = {
            title: this.componentData.textfields[index].title,
            placeholder: this.componentData.textfields[index].placeholder,
            height: this.componentData.textfields[index].height,
            width: this.componentData.textfields[index].width,
            x: x,
            y: y,
            prependIcon: this.componentData.textfields[index].prependIcon,
            appendIcon: this.componentData.textfields[index].appendIcon,
            outlined: this.componentData.textfields[index].outlined,
            filled: this.componentData.textfields[index].filled,
            solo: this.componentData.textfields[index].solo,
            borderRadius: this.componentData.textfields[index].borderRadius,
            dark: this.componentData.textfields[index].dark
          };
          break;
        case "textareas":
          this.componentData.textareas[index] = {
            title: this.componentData.textareas[index].title,
            placeholder: this.componentData.textareas[index].placeholder,
            height: this.componentData.textareas[index].height,
            width: this.componentData.textareas[index].width,
            x: x,
            y: y,
            outlined: this.componentData.textareas[index].outlined,
            filled: this.componentData.textareas[index].filled,
            solo: this.componentData.textareas[index].solo,
            borderRadius: this.componentData.textareas[index].borderRadius
          };
          break;
        case "selects":
          this.componentData.selects[index] = {
            title: this.componentData.selects[index].title,
            placeholder: this.componentData.selects[index].placeholder,
            height: this.componentData.selects[index].height,
            width: this.componentData.selects[index].width,
            x: x,
            y: y,
            values: this.componentData.selects[index].values,
            outlined: this.componentData.selects[index].outlined,
            filled: this.componentData.selects[index].filled,
            solo: this.componentData.selects[index].solo,
            borderRadius: this.componentData.selects[index].borderRadius,
            prependIcon: this.componentData.selects[index].prependIcon,
            appendIcon: this.componentData.selects[index].appendIcon
          };
          break;
        case "buttons":
          this.componentData.buttons[index] = {
            height: this.componentData.selects[index].height,
            width: this.componentData.selects[index].width,
            x: x,
            y: y,
            borderRadius: this.componentData.selects[index].borderRadius,
            depressed: this.componentData.selects[index].depressed,
            outlined: this.componentData.selects[index].outlined,
            text: this.componentData.selects[index].text,
            color: this.componentData.selects[index].color,
            prependIcon: this.componentData.selects[index].prependIcon,
            appendIcon: this.componentData.selects[index].appendIcon
          };
          break;
      }
    },
    editProperties(component, index, $event) {
      $event.preventDefault();
      switch (component) {
        case "textfield":
          this.$emit(
            "openProperties",
            "TextField",
            this.componentData.textfields[index]
          );
          this.lastEmitted = { index: index, name: "textfield" };
          break;
        case "textarea":
          this.$emit(
            "openProperties",
            "TextArea",
            this.componentData.textareas[index]
          );
          this.lastEmitted = { index: index, name: "textarea" };
          break;
        case "select":
          this.$emit(
            "openProperties",
            "Select",
            this.componentData.selects[index]
          );
          this.lastEmitted = { index: index, name: "select" };
          break;
        case "button":
          this.$emit(
            "openProperties",
            "Button",
            this.componentData.buttons[index]
          );
          this.lastEmitted = { index: index, name: "button" };
          break;
      }
    }
  },
  computed: {
    componentData: {
      get() {
        return this.components;
      },
      set(value) {
        this.components = value;
      }
    }
  },
  mounted() {
    const container = document.getElementById("container-div");
    this.gridY = container.offsetHeight / 10;
    this.gridX = container.offsetWidth / 12;
  },
  watch: {
    component: function(newVal) {
      console.log(newVal);
      let temp;
      switch (this.lastEmitted.name) {
        case "textfield":
          temp = this.componentData.textfields.filter(textfield => {
            return textfield;
          });
          this.componentData.textfields = [];
          this.componentData.textfields.push(...temp);
          break;
        case "textarea":
          temp = this.componentData.textareas.filter(textarea => {
            return textarea;
          });
          this.componentData.textareas = [];
          this.componentData.textareas.push(...temp);
          break;
        case "select":
          temp = this.componentData.selects.filter(select => {
            return select;
          });
          this.componentData.selects = [];
          this.componentData.selects.push(...temp);
          break;
        case "button":
          temp = this.componentData.buttons.filter(button => {
            return button;
          });
          this.componentData.buttons = [];
          this.componentData.buttons.push(...temp);
          break;
      }
    },
    textfields: function(newVal) {
      for (let index = 0; index < this.textfields; index += 1) {
        if (this.components.textfields.length <= index) {
          this.components.textfields.push({
            title: "Enter Title Here",
            placeholder: "",
            type: "text",
            height: 65,
            width: 200,
            x: 150,
            y: 150,
            outlined: true,
            filled: false,
            solo: false,
            borderRadius: "15px",
            prependIcon: "",
            appendIcon: ""
          });
        }
      }
    },
    textareas: function(newVal) {
      for (let index = 0; index < this.textareas; index += 1) {
        if (this.components.textareas.length <= index) {
          this.components.textareas.push({
            title: "",
            placeholder: "",
            height: 150,
            width: 200,
            x: 150,
            y: 150
          });
        }
      }
    },
    selects: function(newVal) {
      for (let index = 1; index <= this.selects; index += 1) {
        if (this.components.selects.length <= index) {
          this.components.selects.push({
            title: "",
            placeholder: "",
            height: 65,
            width: 200,
            x: 150,
            y: 150,
            values: [],
            outlined: true,
            filled: false,
            solo: false,
            borderRadius: "15px",
            prependIcon: "",
            appendIcon: ""
          });
        }
      }
    },
    buttons: function(newVal) {
      for (let index = 1; index <= this.buttons; index += 1) {
        if (this.components.buttons.length <= index) {
          this.components.buttons.push({
            title: "Click me!",
            height: 65,
            width: 150,
            x: 150,
            y: 150,
            borderRadius: "15px",
            depressed: true,
            outlined: false,
            text: false,
            color: "grey darken-4",
            prependIcon: "",
            appendIcon: "",
            dark: true
          });
        }
      }
    }
  }
};
</script>
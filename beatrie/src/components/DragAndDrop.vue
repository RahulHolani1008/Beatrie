<template>
  <div class="window-height">
    <vue-draggable-resizable
      v-for="(textfield, n) in componentData.textfields"
      :key="'textfield'+n"
      :w="textfield.width"
      :h="textfield.height"
      :grid="[12,12]"
      @dragging="onDrag('textfields',n)"
      @resizing="onResize('textfields',n)"
      :parent="true"
    >
      <v-text-field
        @contextmenu.native="editProperties('textfield', n, $event)"
        outlined
        :type="textfield.type"
        :label="textfield.title"
        :placeholder="textfield.placeholder"
        class="rounded-lg"
      />
    </vue-draggable-resizable>
    <vue-draggable-resizable
      v-for="(textarea, n) in componentData.textareas"
      :key="'textarea'+n"
      :w="textarea.width"
      :h="textarea.height"
      :grid="[12,12]"
      @dragging="onDrag('textareas',n)"
      @resizing="onResize('textareas',n)"
      :parent="true"
    >
      <v-textarea
        @contextmenu.native="editProperties('textarea', n, $event)"
        outlined
        :label="textarea.title"
        :placeholder="textarea.placeholder"
        class="rounded-lg"
      />
    </vue-draggable-resizable>
    <vue-draggable-resizable
      v-for="(select, n) in componentData.selects"
      :key="'select'+n"
      :w="select.width"
      :h="select.height"
      :grid="[12,12]"
      @dragging="onDrag('selects',n)"
      @resizing="onResize('selects',n)"
      :parent="true"
    >
      <v-select
        @contextmenu.native="editProperties('select', n, $event)"
        outlined
        :label="select.title"
        :placeholder="select.placeholder"
        class="rounded-lg"
      />
    </vue-draggable-resizable>
  </div>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";
export default {
  data: () => ({
    components: { textfields: [], selects: [], textareas: [] },
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
            y: y
          };
          break;
        case "textareas":
          this.componentData.textareas[index] = {
            title: this.componentData.textareas[index].title,
            placeholder: this.componentData.textareas[index].placeholder,
            height: this.componentData.textareas[index].height,
            width: this.componentData.textareas[index].width,
            x: x,
            y: y
          };
          break;
        case "selects":
          this.componentData.selects[index] = {
            title: this.componentData.selects[index].title,
            placeholder: this.componentData.selects[index].placeholder,
            height: this.componentData.selects[index].height,
            width: this.componentData.selects[index].width,
            x: x,
            y: y
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
  watch: {
    component: function(newVal) {
      console.log(newVal);
      switch (this.lastEmitted.name) {
        case "textfield":
          this.componentData.textfields.push("yes");
          this.componentData.textfields.pop();
      }
    },
    textfields: function(newVal) {
      for (let index = 0; index < this.textfields; index += 1) {
        if (this.components.textfields.length <= index) {
          this.components.textfields.push({
            title: "",
            placeholder: "",
            type: "text",
            height: 65,
            width: 200,
            x: 150,
            y: 150
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
      for (let index = 0; index < this.selects; index += 1) {
        if (this.components.selects.length <= index) {
          this.components.selects.push({
            title: "",
            placeholder: "",
            height: 65,
            width: 200,
            x: 150,
            y: 150
          });
        }
      }
    }
  }
};
</script>
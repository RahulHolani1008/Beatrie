import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css';
import '@mdi/font/css/materialdesignicons.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#008080',
        secondary: '#35b5ac',
        accent: '#f16d6d',
        error: '#f16d6d',
        info: '#f18c8d',
        success: '#35b5ac',
        warning: '#f18c8d',
        theme: '#ffffff'
      },
      dark: {
        primary: '#008080',
        secondary: '#35b5ac',
        accent: '#f16d6d',
        error: '#f16d6d',
        info: '#f18c8d',
        success: '#35b5ac',
        warning: '#f18c8d',
        theme: '#333333'
      }
    },
  },
});

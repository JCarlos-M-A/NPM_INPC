import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // Importo Vuetify 
 
Vue.config.productionTip = false
 
Vue.use(vuetify);

new Vue({
  vuetify, // Vuetify 
  render: h => h(App)
}).$mount('#app')
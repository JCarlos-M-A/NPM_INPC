import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // Importo Vuetify 
import router from 'vue-router'
 
Vue.config.productionTip = false
 
Vue.use(vuetify);
Vue.use(router);

new Vue({
  vuetify, // Vuetify 
  render: h => h(App)
}).$mount('#app')
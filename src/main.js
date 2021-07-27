import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'; // Importo Vuetify 
import router from './router'

Vue.config.productionTip = false

Vue.use(vuetify);
Vue.use(router);

new Vue({
  // Vuetify 
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
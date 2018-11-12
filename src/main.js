import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VeeValidate from 'vee-validate';  // Add this
Vue.use(VeeValidate);  

new Vue({
  router,               // Add this line
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false
 

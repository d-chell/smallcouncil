import Vue from 'vue'
import App from './App.vue'
import nav from './nav.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

new Vue({
  vuetify,
  render: h => h(nav)
}).$mount('#nav')

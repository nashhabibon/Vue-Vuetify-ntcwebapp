import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import sidebarnav from '@/components/SideBarNav.vue'
import '@/scss/sidebarnav.scss'
Vue.config.productionTip = false

Vue.component('side-nav', sidebarnav);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

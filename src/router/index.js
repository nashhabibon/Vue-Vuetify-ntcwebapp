import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Purchase from '../forms/Purchase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
 
  {
    path: '/purchase',
    name: 'purchase',
    component:Purchase
  }

]

const router = new VueRouter({
  routes
})

export default router

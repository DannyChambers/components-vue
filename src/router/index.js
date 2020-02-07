import Vue from 'vue'
import VueRouter from 'vue-router'

import Prototypes        from '../components/05-prototypes/index.vue'
import PrototypeAlpha1  from '../components/05-prototypes/prototype-alpha_1/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Prototypes
  },
  {
    path: '/prototype-alpha-1',
    name: 'prototype-alpha_1',
    component: PrototypeAlpha1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Prototypes         from '@/prototypes/index.vue'
import TestGround         from '@/prototypes/test-ground/index.vue'
import Milton             from '@/prototypes/milton/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Prototypes
  },
  {
    path: '/test-ground',
    name: 'TestGround',
    component: TestGround
  },
  {
    path: '/milton',
    name: 'Milton',
    component: Milton
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
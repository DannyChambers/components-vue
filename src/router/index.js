import Vue from 'vue'
import VueRouter from 'vue-router'

import Prototypes         from '@/prototypes/index.vue'
import TestGround         from '@/prototypes/test-ground/index.vue'
import Milton             from '@/prototypes/milton/index.vue'

import Alpha1             from '@/prototypes/alpha-1/index.vue'
import Alpha1LogIn        from '@/prototypes/alpha-1/log-in/index.vue'
import Alpha1Home         from '@/prototypes/alpha-1/home/index.vue'

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
  },
  {//Alpha 1 / Splash
    path: '/alpha-1',
    name: 'Alpha1',
    component: Alpha1
  },
  {//Alpha 1 / Log in
    path: '/alpha-1/log-in',
    name: 'Alpha1LogIn',
    component: Alpha1LogIn
  },
  {//Alpha 1 / Home
    path: '/alpha-1/home',
    name: 'Alpha1Home',
    component: Alpha1Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
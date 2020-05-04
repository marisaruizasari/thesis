import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48aaf295 = () => interopDefault(import('../pages/old-home.vue' /* webpackChunkName: "pages/old-home" */))
const _6463727e = () => interopDefault(import('../pages/three.vue' /* webpackChunkName: "pages/three" */))
const _2d058ba8 = () => interopDefault(import('../pages/two.vue' /* webpackChunkName: "pages/two" */))
const _dda3889c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/old-home",
    component: _48aaf295,
    name: "old-home"
  }, {
    path: "/three",
    component: _6463727e,
    name: "three"
  }, {
    path: "/two",
    component: _2d058ba8,
    name: "two"
  }, {
    path: "/",
    component: _dda3889c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

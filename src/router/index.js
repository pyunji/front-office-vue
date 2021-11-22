import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import menu01 from "./menu01"
import menu02 from "./menu02"
import menu03 from "./menu03"
import menu04 from "./menu04"
import menu05 from "./menu05"
import menu06 from './menu06'
import menu07 from './menu07'
import list from './List'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../Index.vue'),
    children: [
      {
        path: '/',
        name: Home,
        component: Home
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../NoneHFIndex'),
    children: [
      {
        path:'/orderform',
        name: 'orderform',
        component: () => import(/* webpackChunkName: "orderform" */ '../views/OrderForm'),
      }
    ]
  },
  ...menu01,
  ...menu02,
  ...menu03,
  ...menu04,
  ...menu05,
  ...menu06,
  ...menu07,
  ...list,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

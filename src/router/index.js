import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Best from '../views/Best.vue'
import menu01 from "./menu01"
import menu02 from "./menu02"
import menu03 from "./menu03"
import menu04 from "./menu04"
import menu05 from "./menu05"
import menu06 from './menu06'
import menu07 from './menu07'
import product from './product'
import shoppingbag from './shoppingbag'
import list from './list'
import order from './order'

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
      },
      {
        path: '/main-new',
        name: New,
        component: New
      },
      {
        path: '/main-best',
        name: Best,
        component: Best
      },
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
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../orderIndex'),
    children: [
      {
        path:'/order/ordercomplete',
        name: 'ordercomplete',
        component: () => import(/* webpackChunkName: "orderform" */ '../views/order/orderComplete'),
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../productIndex'),
    children: [
      {
        path:'/product/productdetail',
        name: 'productdetail',
        component: () => import(/* webpackChunkName: "orderform" */ '../views/product/productDetail'),
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
  ...product,
  ...shoppingbag,
  ...list,
  ...order,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

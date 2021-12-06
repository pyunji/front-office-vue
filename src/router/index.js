import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Best from '../views/Best.vue'
import product from './product'
import shoppingbag from './shoppingbag'
import order from './order'
import login from '../views/login.vue'
import member from './member'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')    
  },
  {
    path:'/join',
    name:'join',
    component: () => import(/* webpackChunkName: "join" */ '../views/join.vue')    
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../Index.vue'),
    children: [
      {
        path:"",
        components: {
          default: Home,
          new: New,
          best: Best,
          home: Home,
        }
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../ListIndex.vue'),
    children: [
      {
        path:"/product/list",
        name: 'list',
        component: () => import(/* webpackChunkName: "list" */ '../views/product/List'),
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
        props: true
      },
      // {
      //   path:'/cart',
      //   name: 'Cart',
      //   component: () => import(/* webpackChunkName: "cart" */ '../views/Cart'),
      // }
    ]
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../orderIndex'),
    children: [
      {
        path:'/order/orderList',
        name: 'orderList',
        component: () => import(/* webpackChunkName: "orderform" */ '../views/order/orderList'),
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
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../cartIndex'),
    children: [
      {
        path:'/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "orderform" */ '../views/Cart'),
      }
    ]
  },
  ...product,
  ...shoppingbag,
  ...order,
  ...member,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

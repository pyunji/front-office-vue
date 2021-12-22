import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Best from '../views/Best.vue'
import Event from '../views/Event.vue'
import product from './product'
import order from './order'
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
          event: Event,
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
    component: () => import(/* webpackChunkName: "" */ '../orderIndex'),
    children: [
      {
        path:'/member/mypage',
        name: 'myPage',
        component: () => import(/* webpackChunkName: "orderform" */ '../views/member/myPage'),
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
        props: true
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
  // ...cart,
  ...order,
  ...member,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

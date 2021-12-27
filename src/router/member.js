import Product from '../views/wishlist/Product.vue'
import Brand from '../views/wishlist/Brand.vue'
import Order from '../views/order/orderList.vue'
import Coupon from '../views/mypage/Coupon.vue'
//import Mileage from '../views/mypage/Mileage.vue'
import GradeMileage from '../views/mypage/GradeMileage.vue'

export default [
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../myPageIndex'),
    children: [
      {
        path:"/mypage",
        components: {
          default:Order,
          order:Order,
          coupon:Coupon,
          //mileage:Mileage,
          gradeMileage:GradeMileage
        }
      }
    ]
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../wishListIndex'),
    children: [
      {
        path:"/wishlist",
        components: {
          default:Product,
          product:Product,
          brand:Brand,
        }
      }
    ]
  },
  {
    path: '/checkPW',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../views/mypage/CheckPW'),
  },
  {
    path: '/updateForm',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../views/mypage/updateForm'),
  },
  {
    path: '/',
    name: '',
    component: () => import(/* webpackChunkName: "" */ '../EventIndex'),
    children: [
      {
        path:'/event',
        name: 'event',
        component: () => import(/* webpackChunkName: "" */ '../views/EventDetail'),
      }
    ]
  },
]
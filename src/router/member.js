//나중에 뺄것
import Product from '../views/wishlist/Product.vue'
import Brand from '../views/wishlist/Brand.vue'

export default [
  {
    path: "/member/mypage",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/member/myPage'),

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
]
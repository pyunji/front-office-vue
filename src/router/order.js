export default [
  {
    path: "/order/ordercomplete",
    name: 'ordercomplete',
    component: () => import(/* webpackChunkName: "menu02" */ '../views/order/orderComplete'),
    props: true
  },
  {
    path: "/order/orderlist",
    name: 'orderlist',
    component: () => import(/* webpackChunkName: "menu02" */ '../views/order/orderList'),

  },
]
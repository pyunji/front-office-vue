export default [

  {
    path: "/order/orderlist",
    name: 'orderlist',
    component: () => import(/* webpackChunkName: "menu02" */ '../views/order/orderList'),

  },
]
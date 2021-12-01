export default [
  {
    path: "/order/ordercomplete",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/order/orderComplete'),

  },
  {
    path: "/order/ordercheck",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/order/orderCheck'),

  },
]
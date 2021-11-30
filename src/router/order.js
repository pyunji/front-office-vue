export default [
  {
    path: "/order/ordercomplete",
    name: 'ordercomplete',
    component: () => import(/* webpackChunkName: "menu02" */ '../views/order/orderComplete'),
    props: true
  },
]
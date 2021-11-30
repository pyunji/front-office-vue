export default [
  {
    path: "/shoppingbag/shoppingbag",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/shoppingbag/shoppingbag'),

  },
  {
    path: "/cart",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/Cart2'),

  },
]
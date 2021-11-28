export default [
  {
    path: "/product/productdetail",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/product/productDetail'),

  },
  {
    path: "/product/categorylist/:d1name/:d2name/:d3name",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/product/categoryList'),

  },
  {
    path: "/product/list/:d1name/:d2name/:d3name",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/product/List'),

  },
]
export default [
  {
    path: "/product/productdetail",
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "product" */ '../views/product/productDetail'),
  },
  {
    path: "/product/categorylist/:d1name/:d2name/:d3name",
    component: () => import(/* webpackChunkName: "product" */ '../views/product/categoryList'),

  },
  {
    // path: "/product/list/:d1name/:d2name/:d3name",
    path: "/product/list",
    component: () => import(/* webpackChunkName: "product" */ '../views/product/List'),

  },
]
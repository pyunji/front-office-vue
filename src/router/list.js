export default [
  {
    path: "/list/list",
    component: () => import(/* webpackChunkName: "list" */ '../views/List/List'),
  },
  {
    path: "/list/best",
    component: () => import(/* webpackChunkName: "list" */ '../views/List/Best'),
  }
];
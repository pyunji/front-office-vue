export default [
  {
    path: "/menu06/exam01rootstate",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu06/Exam01RootState'),
  },
  {
    path: "/menu06/exam02counterstate",
    component: () => import(/* webpackChunkName: "menu06" */ '../views/menu06/Exam02CounterState'),
  }
];
export default [
  {
    path: "/member/mypage",
    component: () => import(/* webpackChunkName: "menu02" */ '../views/member/myPage'),

  },
]
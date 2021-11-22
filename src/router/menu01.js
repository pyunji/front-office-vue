export default [
  {
    path: "/menu01/exam01view",
    name: "menu01_exam01view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam01View')
  },
  {
    path: "/menu01/exam02view",
    name: "menu01_exam02view",
    // 해당 폴더의 index.vue를 import함
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam02View')
  },
  {
    path: "/menu01/exam03view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam03View'),
    children: [
      {
        // 상대경로로 작성
        path:"subacomponent",
        component: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent')
      },
      {
        // 상대경로로 작성
        path:"subbcomponent",
        component: () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent')
      },

    ]
  },
  {
    path: "/menu01/exam04view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam04View'),
    children: [
      {
        path: "",
        components: {
          default:  () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubAComponent'),
          rv1:      () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubBComponent'),
          rv2:      () => import(/* webpackChunkName: "menu01" */ '../components/menu01/SubCComponent')
        }
      }
    ]
  },
  {
    path: "/menu01/exam05view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam05View'),
  },
  {
    path: "/menu01/exam06view/:bno", // 동적 세그먼트 
    name:"menu01_exam06view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam06View'),
    props:true
  },
  {
    path: "/menu01/exam07view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam07View'),
    props: {
      kind:"freeboard",
      color:"blue",
    },
  },
  {
    path: "/menu01/exam08view",
    name:"menu01_exam08view",
    component: () => import(/* webpackChunkName: "menu01" */ '../views/menu01/Exam08View'),
    props: (route) => ({
      kind: route.query.kind,
      color: route.query.color
    }),
  },
]
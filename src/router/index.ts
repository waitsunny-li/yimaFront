import {createRouter, createWebHashHistory, RouteRecordNormalized, RouteRecordRaw} from "vue-router"
import {useBreadcurmStore} from "@/store/index"
import {ROOTPATH} from "@/config/constant"
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 })

const Login = () => import("@/views/login/Login.vue")
const Layout = () => import("@/layout/Index.vue")

const DashBoard = () => import("@/views/dashboard/Dashboard.vue")

// 群活码管理
const AddGrcode = () => import("@/views/gcodesystem/Addgcode.vue")
const GrcodeSystem = () => import("@/views/gcodesystem/Grcodesystem.vue")

// 客服码管理
const AddKcode = () => import("@/views/kcodesystem/Addkcode.vue")
const KcodeSystem = () => import("@/views/kcodesystem/Kcodesystem.vue")

const routes:Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component:Layout,
    redirect: ROOTPATH + '/grcode_system',
    children: [
      
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录"
    }
  },
  {
    path: ROOTPATH + '/dashboard',
    component: Layout,
    meta: {
      title: "数据概况"
    },
    children: [
      {
        path: '/dashboard',
        name: "DashBoard",
        component: DashBoard,
        meta: {
          title: "数据概况"
        }
      },
    ]
  },
  {
    path: ROOTPATH + '/grcode_system',
    component: Layout,
    meta: {
      title: "群活码",
    },
    children: [
      {
        path: '/add_grcode',
        name: "AddGrcode",
        component: AddGrcode,
        meta: {
          title: "创建群活码",
          transition: "animate__fadeIn"
        }
      },
      {
        path: '/grcode_system_list',
        name: "GrcodeSystem",
        component: GrcodeSystem,
        meta: {
          title: "群活码管理",
          transition: "animate__fadeIn"
        }
      }
    ]
  },
  {
    path: ROOTPATH + '/kcode_system',
    component: Layout,
    meta: {
      title: "客服码"
    },
    children: [
      {
        path: '/add_kcode',
        name: "AddKcode",
        component: AddKcode,
        meta: {
          title: "创建客服码"
        }
      },
      {
        path: '/kcode_system_list',
        name: "KcodeSystem",
        component: KcodeSystem,
        meta: {
          title: "客服码管理"
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((to, from) => {
  let breadList = to.matched.reduce((per: Set<string>, cur: RouteRecordNormalized) => {
    per.add(cur.meta?.title as string)
    return per
  }, new Set())
  const breadcurmStore = useBreadcurmStore()
  breadcurmStore.change([...breadList])
  document.title = to.meta?.title as string
  NProgress.done();
})

export default router
import {createRouter, createWebHashHistory, RouteRecordNormalized, RouteRecordRaw} from "vue-router"
import LoadingBarVue from "@/components/common/loadingbar/LoadingBar.vue"
import { createVNode, render } from "vue"
import pinia from "@/store/store"
import {useBreadcurmStore} from "@/store/index"
import {ROOTPATH} from "@/config"

const breadcurmStore = useBreadcurmStore(pinia)

// 过渡效果
const loadBarVnode = createVNode(LoadingBarVue)
render(loadBarVnode, document.body)


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
      title: "群活码"
    },
    children: [
      {
        path: '/add_grcode',
        name: "AddGrcode",
        component: AddGrcode,
        meta: {
          title: "创建群活码"
        }
      },
      {
        path: '/grcode_system_list',
        name: "GrcodeSystem",
        component: GrcodeSystem,
        meta: {
          title: "群活码管理"
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
  loadBarVnode.component?.exposed?.startLoading()
  next()
})

router.afterEach((to, from) => {
  let breadList = to.matched.reduce((per: Set<string>, cur: RouteRecordNormalized) => {
    per.add(cur.meta?.title as string)
    return per
  }, new Set())
  breadcurmStore.change([...breadList])
  document.title = to.meta?.title as string
  loadBarVnode.component?.exposed?.endLoading()
})

export default router
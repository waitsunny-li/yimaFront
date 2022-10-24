<template>
  <div class='menu-inner'>
    <el-menu 
      default-active="/add_grcode"
      :default-openeds="defaultOpends" class="el-menu-vertical-demo"
      text-color="#B7B7BE"
      active-text-color="#fff"
      :collapse="isCollapse" 
      @open="handleOpen" 
      @close="handleClose" background-color="#222832"
      router>
        <MenuItem :datas="menuList">
      </MenuItem>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import MenuItem from "./MenuItem.vue"
import { ref, reactive } from 'vue'
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";

type Meta = {
  title: string
  icon: string
  roles: string[]
  parentId?: number
}

type MenuObj = {
  path: string
  component: string
  meta: Meta,
  alwaysShow?: boolean
  name?: string
  children?: Array<MenuObj> | null
}

let menuList = reactive<MenuObj[]>([
  {
    path: "/dashboard",
    component: "Layout",
    meta: {
      title: "数据概况",
      icon: "icon-yima-zhushujushenqing-shujufenxi-02",
      roles: ["sys:manage"]
    },
    children: []
  },
  {
    path: "/grcode_system",
    component: "Layout",
    alwaysShow: true,
    name: "GrcodeSystem",
    meta: {
      title: "群活码管理",
      icon: "icon-yima-yonghu2",
      roles: ["sys:manage"],
      parentId: 0
    },
    children: [
      {
        path: "/add_grcode",
        component: "AddGrcode",
        alwaysShow: false,
        name: "AddGrcode",
        meta: {
          title: "创建群活码",
          icon: "ZoomOut",
          roles: ["sys:manage"],
          parentId: 17
        }
      },
      {
        path: "/grcode_system_list",
        component: "GrcodeSystem",
        alwaysShow: false,
        name: "GrcodeSystem",
        meta: {
          title: "群活码管理",
          icon: "ZoomOut",
          roles: ["sys:GrcodeSystem"],
          parentId: 17
        }
      },
    ]
  },
  {
    path: "/kcode_system",
    component: "Layout",
    alwaysShow: true,
    name: "KcodeSystem",
    meta: {
      title: "客服码管理",
      icon: "icon-yima-kefu",
      roles: ["sys:manage"],
      parentId: 0
    },
    children: [
      {
        path: "/add_kcode",
        component: "AddKcode",
        alwaysShow: false,
        name: "AddKcode",
        meta: {
          title: "创建客服码",
          icon: "ZoomOut",
          roles: ["sys:manage"],
          parentId: 34
        }
      },
      {
        path: "/kcode_system_list",
        component: "KcodeSystem",
        alwaysShow: false,
        name: "KcodeSystem",
        meta: {
          title: "客服码管理",
          icon: "ZoomOut",
          roles: ["sys:KcodeSystem"],
          parentId: 34
        }
      }
    ]

  }
])

const defaultOpends: string[] = ['/grcode_system', '/kcode_system']

const route = useRoute()
const activeIndex = computed(() => {
  console.log("=====", route.path)
  return route?.path
})

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang='less' scoped>
.menu-inner {
  padding: 0 10px;
  padding-top: 30px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

:deep(.el-menu) {
  border-right: 0;
}
</style>
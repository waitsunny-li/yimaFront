import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia"
import router from "@/router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/normal.less'
import '@/assets/css/font.less'
import 'nprogress/nprogress.css'
import 'animate.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { typeshow } from '@/config/directives/index'

const app = createApp(App)

app.use(ElementPlus, {locale: zhCn,}).use(createPinia()).use(router).mount('#app')

app.directive('typeshow', typeshow)



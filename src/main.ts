import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/store/store'
import router from "@/router"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/normal.less'
import '@/assets/css/font.less'

createApp(App).use(ElementPlus).use(pinia).use(router).mount('#app')

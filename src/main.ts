import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

//挂载路由配置
createApp(App).use(router).use(ElementPlus).mount('#app')

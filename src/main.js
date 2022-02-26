import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'

import router from './router/index.js'

import store from './store/index.js'

import { message } from '@/utils/resetMessage.js' 

import BinDatav from 'bin-datav'
import 'bin-datav/lib/styles/index.css'




const app = createApp(App)
app.config.globalProperties.$msg = message;

app.use(BinDatav)
app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')


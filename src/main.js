import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueRouter from 'vue-router'
import TDesign from 'tdesign-vue-next'

const myapp = createApp(App)
myapp.use(VueRouter)
myapp.use(router)
myapp.use(TDesign)
myapp.mount('#app')



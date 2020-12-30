import Vue from 'vue'
import VueRouter from 'vue-router'
// 在VueCLI 创建的项目中 @ 表示 src 目录 
// 他是 src 目录的路径别名
// 好处：他不是当前文件目录影响
// 注意：@就是 src 路径，后面别忘了写那个斜杠
// 建议：如果加载的资源路径就在当前目录下，那就正常写
//       如果需要进父级径查找的都使用 @
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router

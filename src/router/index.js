import Vue from 'vue'
import VueRouter from 'vue-router'

// const CreateArticle = () => { import ('../views/CreateArticle') }
// const ListArticle = () => { import ('../views/ListArticle') }
import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle'
import EditArticle from '../views/EditArticle'

// 1.安装插件
Vue.use(VueRouter)
  // 2.创建路由
const routes = [{
    path: '/',
    name: 'home',
    redirect: '/articles/index'
  },
  {
    path: '/articles/index',
    component: ListArticle
  },
  {
    path: '/articles/create',
    component: CreateArticle
  },
  {
    path: '/articles/:id/edit',
    component: EditArticle
  }
]

const router = new VueRouter({
    routes,
    mode: 'hash',
  })
  // 3.导出
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import User from '../views/sys/User.vue'
import Role from '../views/sys/Role.vue'
import Menu from '../views/sys/Menu.vue'
import UserCenter from "../views/UserCenter.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/Index',
        name:'Index',
      component:Index
      }, {
        path:'/userCenter',
        name:'UserCenter',
        component: () => import('@/views/UserCenter.vue')
      },
      {
        path:'/sys/role',
        name:'SysRole',
      component:Role
      },
      {
        path:'/sys/menu',
        name:'SysMenu',
      component:Menu
      },
      {
        path:'/sys/Users',
        name:'SysUser',
      component:User
      }
    ]
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    
  },
  {
    path: '/login',
    name: 'Login',
 
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

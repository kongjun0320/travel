import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: ()=>import('@/views/home/Home')
    },
    {
      path:'/city',
      name:'city',
      component:()=>import('@/views/city/City')
    },
    {
      path:'/detail',
      name:'detail',
      component:()=>import('@/views/detail/Detail')
    }
  ]
})

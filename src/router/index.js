import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },


    {
      path: '/home',
      redirect:'/lovetime',
      name: 'Home',
      component:()=>import('../views/Home'),
      children:[
        {
          path:'/silkbag',
          name:'Slikbag',
          component:()=>import('../views/Silkbag')
        },
        {
          path:'/life',
          name:'Life',
          component:()=>import('../views/Life')
        },
        {
          path:'/lovetime',
          name:'LoveTime',
          component:()=>import('../views/LoveTime')
        },
        {
          path:'/message',
          name:'Message',
          component:()=>import('../views/Message')
        },
        {
          path:'/my',
          name:'My',
          component:()=>import('../views/My')
        },

      ]

    }
  ]
})

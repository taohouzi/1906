import Vue from 'vue'
import Router from 'vue-router'


//解决router-link点击相同路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




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
          redirect:'/attentionno',
          component:()=>import('../views/Life'),
          children:[
            {
              path:'/attentionno',
              name:'Attentionno',
              component:()=>import('../views/Attentionno')
            },

            {
              path:'/attention',
              name:'Attention',
              component:()=>import('../views/Attention')
            }
          ]

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

    },
    {
      path:'/community',
      name:'Community',
      redirect:'/beiyun',
      component:()=>import('../views/Community'),
      children:[
        {
          path:'/beiyun',
          name:'Beiyun',
          component:()=>import('../views/Beiyun'),
        },
        {
          path:'/yunqi',
          name:'Yunqi',
          component:()=>import('../views/Yunqi'),
        },
        {
          path:'/yuer',
          name:'Yuer',
          component:()=>import('../views/Yuer'),
        },
        {
          path:'/jiachang',
          name:'Jiachang',
          component:()=>import('../views/Jiachang'),
        },
        {
          path:'/lvxing',
          name:'Lvxing',
          component:()=>import('../views/Lvxing'),
        },

      ]
    },
    {
      path:'/goods',
      name:'Goods',
      component:()=>import('../views/Goods')
    },
    {
      path:'/baobaobb',
      name:'Baobaobb',
      component:()=>import('../views/Baobaobb')
    },
    {
      path:'/clean',
      name:'Clean',
      component:()=>import('../views/Clean')
    },
    {
      path:'/feed',
      name:'Feed',
      component:()=>import('../views/Feed')
    },
    {
      path:'/children',
      name:'Children',
      component:()=>import('../views/Children')
    },
    {
      path:'/more',
      name:'More',
      component:()=>import('../views/More')
    },
    {
      path:'/buy/:id',
      name:'Buy',
      component:()=>import('../views/Buy')
    },
    {
      path:'/cartlist',
      name:'Cartlist',
      component:()=>import('../views/Cartlist')
    }
  ]
})

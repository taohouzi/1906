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
      path: '/',
      name: 'HelloWorld',
      redirect:'/Welcome',// 直接跳转欢迎页
      component: ()=>import('../views/Welcome')
    },
    // 我的
    {
      path:'/Welcome',
      name:'Welcome', // 欢迎页
      component:()=>import('@/views/Welcome')
    },
    {
      path:'/LoginHome',
      name:'LoginHome',//登录与注册
      component:()=>import('@/views/LoginHome'),
      children:[
        {
          path:'/Login',
          name:'Login',// 登录
          component:()=>import('@/views/Login')
        },
        {
          path:'/Register',
          name:'Register',// 注册
          component:()=>import('@/views/Register')
        },
      ]
    },
    {
      path:'/Album',
      name:'Album',// 制作相册
      component:()=>import('@/views/Album')
    },
    {
      path:'/Vipcores',
      name:'Vipcores',// 会员中心
      component:()=>import('@/views/Vipcores')
    },
    {
      path:'/Collection',
      name:'Collection',  //  我的收藏
      component:()=>import('@/views/Collection')
    },
    {
      path:'/cartlist',
      name:'Cart',    // 购物车
      component:()=>import('@/views/Cartlist')
    },
    {
      path:'/Myorder',
      name:'Myorder', // 我的订单
      component:()=>import('@/views/Myorder')
    },
    {
      path:'/Coupon',
      name:'Coupon', // 优惠卷
      component:()=>import('@/views/Coupon')
    },
    {
      path:'/Setting',
      name:"Setting", //设置中心
      component:()=>import("@/views/Setting")
    },
    {
      path:'/Address',
      name:"Address", //收货地址
      component:()=>import("@/views/Address")
    },
    {
      path:'/Edit',
      name:'Edit',///地址设置
      component:()=>import("@/views/Edit")
    },
    {
      path: '/home',
      redirect: '/lovetime',  //时光记
      name: 'Home',
      component: () => import('../views/Home'),
      children: [
        {
          path: '/silkbag', //锦囊
          name: 'Slikbag',
          component: () => import('../views/Silkbag')
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
          path: '/lovetime',  //时光记
          name: 'LoveTime',
          component: () => import('../views/LoveTime')
        },
        {
          path: '/message', // 消息
          name: 'Message',
          component: () => import('../views/Message')
        },
        {
          path:'/Mytest',
          name:'Mytest',        // 我的
          component:()=>import('@/views/Mytest'),
        },
      ]
    },
    // 锦囊
    {
      path: "/food",  // 食谱
      name: 'Food',
      component: () => import('../views/Food')
    },
    {
      path: "/canEat",  //营养食谱
      name: 'CanEat',
      component: () => import('../views/CanEat.vue')
    },
    {
      path: "/nutritionRecipes",    // 孕早期
      name: 'NutritionRecipes',
      component: () => import('../views/NutritionRecipes.vue')
    },
    {
      path: "/eat",   // 能不能吃
      name: 'Eat',
      component: () => import('../views/Eat.vue')
    },
    {
      path:'/collect',    // 我的收藏
      name:'Collect',
      component:()=>import('../views/Collect.vue')
    },
    {
      path:'/babyeat',    // 建议辅食
      name:'Babyeat',
      component:()=>import('../views/Babyeat.vue')
    },
    {
      path:'/questions',
      name:'Questions',   // 百科
      component:()=>import('../views/Questions.vue')
    },
    {
      name:'Encyclopedia',
      path:'/encyclopedia',   // 问答
      component:()=>import('../views/Encyclopedia.vue')
    },
    {
      name:'Sweet',
      path:'/sweet',  // 酒酿
      component:()=>import('../views/Sweet.vue')
    },
    // 时光记
    {
      path: '/record',
      name: 'Record',   // 成长记录
      component: () => import('../views/Record')
    },
    {
      path: '/photo',
      name: 'Photo',    // 时光机
      component: () => import("../views/Photo")
    },
    {
      path: '/lead',
      name: "Lead",   // 点击照片
      component: () => import('../views/Lead')
    },
    {
      path: '/clickPhoto',
      name: 'ClickPhoto',
      component: () => import('../views/ClickPhoto')
    },
    {
      path: '/all',
      name: 'All',    // 成就
      component: () => import('../views/All')
    },
    // 生活
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

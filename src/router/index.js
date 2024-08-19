import { createRouter, createWebHistory } from 'vue-router'
import XiangQing from '@/views/xiangQing.vue'
import BeiDou from '@/views/BeiDou.vue'

import Home from '@/views/Home.vue'
import SocialView from '@/views/SocialView.vue'
import SchoolView from '@/views/SchoolView.vue'
import DengLu from '@/views/DengLu.vue'
import RenCai from '@/views/renCai.vue'
import RenWen from '@/views/renWen.vue'
import WenHua from '@/views/wenHua.vue'
import YuanGong from '@/views/yuanGong.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/beidou',
      component: BeiDou
    },
    {
      path: '/xiangqing',
      component: XiangQing
    },

    {
      path: '/social',
      component: SocialView
    },
    {
      path: '/school',
      component: SchoolView
    },
    {
      path: '/login',
      component: DengLu
    },
    {
      path: '/',
      component: Home
    },
    {
      path: '/rencai',
      component: RenCai
    },
    {
      path: '/renwen',
      component: RenWen
    },
    {
      path: '/wenhua',
      component: WenHua
    },
    {
      path: '/yuangong',
      component: YuanGong
    }
  ]
})

export default router

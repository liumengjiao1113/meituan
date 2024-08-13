import XiangQing from '@/views/xiangQing.vue'
import BeiDou from '@/views/BeiDou.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import SocialView from '@/views/SocialView.vue'
import SchoolView from '@/views/SchoolView.vue'
import DengLu from '@/views/DengLu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/beidou',
      component: BeiDou,
      children: [
        {
          path: 'xiangqing',
          component: XiangQing
        }
      ]
    },

    { path: '/social', component: SocialView },
    { path: '/school', component: SchoolView },
    { path: '/login', component: DengLu },
    { path: '/', component: Home }
    // { path: '/talent-growth', component: /* 人才成长跳转页面组件 */ },
  ]
})

export default router

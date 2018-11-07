import Vue from 'vue'
import Router from 'vue-router'
import Selection from '@/views/selection/index'
import Vip from '@/views/vip/index'
import Classify from '@/views/classify/index'
import ClassifyDetail from '@/views/classify/detail.vue'
import ClassifyNovel from '@/views/classify/novel.vue'
import Rank from '@/views/rank/index'
import RankDetail from '@/views/rank/detail.vue'
import RankNovel from '@/views/rank/novel.vue'
import RankNovelText from '@/views/rank/novelText.vue'
import Reading from '@/components/reading'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Selection
    },
    {
      path: '/selection',
      component: Selection
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/classify',
      component: Classify,
      children:[
        {
          path:'/classify/:id',
          component:ClassifyDetail,
        }
      ]
    },
    {
      path:'/novel/:id',
      component:ClassifyNovel
    },
    {
      path:'/reading/:id',
      component:Reading
    },
    {
      path: '/rank',
      component: Rank,
      children:[
        {
          path:'/rank/:id',
          component:RankDetail,
          children:[{
              path:'/novel/:id',
              component:RankNovel,
              children:[{
                path:'/novelText/:id',
                component:RankNovelText
              }]
            }]
        }
      ]
    }
  ]
})

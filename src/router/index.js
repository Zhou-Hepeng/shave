import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index'
import game from '@/components/game'
import rank from '@/components/rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/game',
      name: 'game',
      component: game
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    }
  ]
})

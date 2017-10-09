import Vue from 'vue'
import Router from 'vue-router'
import Hackmap from '@/components/Hackmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'lastest',
      component: Hackmap
    },
    {
      path: '/:issueId',
      name: 'history',
      component: Hackmap,
      props: true
    }
  ]
})

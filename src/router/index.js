import Vue from 'vue'
import Router from 'vue-router'
import tpl from '@/pages/tpl'
import { history,TreeHistory } from '@/pages/history'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/history',
    name: 'history',
    component: history
  },{
    path: '/treeHistory',
    name: 'treeHistory',
    component: TreeHistory
  }]
})

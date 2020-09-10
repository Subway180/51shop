import Vue from 'vue'
import Router from 'vue-router'
import text from '../components/Top/top.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/text',
      name: 'text',
      component: text
    }
  ]
})

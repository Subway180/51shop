import Vue from 'vue'
import Router from 'vue-router'
import text from '../components/footer/footer.vue'
import text1 from '../components/Top/top.vue'
import text2 from '../view/index/meun.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/text',
      name: 'text',
      component: text
    },
    {
      path: '/text2',
      name: 'text2',
      component: text2
    },
    {
      path: '/text1',
      name: 'text1',
      component: text1
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import text from '../components/footer/footer.vue'
import text1 from '../components/Top/top.vue'
import text2 from '../view/index/meun.vue'
import text3 from '../view/index/Menu1.vue'

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
    },
    {
      path: '/text3',
      name: 'text3',
      component: text3
    }
  ]
})

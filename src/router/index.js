import Vue from 'vue'
import Router from 'vue-router'
import text1 from '../components/Top/top.vue'
import Home from '../view/index/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
    
  ]
})

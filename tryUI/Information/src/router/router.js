import Vue from 'vue'
import Router from 'vue-router'
import one from '../components/customerM'
import two from '../components/quickRM'
import three from '../components/info'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: one
    },
    {
      path: '/two',
      component: two
    },
    {
      path: '/three',
      component: three
    }
  ]
})

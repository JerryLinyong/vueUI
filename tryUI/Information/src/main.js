import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Button from 'ant-design-vue/lib/button'
import router from './router/router'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.use(Antd)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

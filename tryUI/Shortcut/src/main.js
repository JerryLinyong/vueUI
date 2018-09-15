import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Button from 'ant-design-vue/lib/button'

Vue.config.productionTip = false

Vue.component(Button.name, Button)
Vue.use(Antd)

new Vue({
  el: '#app',
  render: h => h(App)
})

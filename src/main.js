import Vue from 'vue'
import App from './App'
import store from './store'
import uView from "uview-ui"
import * as filters from './utils/filters'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(uView)
Vue.prototype.$store = store

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  store,
  ...App
})
app.$mount()

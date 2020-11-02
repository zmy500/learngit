import Vue from 'vue'
import App from './App'
import dev from './common/api.js'

Vue.config.productionTip = false
Vue.prototype.$api = api;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

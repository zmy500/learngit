import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import master from './common/api.js'
=======
import dev from './common/api.js'
>>>>>>> dev

Vue.config.productionTip = false
Vue.prototype.$api = api;
App.mpType = 'app'






const app = new Vue({
    ...App
})
app.$mount()

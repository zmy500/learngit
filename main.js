import Vue from 'vue'
import App from './App'
import api from './common/api.js'

Vue.config.productionTip = false
Vue.prototype.$api = api;
App.mpType = 'app'


// 我再master 分支下，提交的文件



const app = new Vue({
    ...App
})
app.$mount()

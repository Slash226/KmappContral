import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
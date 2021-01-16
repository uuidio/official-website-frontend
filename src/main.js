import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import './plugins/element.js'

// API
import api from './api/index.js'
Vue.prototype.$api = api
// import MetaInfo from "vue-meta-info"; //seo优化
// Vue.use(MetaInfo);
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
//
// import 'lib-flexible/flexible'
Vue.use(element)


new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')

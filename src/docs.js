import Vue from 'vue'
import App from './app'
import VueClipboard from 'vue-clipboard2'

import './styles/app.scss'

Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

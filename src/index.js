// index.js

import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  render: createElement => createElement(App),
  store,
}).$mount('#app')
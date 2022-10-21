import Vue from 'vue'
import App from './App.vue'
import vueResizeTable from './plugin'

Vue.config.productionTip = false

Vue.use(vueResizeTable);

new Vue({
  render: h => h(App),
}).$mount('#app')

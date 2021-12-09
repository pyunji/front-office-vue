import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './apis/axiosConfig'
import vuetify from './plugins/vuetify'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* Cart에서 cartFooter로 총 가격 데이터 전달 */
export const eventBus = new Vue({
  methods: {
    setTotalPrice(totalPrice) {
      this.$emit('setTotalPrice', totalPrice)
    },
    setToOrderItems(selectedItems) {
      this.$emit('setToOrderItems', selectedItems)
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
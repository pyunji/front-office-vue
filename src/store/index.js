import Vue from 'vue'
import Vuex, { Store } from 'vuex'

import productStore from "@/store/modules/productStore";
import userStore from "@/store/modules/userStore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    productStore,
    userStore
  }
})
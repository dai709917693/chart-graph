import Vue from 'vue';
import Vuex from 'vuex';
import history from './modules/history';
Vue.use(Vuex)
const state = {}
const mutations = {}
const actions = {}
export default new Vuex.Store({
  modules: {
  history
  },
  state,
  actions,
  mutations
})
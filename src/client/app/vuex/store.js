import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

import Drivers from '../components/drivers/vuex/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    Drivers
  }
});

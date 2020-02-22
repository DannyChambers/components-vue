
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://localhost:3000/";

export default new Vuex.Store({
  state: {
    ui: {
      loggedIn: false,
      primaryNavigation: {
        visible: false
      },
      modal: {
        visible: null
      } 
    },
    data: {
      users: [],
      products: []
    }
  },
  actions: {
    loadData({commit}, endpoint) {
      //console.log("loadData");
      Vue.axios.get(endpoint).then(result => {
        let payload = {'endpoint': endpoint, 'result': result.data};
        commit('SAVE_DATA', payload);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  mutations: {
    SAVE_DATA(state, payload) {

      //Need to assign data based on endpoint here --

      if(payload.endpoint === "users"){

        state.data.users = payload.result;

      } else if(payload.endpoint === "products"){

        state.data.products = payload.result;

      }
    }
  }
})


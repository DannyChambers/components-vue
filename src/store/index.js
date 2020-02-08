
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "http://localhost:3000/";

export default new Vuex.Store({
  state: {
    products: []
  },
  actions: {
    loadProducts({commit}) {
      Vue.axios.get('products').then(result => {
        commit('SAVE_PRODUCTS', result.data);
        //console.log("Results from json-server: ", result.data);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  mutations: {
    SAVE_PRODUCTS(state, products) {
      state.products = products;
      //console.log("State in Vuex: ", state);
      //console.log("Products in Vuex: ", state.products);
    }
  }
})
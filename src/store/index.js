
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
      user:{
        loggedIn: false
      },
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
    },
    logInUser({commit}, id) {
      console.log("Called logInUser with ID: ", id);
      commit('ADD_LOGGED_USER', id);
    }
  },
  mutations: {
    SAVE_DATA(state, payload) {
      if(payload.endpoint === "users"){
        state.data.users = payload.result;
      } else if(payload.endpoint === "products"){
        state.data.products = payload.result;
      }
    },
    ADD_LOGGED_USER(state, payload){
      console.log("Called ADD_LOGGED_USER");
      state.ui.user.loggedIn = payload;
    }
  },
  getters: {
    loggedInUser: (state) => {
      return state.data.users.find(user => user.id === state.ui.user.loggedIn);
    }
  }
})


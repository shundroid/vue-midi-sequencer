import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: "hoge"
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    }
  },
  mutations: {
    increment(state) {
      state.data = state.data === "hoge" ? "fuga" : "hoge";
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import { defaultNote } from "@lib/config";

Vue.use(Vuex);

export const state = {
  currentNote: defaultNote
};

export const mutations = {

};

export const actions = {

};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: []
});
import Vue from "vue";
import Vuex from "vuex";
import { defaultNote } from "@lib/config";

Vue.use(Vuex);

export const state = {
  currentNote: defaultNote
};

export const mutations = {
  updateCurrentNote(state, note) {
    state.currentNote = note;
  }
};

export function generateSimpleActions(mutations) {
  const actions = {};
  mutations.forEach(mutation => {
    actions[mutation] = ({ commit }, payload) => {
      if (payload === 0 || payload) {
        commit(mutation, payload);
      } else {
        commit(mutation);
      }
    };
  });
  return actions;
}

export const actions = {
  ...generateSimpleActions([
    "updateCurrentNote"
  ])
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: []
});
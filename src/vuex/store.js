import Vue from "vue";
import Vuex from "vuex";
import { defaultNote } from "@lib/config";

Vue.use(Vuex);

export const state = {
  currentNote: defaultNote,
  notes: []
};

export const mutations = {
  updateCurrentNote(state, note) {
    state.currentNote = note;
  },
  addNote(state, { key, timing }) {
    state.notes.push({
      key, timing,
      length: 0
    });
  },
  updateNoteLength(state, { index, length }) {
    state.notes[index].length = length;
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
    "updateCurrentNote",
    "addNote",
    "updateNoteLength"
  ])
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: []
});
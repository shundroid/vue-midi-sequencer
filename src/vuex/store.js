import Vue from "vue";
import Vuex from "vuex";
import { defaultNote } from "@lib/config";

Vue.use(Vuex);

export const state = {
  currentNote: defaultNote,
  notes: [],
  isEditingScore: false,
  scrollPosition: 0
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
  },
  updateNoteTiming(state, { index, timing }) {
    state.notes[index].timing = timing;
  },
  updateNoteKeyNumber(state, { index, keyNumber }) {
    state.notes[index].key = keyNumber;
  },
  removeNote(state, index) {
    state.notes.splice(index, 1);
  },
  startEditingScore(state) {
    state.isEditingScore = true;
  },
  finishEditingScore(state) {
    state.isEditingScore = false;
  },
  scroll(state, scrollPosition) {
    state.scrollPosition = scrollPosition;
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
    "removeNote",
    "updateNoteLength",
    "updateNoteTiming",
    "updateNoteKeyNumber",
    "startEditingScore",
    "finishEditingScore",
    "scroll"
  ])
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: []
});
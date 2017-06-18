import Vue from "vue";
import Vuex from "vuex";
import { defaultNote } from "@lib/config";
import createSynthPlugin from "@vuex/plugins/synthPlugin";
import SquareSynth from "@synth/square";

Vue.use(Vuex);

export const state = {
  currentNote: defaultNote,
  notes: [],
  isEditingScore: false,
  scrollPosition: 0,
  previewingKeyNumber: null,
  currentSynth: new SquareSynth(),
  appState: "editing",
  bpm: 120
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
  },
  startPreview(state, keyNumber) {
    state.previewingKeyNumber = keyNumber;
  },
  finishPreview(state) {
    state.previewingKeyNumber = null;
  },
  play(state) {
    state.appState = "playing";
  },
  stop(state) {
    state.appState = "editing";
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
    "scroll",
    "startPreview",
    "finishPreview",
    "play",
    "stop"
  ])
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createSynthPlugin()]
});

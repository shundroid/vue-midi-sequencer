import getFrequency from "@lib/frequency";

export class SynthPlugin {
  plugin = store => {
    store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "startPreview": {
          this.startPreview(state.currentSynth, mutation.payload);
          break;
        }
        case "finishPreview": {
          this.finishPreview(state.currentSynth);
          break;
        }
      }
    });
  };
  startPreview(currentSynth, keyNumber) {
    currentSynth.play(getFrequency(keyNumber));
  }
  finishPreview(currentSynth) {
    currentSynth.stop();
  }
}

export default function createSynthPlugin() {
  return new SynthPlugin().plugin;
}
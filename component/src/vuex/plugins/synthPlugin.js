import getFrequency from "@lib/frequency";
import { timingToSeconds } from "@lib/timing";

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
        case "play": {
          this.play(state.currentSynth, state.notes, state.bpm);
        }
      }
    });
  };
  notes = null;
  startPreview(currentSynth, keyNumber) {
    currentSynth.play(getFrequency(keyNumber));
  }
  finishPreview(currentSynth) {
    currentSynth.stop();
  }
  play(currentSynth, notes, bpm) {
   this.notes = notes.sort((a, b) => {
      return a.timing - b.timing;
    }).map(note => {
      return {
        frequency: getFrequency(note.key),
        seconds: timingToSeconds(note.timing, bpm),
        length: timingToSeconds(note.length, bpm)
      };
    });
    this.next(currentSynth);
  }
  generateSequence = function* (notes, bpm) {
    for (let i = 0; i < sortedNotes.length; i++) {
      yield { note: sortedNotes[i], index: i };
    }
  }
  next = (currentSynth, index = 0) => {
    if (index < this.notes.length) {
      const note = this.notes[index];
      currentSynth.play(note.frequency, note.length);
      if (index + 1 >= this.notes.length) {
        // todo
        return;
      }
      if (this.notes[index + 1].seconds === note.seconds) {
        this.next(currentSynth, index + 1);
      } else {
        setTimeout(
          this.next,
          this.notes[index + 1].seconds - note.seconds,
          currentSynth,
          index + 1
        );
      }
    }
  };
}

export default function createSynthPlugin() {
  return new SynthPlugin().plugin;
}
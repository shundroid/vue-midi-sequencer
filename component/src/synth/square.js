import SynthBase from "@synth/synthBase";

export class Note {
  constructor(osc, frequency, time = null, onDestroyed = null) {
    this.osc = osc;
    this.osc.frequency.value = frequency;
    this.osc.start();
    if (time !== null) {
      setTimeout(() => {
        this.osc.stop();
        if (onDestroyed) {
          onDestroyed();
        }
      }, time);
    }
  }
}
export default class SquareSynth extends SynthBase {
  audioCtx = new AudioContext();
  gainNode = this.audioCtx.createGain();
  notes = [];
  constructor() {
    super();
    this.gainNode.gain.value = 0.1;
    this.gainNode.connect(this.audioCtx.destination);
  }
  createOsc() {
    const osc = this.audioCtx.createOscillator();
    osc.connect(this.gainNode);
    osc.type = "square";
    return osc;
  }
  play(frequency, time = null) {
    let note;
    if (time) {
      note = new Note(this.createOsc(), frequency, time, () => {
        this.notes.splice(this.notes.indexOf(note), 1);
      });
    } else {
      note = new Note(this.createOsc(), frequency);
    }
    this.notes.push(note);
  }
  stop() {
    for (let note of this.notes) {
      note.osc.stop();
    }
    this.notes = [];
  }
}

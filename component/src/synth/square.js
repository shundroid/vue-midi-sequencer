import SynthBase from "@synth/synthBase";

export default class SquareSynth extends SynthBase {
  audioCtx = new AudioContext();
  gainNode = this.audioCtx.createGain();
  currentOsc = null;
  constructor() {
    super();
    this.gainNode.gain.value = 0.1;
    this.gainNode.connect(this.audioCtx.destination);
  }
  createOsc() {
    this.currentOsc = this.audioCtx.createOscillator();
    this.currentOsc.connect(this.gainNode);
    this.currentOsc.type = "square";
  }
  play(frequency, time = null) {
    if (this.currentOsc) this.currentOsc.stop();
    this.createOsc();
    this.currentOsc.frequency.value = frequency;
    this.currentOsc.start();
  }
  stop() {
    if (this.currentOsc) {
      this.currentOsc.stop();
      this.currentOsc = null;
    }
  }
}

import { pixelPerBeat } from "@lib/config";

// These are 3 units : timing, seconds, position
// Timing : the main units. It's the number of beats.
// Seconds : It's the number of seconds. Depends on BPM.
// Position : It's display position. Depends on pixelPerBeat.

export function positionToTiming(position, minimumUnit) {
  const timing = position / pixelPerBeat;
  return timing - timing % minimumUnit;
}

export function timingToPosition(timing) {
  return timing * pixelPerBeat;
}

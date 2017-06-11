import wholeNote from "@assets/notes/4.svg";
import halfNote from "@assets/notes/2.svg";
import quaterNote from "@assets/notes/1.svg";
import eighthNote from "@assets/notes/0.5.svg";
import sixteenthNote from "@assets/notes/0.25.svg";
import thirtySecondNote from "@assets/notes/0.125.svg";

export default [
  { label: "whole", length: 4, image: wholeNote },
  { label: "half", length: 2, image: halfNote },
  { label: "quater", length: 1, image: quaterNote },
  { label: "eighth", length: 0.5, image: eighthNote },
  { label: "sixteenth", length: 0.25, image: sixteenthNote },
  { label: "32nd", length: 0.125, image: thirtySecondNote }
];

export function getNoteSvg(noteLength) {
  return `assets/notes/${noteLength}.svg`;
}

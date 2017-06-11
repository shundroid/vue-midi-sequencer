<template>
  <div
    :style="{ bottom, left }">
  </div>
</template>

<script>
import { timingToPosition } from "@lib/timing";
import { getKeyNumber } from "@lib/getOctaves";
import { keyWidth } from "@lib/config";

export default {
  props: {
    keyName: String,
    timing: Number,
    length: Number
  },
  computed: {
    bottom() {
      return `${(getKeyNumber(this.keyName) - 1) * keyWidth}px`;
    },
    left() {
      return `${timingToPosition(this.timing)}px`;
    }
  }
};
</script>

<style scoped>
div {
  position: absolute;
  width: 50px;
  height: 14px;
  background-color: aqua;
}
</style>

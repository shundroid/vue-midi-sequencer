<template>
  <div
    :style="{ bottom, left, width }"
    @mousedown="startEditingEndTime">
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timingToPosition, positionToTiming } from "@lib/timing";
import { getKeyNumber } from "@lib/getOctaves";
import { keyWidth } from "@lib/config";

export default {
  props: {
    index: Number,
    keyName: String,
    timing: Number,
    storeLength: Number
  },
  mounted() {
    this.length = this.minimumUnit;
    this.startEditingEndTime();
  },
  data() {
    return {
      state: "normal",
      length: 0
    };
  },
  computed: {
    ...mapState({
      minimumUnit: state => state.currentNote.length
    }),
    bottom() {
      return `${(getKeyNumber(this.keyName) - 1) * keyWidth}px`;
    },
    left() {
      return `${timingToPosition(this.timing)}px`;
    },
    width() {
      return `${timingToPosition(this.length)}px`;
    }
  },
  methods: {
    ...mapActions(["updateNoteLength"]),
    addListeners() {
      window.addEventListener("mousemove", this.updateEditing);
      window.addEventListener("mouseup", this.finishEditing);
    },
    removeListeners() {
      window.removeEventListener("mousemove", this.updateEditing);
      window.removeEventListener("mouseup", this.finishEditing);
    },
    startEditingEndTime() {
      this.addListeners();
      this.state = "editing-end-time";
    },
    updateEditing(event) {
      if (this.state === "editing-end-time") {
        this.length = positionToTiming(
          event.clientX - 100,
          this.minimumUnit
        ) - this.timing;
      }
    },
    finishEditing() {
      this.removeListeners();
      this.state = "normal";
      this.updateNoteLength({
        index: this.index,
        length: this.length
      });
    }
  }
};
</script>

<style scoped>
div {
  position: absolute;
  height: 14px;
  background-color: aqua;
}
</style>

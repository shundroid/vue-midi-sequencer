<template>
  <div
    :style="{ bottom, left, width }"
    @mousedown="startMoving">
    <div class="selection begin" />
    <div class="selection end" @mousedown.stop="startEditingEndTime" />
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
    storeTiming: Number,
    storeLength: Number
  },
  mounted() {
    if (this.isEditingScore) {
      this.length = this.minimumUnit;
      this.startEditingEndTime();
    }
  },
  data() {
    return {
      state: "normal",
      length: this.storeLength,
      timing: this.storeTiming,
      movingOffsetX: 0,
      movingOffsetY: 0
    };
  },
  computed: {
    ...mapState({
      minimumUnit: state => state.currentNote.length
    }),
    ...mapState(["isEditingScore"]),
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
    ...mapActions(["updateNoteLength", "removeNote"]),
    addListeners() {
      window.addEventListener("mousemove", this.updateEditing);
      window.addEventListener("mouseup", this.finishEditing);
    },
    removeListeners() {
      window.removeEventListener("mousemove", this.updateEditing);
      window.removeEventListener("mouseup", this.finishEditing);
    },
    startMoving(event) {
      this.addListeners();
      this.state = "moving";
      this.movingOffsetX = event.layerX;
      this.movingOffsetY = event.layerY;
    },
    startEditingEndTime() {
      this.addListeners();
      this.state = "editing-end-time";
    },
    updateEditing(event) {
      switch (this.state) {
        case "editing-end-time":
          this.length = positionToTiming(
            event.clientX - 100,
            this.minimumUnit
          ) - this.timing;
          break;
        case "moving":
          this.timing = positionToTiming(event.clientX - 100 - this.movingOffsetX, this.minimumUnit);
          break;
      }
    },
    finishEditing() {
      this.removeListeners();
      if (this.length <= 0) {
        this.removeNote(this.index);
        return;
      }
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
  background-color: #64b5f6;
  border: 2px solid #42a5f5;
  cursor: move
}
.selection {
  position: absolute;
  width: 5px;
  height: 100%;
  border-color: #64b5f6;
}
.begin {
  cursor: w-resize;
  top: 0;
  left: 0;
}
.end {
  cursor: e-resize;
  top: 0;
  right: 0;
}
</style>

<template>
  <div
    :style="{ bottom, left, width }"
    @mousedown="startMoving">
    <div class="selection begin" @mousedown.stop="startEditingStartTime" />
    <div class="selection end" @mousedown.stop="startEditingEndTime" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { timingToPosition, positionToTiming } from "@lib/timing";
import { keyWidth } from "@lib/config";
import validateNoteDetails from "@lib/validateNoteDetails";

export default {
  props: {
    index: Number,
    storeKeyNumber: Number,
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
      keyNumber: this.storeKeyNumber,
      movingOffsetX: 0,
      movingFirstY: 0
    };
  },
  computed: {
    ...mapState({
      minimumUnit: state => state.currentNote.length
    }),
    ...mapState(["isEditingScore"]),
    bottom() {
      return `${(this.keyNumber - 1) * keyWidth}px`;
    },
    left() {
      return `${timingToPosition(this.timing)}px`;
    },
    width() {
      return `${timingToPosition(this.length)}px`;
    }
  },
  methods: {
    ...mapActions([
      "updateNoteLength",
      "updateNoteTiming",
      "updateNoteKeyNumber",
      "removeNote"
    ]),
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
      this.movingFirstY = event.clientY;
    },
    startEditingEndTime() {
      this.addListeners();
      this.state = "editing-end-time";
    },
    startEditingStartTime() {
      this.addListeners();
      this.state = "editing-start-time";
    },
    updateEditing(event) {
      switch (this.state) {
        case "editing-end-time": {
          const nextLength = positionToTiming(
            event.clientX - 100,
            this.minimumUnit
          ) - this.timing;
          if (validateNoteDetails(this.timing, nextLength, this.keyNumber)) {
            this.length = nextLength;
          }
          break;
        }
        case "moving": {
          const nextTiming = positionToTiming(event.clientX - 100 - this.movingOffsetX, this.minimumUnit);
          const nextKeyNumber = this.storeKeyNumber +
            Math.round((this.movingFirstY - event.clientY) / keyWidth);
          if (validateNoteDetails(nextTiming, this.length, nextKeyNumber)) {
            this.timing = nextTiming;
            this.keyNumber = nextKeyNumber;
          }
          break;
        }
        case "editing-start-time": {
          const nextTiming = positionToTiming(event.clientX - 100, this.minimumUnit);
          const nextLength = this.storeLength + this.storeTiming - this.timing;
          if (validateNoteDetails(nextTiming, nextLength, this.keyNumber)) {
            this.timing = nextTiming;
            this.length = nextLength;
          }
          break;
        }
      }
    },
    finishEditing() {
      this.removeListeners();
      if (this.length <= 0) {
        this.removeNote(this.index);
        return;
      }
      this.state = "normal";
      if (this.storeLength !== this.length) {
        this.updateNoteLength({
          index: this.index,
          length: this.length
        });
      }
      if (this.storeTiming !== this.timing) {
        this.updateNoteTiming({
          index: this.index,
          timing: this.timing
        });
      }
      if (this.storeKeyNumber !== this.keyNumber) {
        this.updateNoteKeyNumber({
          index: this.index,
          keyNumber: this.keyNumber
        });
      }
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
  cursor: move;
  z-index: 1;
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

<template>
  <div
    :class="classes"
    @mousedown="add">

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { positionToTiming } from "@lib/timing";

export default {
  props: {
    keyName: String,
    keyType: String
  },
  computed: {
    ...mapState(["currentNote"]),
    classes() {
      return {
        "black-score": this.keyType === "black",
        "white-score": this.keyType === "white"
      };
    }
  },
  methods: {
    ...mapActions(["addNote"]),
    add(event) {
      this.addNote({
        key: this.keyName,
        timing: positionToTiming(event.offsetX, this.currentNote.length)
      });
    }
  }
};
</script>

<style scoped>
div {
  height: 14px;
  width: 100%;
  border: 1px solid #bbdefb;
  box-sizing: border-box;
}
.black-score {
  background-color: #e3f2fd;
}
.white-score {
  background-color: white;
}
</style>
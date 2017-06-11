<template>
  <button :class="classes" :style="{ top: index * 14 + 'px' }">
    {{ caption }}
  </button>
</template>

<script>
export default {
  props: {
    pitch: String,
    keyType: String,
    index: Number
  },
  computed: {
    classes() {
      return {
        "black-key": this.keyType === "black",
        "white-key": this.keyType === "white"
      };
    },
    caption() {
      return /C[0-9]/.test(this.pitch) ? this.pitch : "";
    }
  }
};
</script>

<style scoped>
/* key-width: 16px */
/* white-key: key-width + 8px */
button {
  border: 1px solid black;
  display: block;
  text-align: right;
}

.black-key {
  width: 70px;
  height: 14px;
  background-color: black;
  position: absolute;
}

.white-key {
  background-color: white;
  width: 100px;
  height: 24px;
}
</style>
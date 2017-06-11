<template>
  <button :class="classes">
    {{ caption }}
  </button>
</template>

<script>
export default {
  props: {
    pitch: String,
    keyType: String
  },
  computed: {
    classes() {
      return {
        "black-key": this.keyType === "black",
        "white-key": this.keyType === "white"
      };
    },
    caption() {
      return this.pitch.substring(0, 1) === "C" ? this.pitch : "";
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
  height: 16px;
  background-color: black;
  position: absolute;
  transform: translateY(-8px);
}

.white-key {
  background-color: white;
  width: 100px;
  height: 24px;
}
</style>
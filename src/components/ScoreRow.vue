<template>
  <div :class="classes" />
</template>

<script>
export default {
  props: {
    keyType: String
  },
  computed: {
    classes() {
      return {
        "black-score": this.keyType === "black",
        "white-score": this.keyType === "white"
      };
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
<template>
  <md-button class="md-fab md-mini md-clean button" @click.native="click">
    {{ font }}
  </md-button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    font: String,
    length: Number
  },
  methods: {
    ...mapActions([
      "updateCurrentNote"
    ]),
    click() {
      this.updateCurrentNote(this.length);
    }
  }
};
</script>

<style scoped>
.button {
  font-family: "notes";
  font-size: 20px;
}
</style>

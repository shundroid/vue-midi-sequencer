<template lang="pug">
  div
    md-button#preferences-button.md-icon-button.md-raised.md-accent(
      @click.native="openDialog"
    )
      md-icon list
    md-dialog(
      md-open-from="#preferences-button"
      md-close-to="#preferences-button"
      ref="preferences-dialog"
    )
      md-dialog-title Preferences
      md-dialog-content
        md-input-container
          label BPM
          md-input(type="number" v-model="bpm")
      md-dialog-actions
        md-button.md-primary(@click.native="closeDialog") OK
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["updateBPM"]),
    openDialog() {
      this.$refs["preferences-dialog"].open();
    },
    closeDialog() {
      this.$refs["preferences-dialog"].close();
    },
  },
  computed: {
    bpm: {
      get() {
        return this.$store.state.bpm;
      },
      set(value) {
        this.updateBPM(parseInt(value));
      }
    }
  }
};
</script>

<style scoped>
#preferences-button {
  width: 56px;
  height: 56px;
}
</style>

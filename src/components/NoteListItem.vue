<template>
  <md-button class="md-fab md-mini md-clean button">
    {{ font }}
  </md-button>
</template>

<script>
export default {
  props: {
    font: String
  }
};
</script>

<style scoped>
.button {
  font-family: "notes";
  font-size: 20px;
}
</style>

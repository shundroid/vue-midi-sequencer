<template>
  <md-button class="md-fab md-mini md-clean">
    <img :src="image" />
  </md-button>
</template>

<script>
export default {
  props: {
    image: String
  }
};
</script>

<style scoped>
img {
  max-height: 30px;
}
</style>

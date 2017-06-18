<template lang="pug">
  .container
    md-button.md-icon-button.md-raised.md-accent
      md-icon list
    note-list
    md-button.md-icon-button.md-raised.md-accent
      md-icon play_arrow
</template>

<script>
import NoteList from "@components/NoteList";

export default {
  components: {
    NoteList
  }
};
</script>

<style scoped>
img {
  max-height: 30px;
}

.container {
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
}

.md-fab-bottom-right {
  position: static;
}

.md-icon-button {
  width: 56px;
  height: 56px;
}
</style>

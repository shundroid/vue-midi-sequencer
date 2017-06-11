<template>
  <div class="container">
    <md-button class="md-icon-button md-raised md-accent">
      <md-icon>list</md-icon>
    </md-button>
    <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
      <md-button class="md-fab" md-fab-trigger>
        Note
      </md-button>
      <note-list-item v-for="note in notes" :image="note.image" />
    </md-speed-dial>
    <md-button class="md-icon-button md-raised md-accent">
      <md-icon>play_arrow</md-icon>
    </md-button>
  </div>
</template>

<script>
import NoteListItem from "@components/NoteListItem";
import notes from "@lib/getNotes";

export default {
  components: {
    NoteListItem
  },
  data() {
    return { notes };
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

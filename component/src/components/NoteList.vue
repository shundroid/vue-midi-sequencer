<template lang="pug">
  md-speed-dial.md-fab-bottom-right(md-mode="scale")
    md-button.md-fab.note-preview(md-fab-trigger)
      | {{ currentNote.font }}
    note-list-item(
      v-for="(note, index) in notes",
      :key="index"
      :note="note"
    )
</template>

<script>
import { mapState } from "vuex";
import NoteListItem from "@components/NoteListItem";
import notes from "@lib/getNotes";

export default {
  components: {
    NoteListItem
  },
  data() {
    return { notes };
  },
  computed: {
    ...mapState([
      "currentNote"
    ])
  }
};
</script>

<style scoped>
.note-preview {
  font-family: "notes";
  font-size: 20px;
}
</style>

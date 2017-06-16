<template>
  <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
    <md-button class="md-fab note-preview" md-fab-trigger>
      {{ currentNote.font }}
    </md-button>
    <note-list-item
      v-for="(note, index) in notes"
      :key="index"
      :note="note" />
  </md-speed-dial>
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

<template>
  <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
    <md-button class="md-fab note-preview" md-fab-trigger>
      {{ currentFont }}
    </md-button>
    <note-list-item v-for="note in notes" :font="note.font" :length="note.length" />
  </md-speed-dial>
</template>

<script>
import { mapState } from "vuex";
import NoteListItem from "@components/NoteListItem";
import { default as notes, getNoteFromLength } from "@lib/getNotes";

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
    ]),
    currentFont() {
      return getNoteFromLength(this.currentNote).font;
    }
  }
};
</script>

<style scoped>
.note-preview {
  font-family: "notes";
  font-size: 20px;
}
</style>

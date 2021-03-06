<template lang="pug">
  .score(@scroll="onScroll")
    .inner(:style="{ width }")
      score-row(
        v-for="(key, index) in keys",
        :key="index",
        :keyNumber="key.number",
        :keyType="key.type"
      )
      note(
        v-for="(note, index) in notes",
        :key="index",
        :index="index",
        :storeKeyNumber="note.key",
        :storeTiming="note.timing",
        :storeLength="note.length"
      )
      score-line(
        v-for="(beat, index) in beats",
        :key="index",
        :index="index"
      )
</template>

<script>
import { mapState, mapActions } from "vuex";
import ScoreRow from "@components/ScoreRow";
import Note from "@components/Note";
import ScoreLine from "@components/ScoreLine";
import { allKeys, getTypeOfKey, getKeyNumber } from "@lib/getOctaves";
import { defaultBeats, pixelPerBeat } from "@lib/config";

export default {
  components: {
    ScoreRow,
    Note,
    ScoreLine
  },
  data() {
    return {
      keys: allKeys.map(key => {
        return {
          type: getTypeOfKey(key),
          number: getKeyNumber(key)
        };
      }).reverse()
    };
  },
  computed: {
    ...mapState(["notes"]),
    beats() {
      /* eslint-disable no-console */
      return new Array(Math.max(
        defaultBeats,
        Math.ceil(this.notes.reduce((a, b) => {
          return {
            timing: Math.max(a.timing, b.timing)
          };
        }, { timing: 0 }).timing) + 2
      ));
    },
    width() {
      return `${this.beats.length * pixelPerBeat}px`;
    }
  },
  methods: {
    ...mapActions(["scroll"]),
    onScroll() {
      this.scroll(this.$el.scrollTop);
    }
  }
};
</script>

<style scoped>
.score {
  flex: 1;
  height: 100%;
  overflow: scroll;
}
.inner {
  position: relative;
}
</style>

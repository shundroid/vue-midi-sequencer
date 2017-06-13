<template>
  <div>
    <score-row
      v-for="(key, index) in keys"
      :key="index"
      :keyNumber="key.number"
      :keyType="key.type" />
    <note
      v-for="(note, index) in notes"
      :key="index"
      :index="index"
      :storeKeyNumber="note.key"
      :storeTiming="note.timing"
      :storeLength="note.length" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ScoreRow from "@components/ScoreRow";
import Note from "@components/Note";
import { allKeys, getTypeOfKey, getKeyNumber } from "@lib/getOctaves";

export default {
  components: {
    ScoreRow,
    Note
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
    ...mapState(["notes"])
  }
};
</script>

<style scoped>
div {
  flex: 1;
  position: relative;
  height: 100%;
}
</style>
<template>
  <div>
    <score-row
      v-for="(key, index) in keys"
      :key="index"
      :keyType="key.type" />
  </div>
</template>

<script>
import ScoreRow from "@components/ScoreRow";
import { allKeys, getTypeOfKey } from "@lib/getOctaves";

export default {
  components: {
    ScoreRow
  },
  data() {
    return {
      keys: allKeys.map(key => {
        return {
          type: getTypeOfKey(key),
          name: key
        };
      }).reverse()
    };
  }
};
</script>

<style scoped>
div {
  flex: 1;
}
</style>
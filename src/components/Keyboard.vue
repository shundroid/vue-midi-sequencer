<template>
  <div>
    <key v-for="(key, index) in keys" :index="index" :keyType="key.type" :pitch="key.name" />
  </div>
</template>

<script>
import Key from "@components/Key";
import { allKeys, getTypeOfKey } from "@lib/getOctaves";

export default {
  components: {
    Key
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
  width: 100px;
  height: 100%;
  position: relative;
}
</style>
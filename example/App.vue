<template>
  <div>
    <component />
  </div>
</template>

<script>
import component from "component";
import { mapState, mapActions } from "vuex";
import store from "./store";

export default {
  components: {
    component
  },
  store,
  computed: mapState(["data"]),
  methods: mapActions(["increment"])
};
</script>

<template>
  <div id="app">
    <keyboard />
  </div>
</template>

<script>
import Keyboard from "@components/Keyboard";
import store from "@vuex/store";

export default {
  name: "app",
  components: {
    Keyboard
  },
  store
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

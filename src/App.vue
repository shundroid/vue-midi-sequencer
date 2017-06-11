<template>
  <div id="app">
    <keyboard />
    <score />
  </div>
</template>

<script>
import Keyboard from "@components/Keyboard";
import Score from "@components/Score";
import store from "@vuex/store";

export default {
  name: "app",
  components: {
    Keyboard,
    Score
  },
  store
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
}
</style>

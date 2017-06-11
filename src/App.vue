<template>
  <div id="app">
    <main>
      <keyboard />
      <score />
    </main>
    <button-container />
  </div>
</template>

<script>
import Keyboard from "@components/Keyboard";
import Score from "@components/Score";
import ButtonContainer from "@components/ButtonContainer";
import store from "@vuex/store";
import "./vueMaterial";
import "./style.css";

export default {
  name: "app",
  components: {
    Keyboard,
    Score,
    ButtonContainer
  },
  store
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
main {
  height: 100%;
  overflow: scroll;
  display: flex;
}
</style>

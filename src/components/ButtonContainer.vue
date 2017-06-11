<template>
  <div class="container">
    <md-button class="md-icon-button md-raised md-accent">
      <md-icon>list</md-icon>
    </md-button>
    <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
      <md-button class="md-fab" md-fab-trigger>
        Note
      </md-button>
      <md-button class="md-fab md-mini md-clean">
        <img src="../assets/notes/1.svg" />
      </md-button>
      <md-button class="md-fab md-mini md-clean">
        <img src="../assets/notes/2.svg" />
      </md-button>
      <md-button class="md-fab md-mini md-clean">
        <img src="../assets/notes/4.svg" />
      </md-button>
      <md-button class="md-fab md-mini md-clean">
        <img src="../assets/notes/8.svg" />
      </md-button>
      <md-button class="md-fab md-mini md-clean">
        <img src="../assets/notes/16.svg" />
      </md-button>
      <md-button class="md-fab md-mini md-clean">
        <img src="../assets/notes/32.svg" />
      </md-button>
    </md-speed-dial>
    <md-button class="md-icon-button md-raised md-accent">
      <md-icon>play_arrow</md-icon>
    </md-button>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
img {
  max-height: 30px;
}

.container {
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
}

.md-fab-bottom-right {
  position: static;
}

.md-icon-button {
  width: 56px;
  height: 56px;
}
</style>

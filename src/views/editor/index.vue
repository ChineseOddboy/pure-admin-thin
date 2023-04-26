<template>
  <div>
    <a-button @click="creat" type="primary">Primary Button</a-button>
    <canvas class="canvas" id="renderCanvas" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { Playground } from "./Playground";
import { saveScene } from "./save";
// import * as BABYLON from 'babylonjs';
let PG: Playground;
onMounted(() => {
  createScene();
});
function createScene() {
  const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
  if (canvas) {
    PG = new Playground(canvas);
    PG.run();
  }
}
function creat() {
  saveScene(PG.scene);
}
</script>
<style scoped>
.canvas {
  width: 100%;
  height: 100%;
  touch-action: none;
}
</style>

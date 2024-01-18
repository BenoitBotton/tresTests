<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Vector from './Vector.vue'
</script>

<template>
  <TresCanvas window-size preset="realistic">
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[5, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshLambertMaterial color="orange" />
      <Vector />
    </TresMesh>
    <TresAmbientLight :intensity=".2" />
    <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" v-light-helper />
    <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" v-light-helper />
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</template>
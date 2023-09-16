<script setup lang="ts">
// import { useRenderLoop } from '@tresjs/core'
// import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { ref } from 'vue'
import Vector from './Vector.vue'
const boxRef = ref()

</script>

<template>
  <TresCanvas window-size preset="realistic">
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[5, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <TresScene>
      <TresMesh ref="boxRef">
        <Vector />
      </TresMesh>
      <TresAmbientLight :intensity="10" />
    </TresScene>
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</template>

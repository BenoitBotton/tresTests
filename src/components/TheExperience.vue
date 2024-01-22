<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Vector from './Vector.vue'
import { ref } from 'vue'

const exists = ref(true)
</script>

<template>
  <div style="height: 80vh">
  <input type="checkbox" v-model="exists" /> Show vector
  <TresCanvas style="width: 80vw" preset="realistic" v-bind="{ clearColor: '#4f4f4f' }">
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[5, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <TresMesh>
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshLambertMaterial color="orange" />
      <Vector v-if="exists" rotation-x="1.5707"/>
    </TresMesh>
    <TresAmbientLight :intensity=".2" />
    <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" />
    <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" />
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</div>
</template>
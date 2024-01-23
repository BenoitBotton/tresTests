<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import Vector from './Vector.vue'
import { ref } from 'vue'

const showVector = ref(true)
const showDonut = ref(false)
</script>

<template>
  <input type="checkbox" v-model="showDonut" /> Show donut
  <input type="checkbox" v-model="showVector" /> Show vector
  <TresCanvas style="height: 100vh" preset="realistic" v-bind="{ clearColor: '#4f4f4f' }">
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[5, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <TresMesh v-if="showDonut">
      <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
      <TresMeshLambertMaterial color="orange" />
    </TresMesh>
    <TresGroup v-if="showVector" rotation-x="-1.5707">
      <Vector />
    </TresGroup>
    <TresAmbientLight :intensity=".2" />
    <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" />
    <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" />
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</template>
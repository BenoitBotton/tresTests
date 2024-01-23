<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'
import { ref } from 'vue'
import Donut from './Donut.vue'

const showVector = ref(true)
</script>

<template>
  <input type="checkbox" v-model="showVector" /> Show vector
  <TresCanvas style="height: 100vh" preset="realistic" v-bind="{ clearColor: '#4f4f4f' }">
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[5, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />
    <Donut :radius="1" :showVector="showVector" txt="Donut" color="orange" />
    <TresAmbientLight :intensity=".2" />
    <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" />
    <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" />
    <TresGridHelper />
    <TresAxesHelper />
  </TresCanvas>
</template>
<script setup lang="ts">
import { TresCanvas } from '@tresjs/core'
import { CameraControls } from '@tresjs/cientos'
import { ref, shallowRef, watch } from 'vue'
import Donut from './Donut.vue'
import { Box3 } from 'three'

const showVector = ref(true)

const myDonut = {
  radius: 2,
  theta: 1,
  height: 1,
  x_rot: 0.5,
  y_rot: 1.2,
  z_rot: 1,
  txt: 'Donut',
  color: 'orange',
}

const donut = shallowRef()
const cameraControls = ref()
const boxRef = shallowRef()
boxRef.value = new Box3()


const zoomFit = () => {
  console.log('watch start', boxRef.value)
  console.log('watch start', donut.value)
  const box = new Box3().setFromObject(donut.value.instance)
  boxRef.value = box
  console.log('watch end', boxRef.value)
  cameraControls.value.instance.rotateTo(0, Math.PI / 2, true)
  cameraControls.value.instance.fitToBox(boxRef.value.instance, true)
}


</script>

<template>
  <input type="checkbox" v-model="showVector" /> Show vector
  <button @click="zoomFit"> Zoom Fit</button>
  <TresCanvas style="height: 100vh" preset="realistic" v-bind="{ clearColor: '#4f4f4f' }">
    <TresPerspectiveCamera :args="[75, 1, 0.1, 1000]" :position="[5, 2, 5]" :look-at="[0, 0, 0]" />
    <CameraControls ref="cameraControls" make-default />
    <Donut v-bind="myDonut" :showVector="showVector" ref="donut" name="donut" />
    <TresAmbientLight :intensity=".2" />
    <TresDirectionalLight :intensity="1" :position="[500, 500, 0]" />
    <TresDirectionalLight :intensity="0.5" :position="[-500, 500, 0]" />
    <TresGridHelper />
    <TresAxesHelper />
    <TresBox3Helper v-if="boxRef" :args="[boxRef]" name="boxRef" />
  </TresCanvas>
</template>
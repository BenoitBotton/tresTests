<script setup lang="ts">
import { useRenderLoop } from '@tresjs/core';
import {ref, watch} from 'vue'
const boxRef = ref()

const {onLoop} =useRenderLoop()


onLoop(({delta, elapsed})=>{
  if(!boxRef.value) return
  boxRef.value.rotation.z+=delta
  boxRef.value.rotation.y=elapsed
})
</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :args="[75,1,0.1,1000]"
    :position="[1,1,4]"
    :look-at="[0,0,0]"
    />
      <TresScene>
        <TresMesh 
        ref="boxRef"
       
        >
          <TresBoxGeometry :args="[1,1,1]"/>
          <TresMeshNormalMaterial/>
        </TresMesh>
      </TresScene>
      <TresAxesHelper/>
  </TresCanvas>
</template>

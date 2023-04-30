<script setup lang="ts">
import {ref, watch} from 'vue'
const boxRef = ref()

function animate (){
  requestAnimationFrame(animate)

  if(!boxRef.value) return
  boxRef.value.rotation.x += 0.01
  boxRef.value.rotation.y += 0.01
}


animate()
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

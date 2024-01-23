<template>
    <TresArrowHelper :args="[new THREE.Vector3(0, 1, 0), , 3, color]" />
    <Suspense>
        <Text3D :text="txt" :font="fontPath" :position-y="1.5">
            <TresMeshLambertMaterial :color="color"/>
        </Text3D>
    </Suspense>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { Text3D } from '@tresjs/cientos'

const props = defineProps({
    txt: String,
    color: String,
})

const fontPath =
  'https://raw.githubusercontent.com/Tresjs/assets/main/fonts/FiraCodeRegular.json';

</script>

<style scoped></style>
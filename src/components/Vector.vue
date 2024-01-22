<template>
    <TresArrowHelper :args="[new THREE.Vector3(0, 1, 0), , 3, color]" />
 </template>

<script setup lang="ts">
import * as THREE from 'three'

const color = 'red'
</script>

<style scoped></style>
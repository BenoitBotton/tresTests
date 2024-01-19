<template>
    <Cone :args="[1, 2, 32]" :position="[0, 4, 0]">
        <TresMeshLambertMaterial :color="color" />
    </Cone>
    <TresMesh :position="[0, 1.5, 0]">
        <TresCylinderGeometry :args="[0.5, 0.5, 3]" />
        <TresMeshLambertMaterial :color="color" />
    </TresMesh>
</template>

<script setup lang="ts">
import { Cone } from '@tresjs/cientos'

const color = 'red'
</script>

<style scoped></style>
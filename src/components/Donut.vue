<template>
    <TresMesh>
        <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
        <TresMeshLambertMaterial :color="color" />
    </TresMesh>
    <TresGroup v-if="showVector" rotation-x="-1.5707">
        <Vector :txt="txt" :color="color" />
    </TresGroup>
</template>

<script setup lang="ts">
import Vector from './Vector.vue'

const props = defineProps({
    txt: String,
    color: String,
    showVector: Boolean,
})

</script>

<style scoped></style>
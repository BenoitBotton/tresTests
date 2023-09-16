<template>
    <Cone :args="[1, 2, 32]" :position="[0, 4, 0]" color="orange" />
    <Box :args="[0.5, 3, 0.5]" :position="[0, 1.5, 0]" color="orange" />
</template>

<script setup lang="ts">
import { Cone, Box } from '@tresjs/cientos'
</script>

<style scoped></style>
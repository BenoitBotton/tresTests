<template>
    <TresGroup :rotation-y="theta">
        <TresGroup :position-x="radius" :position-y="height">
            <TresGroup :rotation-x="x_rot" :rotation-y="y_rot" :rotation-z="z_rot">
                <TresMesh>
                    <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
                    <TresMeshLambertMaterial :color="color" />
                </TresMesh>
                <TresGroup :visible="showVector" rotation-x="-1.5707">
                    <Vector :txt="txt" :color="color" />
                </TresGroup>
            </TresGroup>
        </TresGroup>
    </TresGroup>
</template>

<script setup lang="ts">
import Vector from './Vector.vue'

interface Props{
    radius?: number
    theta?: number
    height?: number
    x_rot?: number
    y_rot?: number
    z_rot?: number
    txt?: string
    color?: string
    showVector?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    radius: () => 1,
    theta: () =>0.5,
    height: () =>1,
    x_rot: () =>1.2,
    y_rot: () =>1.2,
    z_rot: () =>1,
    txt: () =>'Donut',
    color: () =>'orange',
    showVector: () =>true,
})

</script>

<style scoped></style>
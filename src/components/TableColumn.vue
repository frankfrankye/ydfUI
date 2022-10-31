<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" >
type Props = {
  label: string
  prop: string
}
defineProps<Props>()
</script>

<style scoped>

</style>
<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
  <h1 class="text-2xl">{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

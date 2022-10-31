<template>
  <textarea @input="updateValue" :value="modelValue" :placeholder="placeholder"></textarea>
</template>

<script lang="ts" setup>
  import {ref} from "vue";

  const props = defineProps(['placeholder','modelValue'])
  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value)
  }
</script>

<style scoped>

</style>
<template>
  <div class="flex">
    <div class="w-full">
      <input
        type="text"
        class="
          form-control
          block
          w-80
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          h-14
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
          :placeholder="placeholder"
          :value="modelValue" @input="updateValue"
      />
      <span v-if="suffixIcon" class="flex items-center justify-end cursor-pointer" @click="goBulkSearch">
        <img src="../assets/images/import.svg" alt="">
        <span class="ml-1 text-indigo-lg">Bulk Search</span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['placeholder','modelValue','suffixIcon'])
  const emit = defineEmits(['update:modelValue'])

  const updateValue = (event: any) => {
    emit('update:modelValue', event.target.value)
  }

</script>

<style scoped>

</style>
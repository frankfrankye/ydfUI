<template>
  <div v-if="show" class="absolute inset-0 flex items-center justify-center z-10 mb-20 bg-stone-100/75">
    <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl w-1/2">
      <div class="flex items-center justify-between mb-8">
        <!--  show your modal title here  -->
        <h3 class="text-2xl">{{ title }}</h3>

        <!--  close button, change it or keep it  -->
        <div @click="closeModal" class="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sc-1hmbv05-1 frgscU"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>

      <!--  modal body  -->
      <div class="min-h-100 my-4">
        <slot></slot>
      </div>

      <!--  modal footer    -->
<!--      <div class="flex justify-end">-->
<!--        <button @click="closeModal" class="btn mr-4">-->
<!--          Cancel-->
<!--        </button>-->
<!--        <button @click="closeModal" class="btn btn-blue">-->
<!--          Confirm-->
<!--        </button>-->
<!--      </div>-->
    </div>
  </div>
</template>
<script  lang="ts" setup>
  import {ref} from "vue";
  const props = defineProps(['show','data', 'title'])

  const emit = defineEmits(['closeModal'])

  const closeModal = () => {
    emit('closeModal',false)
  }
</script>
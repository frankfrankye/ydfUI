<template>
  <table class="min-w-full text-center">
    <thead class="border-b-4 border-solid border-blue-600">
      <tr>
        <th v-for="items in columns" :key="items.id" class="min-w-30 text-sm font-medium text-gray-900 px-6 py-4">
          {{ items.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in tableData" :key="index" class="border-b border-gray-200 h-14">
        <td v-if="serialNum">{{ index + 1  }}</td>
        <td v-for="item in columns" :data-label="item.key" class="">
            <slot v-if="!item.slots">{{ data[item.key] }}</slot>
            <slot v-else :name="item.slots" :rowData="data"></slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
  import { useSlots, watch } from "vue";
  import { onMounted } from "vue";
  import TableColumn from './TableColumn.vue'
  const prop = defineProps(['tableData','columns','serialNum'])
  const slots = useSlots()

  onMounted(() => {
    // console.log(prop.tableData)
  })
  watch(prop, (n) => {
    // console.log(n)
  })


</script>

<style scoped>
  td {
    min-width:140px;
    text-align: center;
  }
</style>
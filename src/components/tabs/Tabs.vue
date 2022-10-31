<template>
  <div>
    <renderTabBar></renderTabBar>
    <renderContent></renderContent>
  </div>
</template>

<script lang="ts" setup>
  import { useSlots, h, ref } from 'vue'
  // name：tab name，default：the one show on default
  type Props = {
    name: string
    default?: string
  }
  const emit = defineEmits(['change-tab'])
  const props = withDefaults(defineProps<Props>(), {
    default: ''
  })

  const slots = useSlots() // get slot of TabPane

  let currentTab = ref<string>(props.default)

  // tab button
  const renderOneButten = (name: string, tab: string, index: number) =>
    h(
        'label',
        {
          class: {
            'mx-2 px-2 pb-2 cursor-pointer hover:text-indigo-600': true,
            'border-b-2 border-indigo-600':
              currentTab.value === name || (index === 0 && !currentTab.value)
          }
        },
        [
          h(
              'input',
              {
                name: props.name,
                value: name,
                type: 'radio',
                class: 'hidden',
                onclick: () => {
                  currentTab.value = name
                  emit('change-tab', currentTab.value)
                }
              },
              {}
          ),
          tab
        ]
    )
  // switch button
  const renderTabBar = () =>
    h(
        'div',
        {
          class: 'flex flex-nowrap overflow-x-scroll mb-4',
          style: {
            overflowY: 'hidden',
            overflowX: 'auto'
          }
        },
        slots.default &&
        slots.default().map((item, idx) => {
          return renderOneButten(item.props?.name, item.props?.tab, idx)
        })
    )

    // data in slots
    const renderContent = () => {
      return (
          slots.default &&
          slots.default().find((item) => {
            if (currentTab.value === '') {
              return true
            }
            return item.props?.name === currentTab.value
          })
      )
    }

</script>

<style scoped>

</style>
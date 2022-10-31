<script setup lang="ts">
import {ref, reactive} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import message from '../src/components/message/index'
import BaseInput from '../src/components/Input.vue'
import Modal from '../src/components/Modal.vue'
import MyTextarea from '../src/components/Textarea.vue'

const state = reactive({
  modalShow: false
})
const desc = ref()
const inputValue = ref()
const goto = (data: any) => {
  switch (data) {
    case 'error':
      message({ type: "error", str: `Code: 404, Message: 这是一条错误信息` })
      break;
    case 'warn':
      message({ type: "warn", str: `Code: 300, Message: 这是一条警告信息` })
      break;
    case 'success':
      message({ type: "success", str: `Code: 200, Message: 这是一条成功信息` })
      break;
    default:
      break;
  }
}

const showModal = () => {
  state.modalShow = true
}

const changeModalStatus = () => {
  state.modalShow = !state.modalShow
}
</script>

<template>
  <div class="w-320 mx-auto">
    <div class="flex items-center">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <HelloWorld msg="Vite + Vue" />
    </div>
    <!-- 按钮组 -->
    <div class="text-xl ml-4 my-6">按钮组</div>
    <button class="btn">按钮</button>
    <button class="btn btn-blue mx-4">按钮</button>
    <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">Button</button>

    <!-- message -->
    <div class="text-xl ml-4 my-6">消息组件</div>
    <button class="btn btn-blue mr-4" @click="goto('error')">错误提示</button>
    <button class="btn btn-blue mr-4" @click="goto('warn')">警告提示</button>
    <button class="btn btn-blue" @click="goto('success')">成功提示</button>
    <!-- 输入框 -->
    <div class="text-xl ml-4 my-6">输入框</div>
    <base-input placeholder="输入些什么" v-model="inputValue" />
    <div class="mt-2">v-model控制输入框内容：{{ inputValue }}</div>
    <!-- 弹窗 -->
    <div class="text-xl ml-4 my-6">弹窗</div>
    <button class="btn btn-blue mr-4" @click="showModal">召唤弹窗</button>
    <Modal :show="state.modalShow" @closeModal="changeModalStatus" title="this is a modal"></Modal>
    <!-- 文本框 -->
    <div class="text-xl ml-4 my-6">文本框</div>
    <my-textarea placeholder="Enter something" v-model="desc" class="w-1/3 h-30 p-3 leading-6 absolute" />
    
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

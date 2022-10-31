<template>
  
  <div class="pop-message" :style="style[type]" v-show="visible">
    <i class="icon" :class="[style[type].icon]"></i>
    <span class="text">{{ str }}</span>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  name: "message",
  props: {
    type: {
      type: String,
      //	success
      //	warn
      //	error
      default: "success",
    },
    str: {
      type: String,
      default: "登陆成功",
    },
  },
  setup() {
    const style = {
      warn: {
        icon: "icon-warning",
        color: "#E6A23C",
        backgroundColor: "rgb(253, 246, 236)",
        borderColor: "rgb(250, 236, 216)",
      },
      error: {
        icon: "icon-shanchu",
        color: "#F56C6C",
        backgroundColor: "rgb(254, 240, 240)",
        borderColor: "rgb(253, 226, 226)",
      },
      success: {
        icon: "icon-queren2",
        color: "#67C23A",
        backgroundColor: "rgb(240, 249, 235)",
        borderColor: "rgb(225, 243, 216)",
      },
    };
    const visible = ref(false);
    onMounted(() => {
      visible.value = true;
    });
    return { style, visible };
  },
};
</script>

<style scoped>
.pop-message {
  position: absolute;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;

  -webkit-animation: fadeInDown .3s;
  animation: fadeInDown .3s;
}
@keyframes fadeInDown {
  0% {
    -webkit-transform: translate3d(0, -20%, 0);
    -webkit-transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
    transform: translate3d(0, -20%, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    transform: none;
    opacity: 1;
  }
}
@-webkit-keyframes fadeInDown {
  0% {
    -webkit-transform: translate3d(0, -20%, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
    opacity: 1;
  }
}
</style>
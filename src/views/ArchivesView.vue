<script setup lang="ts">
import { defineEmits } from 'vue';

// 定义要发射的事件
const emit = defineEmits(['toggle-card']);

// 定义 toggleCard 方法
function toggleCard(): void {
  emit('toggle-card');
}
</script>

<template>
  <div id="foreground">
    <h1 style="border: 4px double #fff;border-radius: 10px">组件开发中，过程不代表最终品质</h1>
    <br><br><br>
    <h2> 当前完成情况 ：
      <router-link to="/projects">
        项目页面
      </router-link>
      <a href="#" @click="toggleCard()">个人名片</a>
    </h2>
  </div>

  <div style="width: 300px;height: 300px;background-color: #fff"></div>

</template>

<style scoped>
#foreground {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;left: 0;bottom: 0;right: 0;
  z-index: 500;
  //pointer-events: none;
  color: #fff;
  background-color: #00000050;
}
</style>
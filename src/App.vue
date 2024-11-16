<script setup lang="ts">
import PersonalCard from "./components/PersonalCard.vue";
import NavBar from "./components/NavBar.vue";
import {ref} from 'vue'
import "./theme.css"

/* 常量 */
const cardVisible = ref(false) // 控制card 展开/not
let lookCardTimes = 0


/* 方法 */
function toggleCard(){ //控制nav 展开/not
  cardVisible.value = !cardVisible.value
  lookCardTimes += cardVisible.value
}

</script>

<template>
  <!-- 个人名片-->
  <personal-card height="500px" width="350px" :is-visible="cardVisible" :tar-num="lookCardTimes"/>
  <!-- 导航栏-->
  <NavBar @toggleCard="toggleCard()" />

  <!-- 路由视窗部分·略 -->
  <router-view/>
  <!-- 版权声明 -->
</template>

<style>

</style>

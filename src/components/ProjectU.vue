<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ProjectU",
  props: {
    url:{
      type: String,
      required: true
    },
    icon_url: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    author: {
      type: String,
      required: false,
      default: '夜林'
    },
    background_url: {
      type: String,
      required: false,
      default: '/src/assets/svg_icon/LOGO.svg'
    }
  },
  methods: {
    formatDate(date: Date): string {
      return date.toLocaleDateString(); // 转换为当地日期格式
    }
  }
})
</script>

<template>
  <a id="primaryBox" class="d-inline-flex flex-column" :href="url" target="_blank">
    <!-- 模糊背景-->
    <img id="backgroundPhoto" :src="background_url" alt=""/>
    <div class="d-inline-flex project-caption" style="height: 5rem">
      <!-- 图标-->
      <img id="icon" :src="icon_url" alt="icon" height="100%" />
      <!-- 详细信息-->
      <div style="flex: 5;text-align: start;padding-left: 0.3em">
        <label class="title">{{name}}</label><br>
        <label>{{formatDate(date)}}</label><br>
        <label>作者：{{author}}</label>
      </div>
    </div>


  </a>
</template>

<style scoped>
#primaryBox{
  position: relative;
  width: 100%;
  height: 300px;
  margin: 3px 0;
  background-color: #34343420;
  border: 1px solid #56565680;
  border-radius: 3px;
  overflow: hidden;
  will-change: filter;
  filter: brightness(100%);
  cursor: pointer;
}
#primaryBox:hover{
  will-change: filter;
  filter: drop-shadow(3px 5px 3px #00000090);
  transform: translateY(-3px);
  transition: transform 300ms;
}
#backgroundPhoto{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -100;
  pointer-events: none;
}
.project-caption{
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  background-color: #33333380;
  backdrop-filter: blur(30px);
}
#icon{
  background-color: #eaeaea;
  border-radius: 5px;
}
.title{
  font-size: 20px;
}
label:hover{
  background-color: #33333380;
}
</style>
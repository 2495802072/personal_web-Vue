<script setup lang="ts">
import {Project} from "../interface/types.ts";
import ProjectGodotBox from "../components/ProjectGodotBox.vue";
import ProjectUnityBox from "../components/ProjectUnityBox.vue";

const projectListG1: Project[] = [
  {
    id: 1,
    name: 'Godot1（模板）',
    icon_url: '/src/assets/svg_icon/Godot-icon.svg',
    date: new Date('2024-08-10'),
    author: '夜林',
    background_photo_url: '/src/assets/svg_icon/LOGO.svg',
    url: '#'
  },
  {
    id: 2,
    name: 'Godot2（模板）',
    icon_url: '/src/assets/svg_icon/Godot-icon.svg',
    date: new Date('2024-8-10'),
    author: '夜林',
    background_photo_url: '/src/assets/svg_icon/Godot-icon.svg',
    url: '#'
  }
]

const projectListU1: Project[] = [
  {
    id: 1,
    name: 'Unity1（模板）',
    icon_url: '/src/assets/svg_icon/Unity-icon.svg',
    date: new Date('2024-08-10'),
    author: '夜林',
    background_photo_url: '/src/assets/svg_icon/Unity-icon.svg',
    url: '#'
  },
  {
    id: 2,
    name: 'Unity2（模板）',
    icon_url: '/src/assets/svg_icon/Unity-icon.svg',
    date: new Date('2024-8-10'),
    author: '夜林',
    url: '#'
  }
]

const projectListG2: Project[] = [
  {
    id: 1,
    name: 'Godot2-1（模板）',
    icon_url: '/src/assets/svg_icon/Godot-icon.svg',
    date: new Date('2024-08-10'),
    author: '夜林',
    url: '#'
  },
  {
    id: 2,
    name: 'Godot2-2（模板）',
    icon_url: '/src/assets/svg_icon/Godot-icon.svg',
    date: new Date('2024-8-10'),
    author: '夜林',
    url: '#'
  }
]

const projectListU2: Project[] = [
  {
    id: 1,
    name: 'Unity2-1（模板）',
    icon_url: '/src/assets/svg_icon/Unity-icon.svg',
    date: new Date('2024-08-10'),
    author: '夜林',
    url: '#'
  },
  {
    id: 2,
    name: 'Unity2-2（模板）',
    icon_url: '/src/assets/svg_icon/Unity-icon.svg',
    date: new Date('2024-8-10'),
    author: '夜林',
    url: '#'
  }
]

const projectListG3: Project[] = [
  {
    id: 1,
    name: 'Godot3-1（模板）',
    icon_url: '/src/assets/svg_icon/Godot-icon.svg',
    date: new Date('2024-08-10'),
    author: '夜林',
    url: '#'
  },
  {
    id: 2,
    name: 'Godot3-2（模板）',
    icon_url: '/src/assets/svg_icon/Godot-icon.svg',
    date: new Date('2024-8-10'),
    author: '夜林',
    url: '#'
  }
]
</script>

<template>
  <div id="background">
    <img class="frame2" src="@/assets/image/Gear2.png" alt="" width="350" height="350" style="left:55px; top:105px; " />
    <img class="frame1" src="@/assets/image/Gear1.png" alt="" width="400" height="400" style="left:-200px; top:-200px; " />
    <img class="frame2" src="@/assets/image/Gear2.png" alt="" width="300" height="300" style="right:-75px; bottom:-150px; " />
    <img class="frame1" src="@/assets/image/Gear1.png" alt="" width="300" height="300" style="right:-180px; bottom:120px; " />
  </div>

  <div id="primaryBox">

    <h3 style="background-color: #23232380;border-radius: 10px 10px 0 0;border: 4px double #fff;">初学</h3>
    <div class="projectBox1">
      <div class="projectBox2">
        <project-godot-box :projectList="projectListG1" />
        <project-unity-box :project-list="projectListU1" />
      </div>
    </div>
    <h3 style="background-color: #23232380;border-radius: 10px 10px 0 0;border: 4px double #fff;">学成</h3>
    <div class="projectBox1">
      <div class="projectBox2">
        <project-godot-box :projectList="projectListG2" />
        <project-unity-box :project-list="projectListU2" />
      </div>
    </div>
    <h3 style="background-color: #23232380;border-radius: 10px 10px 0 0;border: 4px double #fff;">学精</h3>
    <div class="projectBox1">
      <div class="projectBox2">
        <project-godot-box :projectList="projectListG3" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#primaryBox {
  position: relative;
  overflow: hidden;
  transform: translateX(1.8rem);
  width: 83vw;
  z-index: 10;
}

#background {
  position: fixed;
  top: 0;left: 0;bottom: 0;right: 0;
  z-index: 5;
  pointer-events: none;
  will-change: filter;
  filter: brightness(50%);
}

.projectBox1 {
  background-color: #56565620;
  width: 100%;
  height: 80vh;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  overflow-y: auto;
}

.projectBox2 {
  display: flex;
  justify-content: space-around;
  height: auto;
  width: 100%;
}

.projectBox1::-webkit-scrollbar {
  display: none;
}

@media (max-width: 768px) {
  #primaryBox {
    transform: none;
  }
  .projectBox2 {
    flex-direction: column;
  }
}

/* 帧动画 */
@keyframes gearRotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.frame1{
  position: absolute;
  animation: gearRotation 40s linear  infinite;
}
.frame2{
  position: absolute;
  animation: gearRotation 40s linear infinite reverse;
}
</style>
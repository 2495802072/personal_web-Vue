<script lang="ts">
import {defineComponent} from 'vue'
import IconExToText from "../components/IconExToText.vue";
import iconHome from "../assets/svg_icon/home-alt.svg"

export default defineComponent({
  name: "Nav",
  data() {
      return {
        isMobile: false,// 区分移动端/PC端
        theme_dark: true,
        nav_list: [{ // pages 加完记得修改router/index.ts
          link_to: '/',
          icon_url: "src/assets/svg_icon/home-alt.svg",
          text: '首页'
        },{
          link_to: '/archives',
          icon_url: "@/assets/svg_icon/id-badge-2.svg",
          text: '档案'
        },{
          link_to: '/categories',
          icon_url: "../assets/svg_icon/grid.svg",
          text: '分类'
        },{
          link_to: '/messages',
          icon_url: '../assets/svg_icon/envelope-alt.svg',
          text: '消息'
        },{
          link_to: '/projects',
          icon_url: '../assets/svg_icon/box.svg',
          text: '项目'
        }]
      }
  },
  components: {IconExToText},
  methods: {
    toggleCard() { // 控制 个人名片 展开/not
      this.$emit('toggle-card')
    },
    updateIsMobile() { // 区分移动端/PC端
      const screenWidth = window.innerWidth;
      // 假设屏幕宽度小于等于 768px 时为手机端
      this.isMobile = screenWidth <= 768;
    },
    updateThemeDark() {
      this.theme_dark = window.matchMedia('(prefers-color-scheme: dark)').matches; // 根据用户的偏好设置主题
    }
  },
  mounted() {
    this.updateIsMobile(); // 初始化状态
    this.updateThemeDark(); // 初始化主题状态

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      this.updateThemeDark(); // 监听主题模式变化
    });

    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.updateThemeDark);
  }
})
</script>

<template>
  <!-- navbar -->
  <nav class="navbar" :class="isMobile?'fixed-bottom':'fixed-left'">

    <!-- navbar·图标N -->
    <a id="icon_N" v-if="!isMobile" class="btn border-dark-subtle border-2 shadow" href="#" @click="toggleCard()">
      <img src="@/assets/svg_icon/N.svg" alt="N" width="60px" height="60px">
    </a>

    <!-- navbar·Navs -->
    <div id="navs" class="d-flex" :class="isMobile?'flex-row':'flex-column'">

      <!-- navbar·主体 -->
      <div id="page_list" role="group" aria-label="menu" >
        <router-link v-for="item in nav_list" :to="item.link_to">
          <icon-ex-to-text :url="item.icon_url" :text="item.text"/>
        </router-link>
      </div>

      <!-- navbar·底脚 -->
      <hr v-if="!isMobile" class="w-100">
      <a id="theme_icon" v-if="!isMobile" title="跟随浏览器主题">
        <img src="@/assets/svg_icon/moon.svg" alt="">
      </a>
      <router-link to="/about" v-if="!isMobile">
        <icon-ex-to-text url="/src/assets/svg_icon/help.svg" text="关于"/>
      </router-link>

    </div>
  </nav>
</template>

<style>
nav {
  position: relative;
  padding: 30px;
  max-height: 100vh;
  width: 68px;
  background-color: var(--NFSW-nav-bankground-color);
  transition: width 0.2s ease-in-out;
}
nav a {
  position: relative;
  font-weight: bold;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
nav a.router-link-exact-active::before{
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 5px;
  height: 100%;
  clip-path: polygon(0 0, 100% 50%, 0 100%);
  background-color: #909090;
}
#theme_icon{
  cursor: auto;
}
#theme_icon:hover{
  filter: none;
}
#icon_N{
  will-change: filter;
  filter: invert(100%);
  background-color: #ebebeb;
  width: 100%;
  min-width: 6rem;
}
#navs{
  padding: 1rem 0;
  position: absolute;
  top: 80px;
  bottom: 0;
  width: 100%;
}
#page_list{
  overflow: scroll;
  overflow-x: hidden;

  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
}
#page_list::-webkit-scrollbar{
  display: none;
}
#page_list a{
  margin-bottom: 1rem;
}
@media (prefers-color-scheme: light){
  #icon_N {
    filter: invert(0);
  }
}
@media (max-width: 768px){
  nav{
    max-height: none;
    width: 100%;
    opacity: 1;
  }
  nav a::before{
    display: none;
  }
  #navs{
    position: relative;
    padding: 0;
    top: 0;
  }
  #page_list{
    overflow-y: hidden;
    flex-direction: row;
    justify-content: space-around;
  }
  #page_list a{
    margin: 0;
  }
}
</style>
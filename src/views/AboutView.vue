<script setup lang="ts">

</script>

<template>
  <div class="about d-flex flex-column">
    <div class="d-inline-flex">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="@/assets/svg_icon/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <a href="https://www.tslang.cn/" target="_blank">
        <img src="@/assets/svg_icon/brand-typescript.svg" class="logo ts" alt="TS logo" />
      </a>
    </div>
    <h1> Vite + Vue + TS</h1>
    <hr>
    <p>网站部署：<a href="https://app.netlify.com/">Netlify</a></p>
    <p>开发参与：<a href="https://github.com/2495802072">顾霖轩</a>&numsp;<a href="#">夜林</a></p>
  </div>
</template>

<style scoped>
.about{
  height: 80vh;
}
.logo {
  height: 10em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.ts:hover {
  filter: drop-shadow(0 0 2em #333333aa) invert(100%);
}
</style>
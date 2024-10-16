<script lang="ts">
import {CSSProperties, defineComponent} from 'vue'

export default defineComponent({
  name: "IconExToText",
  props: {
    text: {
      type: String,
      default: "" //设置默认值
    },
    url: {
      type: String,
      required: true, //设置为必传参数
    },
    nav_open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      absoluteStyles: {
        display: "none",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        maxHeight: "40px"
      } as CSSProperties, // 明确指定类型
      relativeStyles: {
        position: "relative",
        display: "flex",
        whiteSpace: "nowrap",
        paddingTop: "2px",
        width: "200px",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      } as CSSProperties // 明确指定类型
    }
  },
  computed: {
    currentStyles() {
      return this.nav_open ? this.relativeStyles : this.absoluteStyles;
    }
  }
})
</script>

<template>
  <div :class="nav_open?'disabled':''" class="image-container w-100 h-100">
    <img :src="url" alt="">
    <span :style="currentStyles" class="overlay-text text-break">{{text}}</span>
  </div>
</template>

<style scoped>/* scoped设置CSS仅在当前Vue组件生效 */
div.disabled{
  visibility: visible;
  pointer-events: none;
}
.image-container {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
}

.image-container img {
  width: 40px;
  height: auto;
  margin: auto;
  display: block;
}
/*CSS能解决的效果，尽量不要采用JS/TS*/
.image-container:hover>.overlay-text {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
.image-container:hover>img{
  visibility: hidden;
}
</style>
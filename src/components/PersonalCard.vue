<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "PersonalCard",
  props: {
    width: {
      type: String,
      default: '200px',
      required: true
    },
    height: {
      type: String,
      default: '350px',
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    tarNum: {
      type: Number
    }
  },
  data() {
    return {
      bsCardBoxSize: {
        width: this.width,
        height: this.height
      },
      thumbs: 0,
      lookNum: 0
    }
  },
  methods: {
    thumbsUp: function (){
      this.thumbs+=1
    }
  },
  mounted() {
    this.lookNum +=1
  }
});
</script>

<template>
  <transition name="card" mode="in-out">
    <div v-if="isVisible" class="bsCardBox" :style="bsCardBoxSize">
      <div class="p-3">
        <img src="../assets/svg_icon/LOGO.svg" width="110px" alt="LOGO">
      </div>
      <h5 class="m-0">顾霖轩</h5>
      <a class="" href="https://map.baidu.com/search/%E9%87%91%E5%8D%8E%E5%B8%82/@13321618.12193194,3364552.7737737163,14.28z?querytype=s&da_src=shareurl&wd=%E9%87%91%E5%8D%8E%E5%B8%82&c=179&src=0&wd2=%E6%B5%99%E6%B1%9F%E7%9C%81%E9%87%91%E5%8D%8E%E5%B8%82&pn=0&sug=1&l=13&b=(13346855,3513261;13402471,3540909)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&sug_forward=5a3be65abdeb6544e01103e7&device_ratio=2"
         target="_blank">
        <img src="../assets/svg_icon/location.svg" alt="" width="25px">
        JinHua,China
      </a>

      <div class="d-inline-flex flex-column w-100 h-100 p-3">
<!--        中部按钮-->
        <div style="flex: 2;" class="btn-group">
<!--          浏览人数-->
          <a href="#" class="btn">
            <img src="../assets/svg_icon/eye.svg" alt="email-icon" width="40px">
            <p>{{ lookNum }}</p>
          </a>
<!--          标签-->
          <a href="#" class="btn">
            <img src="../assets/svg_icon/tag-alt.svg" alt="tag-alt-icon" width="40px">
            <p>{{ tarNum }}</p>
          </a>
<!--          点赞-->
          <a href="#" class="btn" @click="thumbsUp">
            <img src="../assets/svg_icon/thumb-up.svg" alt="thumb-icon" width="40px">
            <p>{{thumbs}}</p>
          </a>
        </div>

        <hr class="w-100">
<!--        底部按钮-->
        <div class="btn-group">
<!--          邮箱-->
          <a href="mailto:2495802072@qq.com" class="btn border-secondary">
            <img src="../assets/svg_icon/envelope-alt.svg" alt="email-icon" width="40px">
            <label>Email</label>
          </a>
<!--          Github-->
          <a href="https://github.com/2495802072" class="btn border-secondary" target="_blank">
            <img src="../assets/svg_icon/github-icon1.svg" alt="github-icon" width="40px">
            <label>Github</label>
          </a>
<!--          Wechat-->
          <a href="#" class="btn border-secondary disabled">
            <img src="../assets/svg_icon/weiChat-icon.svg" alt="weiChat-icon" width="40px">
            <label>微信</label>
          </a>
<!--          BiliBili-->
          <a href="#" class="btn border-secondary disabled">
            <img src="../assets/svg_icon/BiliBili-icon.svg" alt="BiliBili-icon" width="40px">
            <label>BiliBili</label>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.bsCardBox {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 1rem;
  left: 5rem;
  padding: 1rem;
  background-color: #11111180;
  overflow: hidden;
  will-change: filter;
  filter: drop-shadow(0 0 0em var(--GLX-card-border));
  border: 5px double var(--GLX-card-border);
  border-radius: 0 30px 0 30px;
  z-index: 1080;
}

.card-enter-active,
.card-leave-active {
  transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
}

.card-enter, .card-leave-to {
  transform: translateX(-1080px);
  opacity: 0;
}

</style>
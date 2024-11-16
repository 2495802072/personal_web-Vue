import {createApp} from 'vue'
import App from './App.vue'
import router from './router';

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import "./bootstrap-overwrite.css"
import {RouteLocationNormalized} from "vue-router";
import "./style.css"

const app = createApp(App)

router.beforeEach((to: RouteLocationNormalized) => {
    // 使用 `meta` 字段中的标题
    document.title = (to.meta.title as string) || '顾霖轩的个人网页'; // 设置页面标题
});

app.use(router)
app.mount('#app')

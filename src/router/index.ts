import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Archives from  '../views/ArchivesView.vue';
import Categories from  '../views/CategoriesView.vue';
import Messages from  '../views/MessagesView.vue';
import Projects from  '../views/ProjectsView.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title: '首页'}
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {title: '关于'}
    },
    {
        path: '/archives',
        name: 'Archives',
        component: Archives,
        meta: {title: '个人档案'}
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories,
        meta: {title: '分类'}
    },
    {
        path: '/messages',
        name: 'Messages',
        component: Messages,
        meta: {title: '消息'}
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
        meta: {title: '项目'}
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
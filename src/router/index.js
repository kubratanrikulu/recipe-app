import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/Layout.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
    ],
  },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
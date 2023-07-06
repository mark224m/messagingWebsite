import Vue from 'vue';
import VueRouter from 'vue-router';
import Topics from './Topics.vue';
import Home from './Home.vue';
import Boards from './boards.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/topics', component: Topics },
  { path: '/boards/:id', component: Boards },
];

const router = new VueRouter({
    mode: 'hash',
    routes,
  });

export default router;
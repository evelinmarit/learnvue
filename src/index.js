import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { createRouter, createWebHistory } from 'vue-router';

import Modals from './pages/Modals.vue';
import MyCat from './pages/MyCat.vue';
import ToDo from './pages/ToDo.vue';

const routes = [
  { path: '/', component: Modals, name: 'Modals' },
  { path: '/todo', component: ToDo, name: 'ToDo' },
  { path: '/mycat', component: MyCat, name: 'My Cat' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#root');

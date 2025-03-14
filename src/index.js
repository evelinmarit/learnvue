import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { createRouter, createWebHistory } from 'vue-router';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import ChuckNorris from './pages/ChuckNorris.vue';

const routes = [
  { path: '/', component: Modals, name: 'Modals' },
  { path: '/todo', component: ToDo, name: 'ToDo' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#root');

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChangelogView from '@/views/ChangelogView.vue'
import NotFound from '@/views/NotFound.vue'
import BuilderView from "@/views/BuilderView.vue";

const dev: boolean = import.meta.env.DEV;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/builder',
      name: 'builder',
      component: BuilderView,
      props: { version: '' }
    },
    {
      path: '/builder-2024',
      name: 'builder-2024',
      component: BuilderView,
      props: { version: '2024' }
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: ChangelogView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: NotFound
    }
  ]
})

export default router

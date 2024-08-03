import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ChangelogView from '@/views/ChangelogView.vue'
import NotFound from '@/views/NotFound.vue'
import TestView from '@/views/TestView.vue'
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
      component: BuilderView
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: ChangelogView
    },
    {
      path: '/test',
      name: 'test',
      component: dev ? TestView : NotFound
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: NotFound
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

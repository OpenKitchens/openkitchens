import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/homeDeck.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/chatDeck.vue')
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('../views/notificationDeck.vue')
    },

    {
      path: '/thread',
      name: 'thread',
      component: () => import('../views/threadDeck.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/eventDeck.vue')
    },
    {
      path: '/season',
      name: 'season',
      component: () => import('../views/seasonDeck.vue')
    },
    {
      path: '/node',
      name: 'node',
      component: () => import('../views/nodeDeck.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/profilDeck.vue')
    },
    {
      path: '/server',
      name: 'server',
      component: () => import('../views/serverDeck.vue')
    },

    {
      path: '/randing',
      name: 'randing',
      component: () => import('../views/randing-account.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings-account.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login-account.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signup-account.vue')
    }
  ]
})

export default router

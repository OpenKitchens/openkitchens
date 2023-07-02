import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../assets/views/home/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/invite",
      name: "invite",
      component: () => import("../assets/views/userConnect/invite.vue")
    }
  ]
})

export default router

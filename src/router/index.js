import { createRouter, createWebHistory } from "vue-router";

// Lazy-loaded pages (bisa juga import biasa)
const Home = () => import("../pages/Home.vue");
const Tentang = () => import("../pages/About.vue");
const TentangMe = () => import("../pages/AboutMe.vue");
const Squad = () => import("../pages/Squad.vue");
const Pertandingan = () => import("../pages/Pertandingan.vue");
const Merchandise = () => import("../pages/Merchandise.vue");
const BeliTiket = () => import("../pages/BeliTiket.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/tentang", name: "tentang", component: Tentang },
    { path: "/squad", name: "squad", component: Squad },
    { path: "/pertandingan", name: "pertandingan", component: Pertandingan },
    { path: "/merchandise", name: "merchandise", component: Merchandise },
    { path: "/tentangMe", name: "tentangMe", component: TentangMe },
    {
      path: "/belitiket",
      name: "belitiket",
      component: () => import("../pages/BeliTiket.vue"),
    },
  ],
  // biar tiap pindah halaman auto ke atas
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

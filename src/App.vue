<script setup>
import NavBar from "./components/Navbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const route = useRoute();
// treat these routes as full-bleed pages (no outer container)
const fullBleedRoutes = [
  "home",
  "tentang",
  "squad",
  "pertandingan",
  "merchandise",
  "belitiket",
];
const mainClass = computed(() =>
  fullBleedRoutes.includes(route.name) ? "p-0" : "container mx-auto px-4 py-6"
);
</script>
<template>
  <div class="min-h-screen bg-white text-white">
    <NavBar />
    <!-- ini tempat halaman muncul; container hanya aktif untuk non-home routes -->
    <main :class="mainClass">
      <router-view />
    </main>
  </div>
</template>

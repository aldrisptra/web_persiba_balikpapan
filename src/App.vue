<template>
  <div class="min-h-screen bg-white text-white">
    <NavBar />
    <!-- ini tempat halaman muncul; container hanya aktif untuk non-home routes -->
    <main :class="mainClass">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from "./components/Navbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// treat route name 'home' as full-bleed; adjust if your route name differs
// For the home route remove outer padding so the hero can fill the
// remaining viewport and align exactly with the navbar. Other routes
// keep the standard centered container with padding.
const mainClass = computed(() =>
  route.name === "home" ? "p-0" : "container mx-auto px-4 py-6"
);
</script>

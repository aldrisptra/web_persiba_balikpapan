<script setup>
import NavBar from "./components/Navbar.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const mainClass = computed(() =>
  route.name === "home" ? "p-0" : "container mx-auto px-4 py-6"
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

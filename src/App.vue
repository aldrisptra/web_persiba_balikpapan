<template>
  <div class="min-h-screen bg-white text-white">
    <NavBar />
    <main class="container mx-auto px-4 py-6">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from "./components/Navbar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<script setup>
import { ref } from "vue";
import logo from "../assets/logopersiba.png";

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header class="bg-[#0d355d] border-b">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <!-- Logo at left of site name. Replace the import in the <script setup> with your own file (e.g. src/assets/logo.png) to change the logo -->
        <img
          :src="logo"
          alt="Persiba logo"
          class="h-8 w-8 object-contain mr-2"
        />
        <span class="text-xl font-bold text-white">Persiba Balikpapan</span>
      </div>
      <!-- desktop nav (hidden on small screens) -->
      <nav class="hidden md:flex gap-6 items-center">
        <RouterLink
          :to="{ name: 'home' }"
          class="relative inline-block py-2 group"
        >
          Home
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'tentang' }"
          class="relative inline-block py-2 group"
        >
          About
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'squad' }"
          class="relative inline-block py-2 group"
        >
          Squad
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'pertandingan' }"
          class="relative inline-block py-2 group"
        >
          Match
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'merchandise' }"
          class="relative inline-block py-2 group"
        >
          werchandise
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>
      </nav>

      <!-- mobile actions: hamburger + optional CTA hidden on small inside mobile menu -->
      <div class="flex items-center gap-2">
        <!-- desktop CTA stays visible on md+ only -->
        <RouterLink
          :to="{ name: 'belitiket' }"
          class="hidden md:inline-flex items-center gap-1 bg-yellow-300 hover:bg-yellow-200 text-black font-semibold py-2 px-4 rounded-lg transition"
        >
          <v-icon name="hi-ticket" class="h-5 w-5 text-black" />
          Beli Tiket
          <span aria-hidden="true"></span>
        </RouterLink>

        <!-- hamburger button (visible on small screens) -->
        <button
          @click="toggleMenu"
          :aria-expanded="menuOpen.toString()"
          aria-label="Toggle navigation"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        >
          <svg
            v-if="!menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile menu (small screens) -->
      <div
        v-show="menuOpen"
        class="md:hidden absolute top-full left-0 w-full bg-[#0d355d] border-b z-50"
      >
        <div class="px-4 pt-4 pb-6 space-y-2">
          <RouterLink
            @click="menuOpen = false"
            :to="{ name: 'home' }"
            class="block py-2"
            >Home</RouterLink
          >
          <RouterLink
            @click="menuOpen = false"
            :to="{ name: 'tentang' }"
            class="block py-2"
            >About</RouterLink
          >
          <RouterLink
            @click="menuOpen = false"
            :to="{ name: 'squad' }"
            class="block py-2"
            >Squad</RouterLink
          >
          <RouterLink
            @click="menuOpen = false"
            :to="{ name: 'pertandingan' }"
            class="block py-2"
            >Match</RouterLink
          >
          <RouterLink
            @click="menuOpen = false"
            :to="{ name: 'merchandise' }"
            class="block py-2"
            >Merchandise</RouterLink
          >
          <div class="pt-2">
            <RouterLink
              @click="menuOpen = false"
              :to="{ name: 'belitiket' }"
              class="block bg-yellow-300 text-black text-center py-2 rounded-md font-semibold"
              >Beli Tiket</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

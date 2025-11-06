<script setup>
import logo from "../assets/logopersiba.png";
</script>

<template>
  <footer class="bg-[#071A32] text-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-12 py-10">
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
      >
        <div
          class="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left"
        >
          <img
            :src="logo"
            alt="Persiba logo"
            class="h-12 w-12 object-contain"
          />
          <div>
            <h3 class="text-xl font-bold text-white">Persiba Balikpapan</h3>
            <p class="text-sm text-white/80 md:max-w-[30ch]">
              Ikuti kami di media sosial untuk update terbaru
            </p>
          </div>
        </div>

        <div
          class="mt-4 text-center flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <a class="text-sm text-white/80 hover:text-yellow-300">
            <router-link :to="{ name: 'home' }"> Home </router-link>
          </a>
          <a class="text-sm text-white/80 hover:text-yellow-300">
            <router-link :to="{ name: 'merchandise' }">
              Merchandise
            </router-link>
          </a>
          <a class="text-sm text-white/80 hover:text-yellow-300">
            <router-link :to="{ name: 'belitiket' }"> Beli Tiket </router-link>
          </a>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="text-sm font-bold text-white text-center">
            Media Sosial
          </div>
          <div class="flex items-center gap-4">
            <a
              href="https://instagram.com/persiba"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <div style="font-size: 24px">
                <i class="ri-instagram-fill hover:text-yellow-300"></i>
              </div>
            </a>

            <a
              href="https://facebook.com/persibaBpn"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <div style="font-size: 24px">
                <i class="ri-facebook-circle-fill hover:text-yellow-300"></i>
              </div>
            </a>

            <a
              href="https://twitter.com/persibadaily"
              target="_blank"
              rel="noopener"
              class="hover:opacity-90"
              aria-label="Twitter"
            >
              <div style="font-size: 24px">
                <i class="ri-twitter-x-fill hover:text-yellow-300"></i>
              </div>
            </a>

            <a
              href="https://youtube.com/Persiba Balikpapan"
              target="_blank"
              rel="noopener"
              class="hover:opacity-90"
              aria-label="YouTube"
            >
              <div style="font-size: 24px">
                <i class="ri-youtube-fill hover:text-yellow-300"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 lg:pl-35 md:pl-30 text-center text-sm text-white/70">
        &copy; 2025 PERSIBA BALIKPAPAN.
      </div>
    </div>
  </footer>
</template>

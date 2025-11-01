<script setup>
import bgimage from "../assets/stdbatakan.webp";
import SocialFooter from "../components/SocialFooter.vue";
</script>

<template>
  <div>
    <!-- 2) HEADER / HERO -->
    <section
      class="relative left-1/2 right-1/2 -translate-x-1/2 w-screen text-white flex items-center"
      :style="{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 4rem)',
      }"
    >
      <!-- overlay -->
      <div class="absolute inset-0 bg-black/50"></div>

      <!-- konten -->
      <div
        class="relative container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 h-full"
      >
        <div class="flex-1 space-y-4 flex flex-col justify-center">
          <p class="uppercase tracking-wide text-sm text-blue-100">
            Klub Resmi
          </p>
          <h1 class="text-3xl md:text-4xl font-bold leading-tight">
            Selamat Datang di Klub
            <span class="text-blue-400">Persiba Balikpapan</span>
          </h1>
          <p class="text-blue-50 max-w-xl">
            Tim Kebanggan Kota <span class="text-blue-400">Balikpapan</span>.
          </p>
          <div class="flex gap-3">
            <router-link
              :to="{ name: 'merchandise' }"
              class="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-blue-200"
            >
              Lihat Merchandise
            </router-link>
            <router-link
              :to="{ name: 'belitiket' }"
              class="border border-white/60 px-4 py-2 rounded-lg hover:bg-white/20 font-semibold"
            >
              Beli Tiket
            </router-link>
          </div>
        </div>

        <div class="flex-1 flex items-center">
          <div
            class="bg-white/10 rounded-2xl p-6 border border-white/20 w-full"
          >
            <p class="text-sm text-blue-50 mb-2">Pertandingan berikutnya</p>
            <h2 class="text-xl font-semibold">Klub A vs Klub B</h2>
            <p class="text-blue-100 text-sm">
              Sabtu, 15 Nov 2025 • Stadion Utama
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3) BAGIAN TENGAH (fitur/info klub) -->
    <section class="bg-[#0d355d] py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-2xl font-bold mb-6 text-white">
          Kenapa belanja di sini?
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            class="border border-white/10 bg-white/5 rounded-xl p-5 shadow-sm"
          >
            <h3 class="font-semibold mb-2 text-white">Merchandise Resmi</h3>
            <p class="text-sm text-white">
              Produk langsung dari klub, kualitas terjamin.
            </p>
          </div>
          <div
            class="border border-white/10 bg-white/5 rounded-xl p-5 shadow-sm"
          >
            <h3 class="font-semibold mb-2 text-white">Tiket Pertandingan</h3>
            <p class="text-sm text-white">
              Pesan tiket tanpa antri, langsung dari web.
            </p>
          </div>
          <div
            class="border border-white/10 bg-white/5 rounded-xl p-5 shadow-sm"
          >
            <h3 class="font-semibold mb-2 text-white">Promo Member</h3>
            <p class="text-sm text-white">
              Dapatkan diskon khusus untuk member setia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4) BERITA TERKINI -->
    <section class="bg-[#0d355d] py-12">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-white">Berita terkini</h2>
          <router-link
            :to="{ name: 'pertandingan' }"
            class="text-blue-200 hover:text-white underline-offset-4 hover:underline"
          >
            Lihat semua →
          </router-link>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <article class="bg-white rounded-xl border p-4">
            <p class="text-xs text-gray-400 mb-1">30 Okt 2025</p>
            <h3 class="font-semibold mb-2">Klub menang 3-1 di laga kandang</h3>
            <p class="text-sm text-gray-600 mb-3">
              Pertandingan berjalan seru, gol tercipta menit akhir...
            </p>
            <router-link
              :to="{ name: 'pertandingan' }"
              class="text-blue-600 text-sm"
            >
              Baca selengkapnya →
            </router-link>
          </article>

          <article class="bg-white rounded-xl border p-4">
            <p class="text-xs text-gray-400 mb-1">28 Okt 2025</p>
            <h3 class="font-semibold mb-2">Jersey Third 2025 resmi dirilis</h3>
            <p class="text-sm text-gray-600 mb-3">
              Desain terinspirasi dari warna kebesaran kota...
            </p>
            <router-link
              :to="{ name: 'merchandise' }"
              class="text-blue-600 text-sm"
            >
              Cek merchandise →
            </router-link>
          </article>

          <article class="bg-white rounded-xl border p-4">
            <p class="text-xs text-gray-400 mb-1">26 Okt 2025</p>
            <h3 class="font-semibold mb-2">Pembukaan penjualan tiket derby</h3>
            <p class="text-sm text-gray-600 mb-3">
              Tiket derby sudah bisa dibeli melalui website...
            </p>
            <router-link
              :to="{ name: 'belitiket' }"
              class="text-blue-600 text-sm"
            >
              Beli tiket →
            </router-link>
          </article>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <SocialFooter />
  </div>
</template>

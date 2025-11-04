<script setup>
import bgimage from "../assets/stdbatakan.webp";
import SocialFooter from "../components/SocialFooter.vue";

import videoThumb1 from "../assets/video1.jpg";
import videoThumb2 from "../assets/video2.jpg";
import videoThumb3 from "../assets/video3.jpg";

import news1 from "../assets/batakan.jpg";
import news2 from "../assets/grid2.jpg";
import news3 from "../assets/grid3.webp";

const videos = [
  {
    title:
      "Barito Putera 3-0 Persiba Balikpapan | HIGHLIGHTS | Pegadaian Championship 2025/26",
    date: "3 November 2025",
    url: "https://youtu.be/vL8xB1aw1eA?si=tedzTOdtlf5gfRIJ",
    thumb: videoThumb1,
  },
  {
    title:
      "Kembali Raih Kemenangan! | #BehindTheMatch: Persiku vs Persiba Balikpapan | Pegadaian Championship",
    date: "30 October 2025",
    url: "https://youtu.be/C_DNywKDu_g?si=loSOZ8Ti_aey_q3M",
    thumb: videoThumb2,
  },
  {
    title:
      "Persiba Balikpapan 3-0 Persiku Kudus | HIGHLIGHTS | Pegadaian Championship 2025/26",
    date: "27 October 2025",
    url: "https://youtu.be/Kh4BEmhs_Hg?si=hYbpXCXUQKBS9Ubi",
    thumb: videoThumb3,
  },
];

const news = [
  {
    date: "19 September 2025",
    title: "Tiket persia vs persipal dijual",
    excerpt:
      "4 Kategori Tiket Persiba Vs Persipal di Stadion Batakan Resmi Dijual Mulai Rp50.000, Cek Caranya!",
    url: "https://nomorsatukaltim.disway.id/olahraga/read/63474/4-kategori-tiket-persiba-vs-persipal-di-stadion-batakan-resmi-dijual-mulai-rp50000-cek-caranya",
  },
  {
    date: "27 September 2025",
    title: "Persiba Bungkam PSIS di kandang psis",
    excerpt:
      "PSIS Telan Tiga Kekalahan Beruntun Setelah Digebuk Persiba: Pemain Ketakutan dan Overthinking saat Unggul",
    url: "https://www.bola.com/indonesia/read/6170401/psis-telan-tiga-kekalahan-beruntun-setelah-digebuk-persiba-pemain-ketakutan-dan-overthinking-saat-unggul",
  },
  {
    date: "6 Desember 2022",
    title: "Jersey Third 2025 resmi dirilis",
    excerpt:
      "Harga Jersey Official Resmi Persiba Balikpapan, Tersedia di Toko Karbitan Sponsor Lokal",
    url: "https://kaltim.tribunnews.com/2022/12/06/harga-jersey-official-resmi-persiba-balikpapan-tersedia-ditoko-karbitan-sponsor-lokal",
  },
];

const thumbs = [news1, news2, news3];
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
        class="relative container mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-8 h-full text-center"
      >
        <div class="space-y-4 flex flex-col justify-center items-center">
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
              :to="{ name: 'belitiket' }"
              class="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-200"
            >
              Beli Tiket
            </router-link>
            <router-link
              :to="{ name: 'merchandise' }"
              class="border border-white/60 px-4 py-2 rounded-lg hover:bg-white/20 font-semibold"
            >
              Lihat Merchandise
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 3) VIDEO TERBARU (grid) -->
    <section class="bg-[#0d355d] py-12">
      <div class="container mx-auto px-4 md:px-6 lg:px-12">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-white">Video Terbaru</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <a
            v-for="(v, i) in videos"
            :key="i"
            :href="v.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-white rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div class="relative">
              <img
                :src="v.thumb"
                :alt="v.title"
                class="w-full h-44 md:h-56 object-cover"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="bg-black/40 rounded-full p-3">
                  <svg
                    class="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="p-4">
              <h3 class="text-black font-semibold mb-1 line-clamp-2">
                {{ v.title }}
              </h3>
              <p class="text-xs text-gray-400">{{ v.date }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 4) BERITA TERKINI -->
    <section class="bg-[#0d355d] py-12">
      <div class="container mx-auto px-4 md:px-6 lg:px-12">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-white">Berita terkini</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <a
            v-for="(item, i) in news"
            :key="i"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer"
            class="block bg-white rounded-xl border overflow-hidden hover:shadow-lg transition"
          >
            <img
              :src="thumbs[i]"
              :alt="item.title"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h3 class="text-black font-semibold mb-2 line-clamp-2">
                {{ item.title }}
              </h3>
              <p class="text-sm text-gray-600 mb-3 line-clamp-3">
                {{ item.excerpt }}
              </p>
              <p class="text-xs text-gray-400 mb-1">{{ item.date }}</p>
              <span class="text-blue-600 text-sm">Baca selengkapnya →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <SocialFooter />
  </div>
</template>

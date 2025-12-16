<script setup>
import { ref } from "vue";
import bgimage from "../assets/header/stdbatakan.webp";
import logo from "../assets/header/logopersiba.png";
import SocialFooter from "../components/SocialFooter.vue";
import TextType from "../components/TextType.vue";

import videoThumb1 from "../assets/thumbnail/video1.jpg";
import videoThumb2 from "../assets/thumbnail/video2.jpg";
import videoThumb3 from "../assets/thumbnail/video3.jpg";

import news1 from "../assets/thumbnail/batakan.jpg";
import news2 from "../assets/thumbnail/grid2.jpg";
import news3 from "../assets/thumbnail/grid3.webp";

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

// State untuk modal video
const showModal = ref(false);
const selectedVideo = ref(null);

// Function untuk extract YouTube video ID
const getYoutubeVideoId = (url) => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Function untuk buka modal
const openVideoModal = (video) => {
  selectedVideo.value = video;
  showModal.value = true;
};

// Function untuk tutup modal
const closeVideoModal = () => {
  showModal.value = false;
  selectedVideo.value = null;
};

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
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- konten -->
      <div
        class="relative container mx-auto px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-8 h-full text-center"
      >
        <div class="space-y-4 flex flex-col justify-center items-center">
          <img
            :src="logo"
            alt="Persiba logo"
            class="h-20 w-20 object-contain"
          />
          <h1 class="text-3xl md:text-4xl font-bold leading-tight">
            <TextType
              :text="[
                'Selamat Datang di Klub Persiba Balikpapan',
                'Selamat Datang di Klub Persiba Balikpapan',
              ]"
              :typingSpeed="75"
              :pauseDuration="1500"
              :showCursor="true"
              cursorCharacter="|"
              highlight="Persiba Balikpapan"
              highlightClass="text-blue-400"
            />
          </h1>
          <p class="text-blue-50 max-w-xl">
            Website Resmi <span class="text-blue-400">Persiba Balikpapan</span>.
          </p>
          <div class="flex gap-3">
            <router-link
              :to="{ name: 'belitiket' }"
              class="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-200"
            >
              <v-icon name="hi-ticket" class="h-5 w-5 text-black" />
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
          <div
            v-for="(v, i) in videos"
            :key="i"
            @click="openVideoModal(v)"
            class="cursor-pointer block bg-white rounded-xl overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
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
              <span class="text-blue-600 text-sm">Tonton selengkapnya →</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Video -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          @click="closeVideoModal"
        >
          <div
            class="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
            @click.stop
          >
            <!-- Tombol Close -->
            <button
              @click="closeVideoModal"
              class="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <!-- Video Embed -->
            <div class="relative" style="padding-bottom: 56.25%; height: 0">
              <iframe
                v-if="selectedVideo"
                :src="`https://www.youtube.com/embed/${getYoutubeVideoId(
                  selectedVideo.url
                )}?autoplay=1`"
                class="absolute top-0 left-0 w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <!-- Info Video -->
            <div class="p-4 bg-gray-50">
              <h3 class="text-lg font-bold text-gray-900 mb-1">
                {{ selectedVideo?.title }}
              </h3>
              <p class="text-sm text-gray-500">{{ selectedVideo?.date }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

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
            class="block bg-white rounded-xl border overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
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

<style scoped>
/* Animasi untuk modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
}
</style>

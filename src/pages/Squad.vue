<script setup>
import logo from "../assets/logopersiba.png";
import header from "../assets/stdbatakan.webp";
import { ref, computed } from "vue";
import SocialFooter from "../components/SocialFooter.vue";
import TextType from "../components/TextType.vue";

const filterPosition = ref("Semua");
const positions = ["Semua", "Kiper", "Bek", "Gelandang", "Penyerang"];

const players = ref([
  {
    id: 1,
    name: "Pemain 1",
    number: 1,
    position: "Kiper",
    age: 28,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 2,
    name: "Pemain 2",
    number: 2,
    position: "Bek",
    age: 25,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 3,
    name: "Pemain 3",
    number: 3,
    position: "Bek",
    age: 27,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 4,
    name: "Pemain 4",
    number: 4,
    position: "Bek",
    age: 26,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 5,
    name: "Pemain 5",
    number: 5,
    position: "Bek",
    age: 24,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 6,
    name: "Pemain 6",
    number: 6,
    position: "Gelandang",
    age: 23,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 7,
    name: "Pemain 7",
    number: 7,
    position: "Gelandang",
    age: 25,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 8,
    name: "Pemain 8",
    number: 8,
    position: "Gelandang",
    age: 24,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 9,
    name: "Pemain 9",
    number: 9,
    position: "Penyerang",
    age: 26,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 10,
    name: "Pemain 10",
    number: 10,
    position: "Penyerang",
    age: 27,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 11,
    name: "Pemain 11",
    number: 11,
    position: "Penyerang",
    age: 25,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
  {
    id: 12,
    name: "Pemain 12",
    number: 12,
    position: "Kiper",
    age: 30,
    nationality: "🇮🇩 Indonesia",
    image: null,
  },
]);

const filteredPlayers = computed(() =>
  filterPosition.value === "Semua"
    ? players.value
    : players.value.filter((p) => p.position === filterPosition.value)
);
</script>

<template>
  <div>
    <!-- HERO full-bleed, nempel navbar -->
    <section
      class="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex items-center"
      :style="{
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 4rem)',
      }"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative container mx-auto px-4 md:px-6 lg:px-12">
        <div
          class="flex flex-col md:flex-row items-center gap-6 text-white py-6 md:py-0"
        >
          <img
            :src="logo"
            alt="Persiba logo"
            class="h-20 w-20 object-contain"
          />
          <div>
            <h1 class="text-3xl md:text-4xl font-extrabold">
              Pemain
              <span class="text-blue-400">Persiba Balikpapan</span>
            </h1>
            <p class="mt-2 text-white/90">Musim 2025/2026</p>
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN: full-bleed background, konten terpusat -->
    <main class="bg-gradient-to-b from-blue-900 to-blue-950 py-12">
      <section class="w-full">
        <div class="container mx-auto px-4 md:px-6 lg:px-12">
          <!-- FILTER -->
          <div class="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              v-for="position in positions"
              :key="position"
              @click="filterPosition = position"
              :aria-pressed="filterPosition === position"
              class="px-6 py-2 rounded-full font-semibold transition-all duration-300"
              :class="
                filterPosition === position
                  ? 'bg-yellow-400 text-blue-900'
                  : 'bg-blue-800 text-white hover:bg-blue-700'
              "
            >
              {{ position }}
            </button>
          </div>

          <!-- GRID SKUAD -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <div
              v-for="player in filteredPlayers"
              :key="player.id"
              class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <!-- FOTO / PLACEHOLDER -->
              <div
                class="relative bg-gradient-to-br from-blue-600 to-blue-800 h-64 flex items-center justify-center"
              >
                <img
                  v-if="player.image"
                  :src="player.image"
                  :alt="`Foto ${player.name}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div v-else class="text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-32 w-32"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <!-- NOMOR PUNGGUNG -->
                <div
                  class="absolute top-4 right-4 bg-yellow-400 text-blue-900 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                >
                  {{ player.number }}
                </div>
              </div>

              <!-- INFO -->
              <div class="p-4">
                <h3 class="text-xl font-bold text-blue-900 mb-1">
                  {{ player.name }}
                </h3>
                <p class="text-blue-600 font-semibold mb-2">
                  {{ player.position }}
                </p>
                <div class="flex justify-between text-sm text-gray-600">
                  <span>Usia: {{ player.age }} tahun</span>
                  <span
                    v-if="player.nationality"
                    class="flex items-center gap-1"
                  >
                    {{ player.nationality }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- KOSONG -->
          <div v-if="filteredPlayers.length === 0" class="text-center py-16">
            <p class="text-white text-xl">Tidak ada pemain untuk posisi ini.</p>
          </div>
        </div>
      </section>
    </main>

    <SocialFooter />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import bgimage from "../assets/header/stdbatakan.webp";
import SocialFooter from "../components/SocialFooter.vue";
import TextType from "../components/TextType.vue";

const router = useRouter();

// Data pertandingan musim ini
const matches = ref([
  // Pertandingan yang sudah lewat
  {
    id: 1,
    opponent: "PSS Sleman",
    date: "2025-09-15",
    displayDate: "15 September 2025",
    time: "19:00",
    location: "Stadion Maguwoharjo, Sleman",
    competition: "Liga 2",
    status: "finished",
    score: "2-1",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 2,
    opponent: "Persipal FC",
    date: "2025-09-21",
    displayDate: "21 September 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "finished",
    score: "3-2",
    persibaFirst: true,
    ticketAvailable: false,
  },
  {
    id: 3,
    opponent: "PSIS Semarang",
    date: "2025-09-27",
    displayDate: "27 September 2025",
    time: "15:30",
    location: "Stadion Jatidiri, Semarang",
    competition: "Liga 2",
    status: "finished",
    score: "1-2",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 4,
    opponent: "Kendal Tornado FC",
    date: "2025-10-06",
    displayDate: "6 Oktober 2025",
    time: "15:30",
    location: "Stadion Jatidiri, Semarang",
    competition: "Liga 2",
    status: "finished",
    score: "2-0",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 5,
    opponent: "Persela Lamongan",
    date: "2025-10-12",
    displayDate: "12 Oktober 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "finished",
    score: "0-3",
    persibaFirst: true,
    ticketAvailable: false,
  },
  {
    id: 6,
    opponent: "Persipura Jayapura",
    date: "2025-10-19",
    displayDate: "19 Oktober 2025",
    time: "13:30",
    location: "(Tandang)",
    competition: "Liga 2",
    status: "finished",
    score: "1-0",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 7,
    opponent: "Persiku Kudus",
    date: "2025-10-26",
    displayDate: "26 Oktober 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "finished",
    score: "3-0",
    persibaFirst: true,
    ticketAvailable: false,
  },
  {
    id: 8,
    opponent: "Barito Putera",
    date: "2025-11-02",
    displayDate: "2 November 2025",
    time: "19:00",
    location: "(Tandang)",
    competition: "Liga 2",
    status: "finished",
    score: "3-0",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 9,
    opponent: "Deltras FC",
    date: "2025-11-07",
    displayDate: "7 November 2025",
    time: "15:30",
    location: "(Tandang)",
    competition: "Liga 2",
    status: "finished",
    score: "1-1",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 10,
    opponent: "PSS Sleman",
    date: "2025-11-12",
    displayDate: "12 November 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "finished",
    score: "1-2",
    persibaFirst: true,
    ticketAvailable: false,
  },
  {
    id: 11,
    opponent: "Persipal FC",
    date: "2025-11-17",
    displayDate: "17 November 2025",
    time: "14:30",
    location: "Stadion Gawalise, Palu",
    competition: "Liga 2",
    status: "finished",
    score: "1-1",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 12,
    opponent: "PSIS Semarang",
    date: "2025-11-23",
    displayDate: "23 November 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "finished",
    score: "0-1",
    persibaFirst: true,
    ticketAvailable: false,
  },

  {
    id: 13,
    opponent: "Persiku Kudus",
    date: "2025-12-15",
    displayDate: "15 Desember 2025",
    time: "17:29",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "upcoming",
    persibaFirst: true,
    ticketAvailable: true,
  },
  {
    id: 14,
    opponent: "PSIS Semarang",
    date: "2025-11-22",
    displayDate: "22 November 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "upcoming",
    persibaFirst: false,
    ticketAvailable: true,
  },
  {
    id: 15,
    opponent: "Barito Putera",
    date: "2025-11-29",
    displayDate: "29 November 2025",
    time: "15:30",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "upcoming",
    persibaFirst: false,
    ticketAvailable: true,
  },
  // Pertandingan mendatang lainnya
  {
    id: 16,
    opponent: "Persela Lamongan",
    date: "2025-12-06",
    displayDate: "6 Desember 2025",
    time: "19:00",
    location: "Stadion Indomilk Arena, Tangerang",
    competition: "Liga 2",
    status: "upcoming",
    persibaFirst: false,
    ticketAvailable: false,
  },
  {
    id: 17,
    opponent: "Dewa United",
    date: "2025-12-13",
    displayDate: "13 Desember 2025",
    time: "18:30",
    location: "Stadion Batakan, Balikpapan",
    competition: "Liga 2",
    status: "upcoming",
    persibaFirst: true,
    ticketAvailable: false,
  },
  {
    id: 18,
    opponent: "Persik Kediri",
    date: "2025-12-20",
    displayDate: "20 Desember 2025",
    time: "15:30",
    location: "Stadion Brawijaya, Kediri",
    competition: "Liga 2",
    status: "upcoming",
    persibaFirst: false,
    ticketAvailable: false,
  },
]);

// Filter pertandingan
const finishedMatches = computed(() =>
  matches.value.filter((match) => match.status === "finished")
);

const upcomingMatches = computed(() =>
  matches.value.filter((match) => match.status === "upcoming").slice(0, 4)
);

// Tab aktif
const activeTab = ref("mendatang");

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

// pindah ke halaman beli tiket
const goToBeliTiket = (matchId) => {
  router.push({
    path: "/beliTiket",
    query: { matchId: matchId },
  });
};

const getStatusColor = (status) => {
  switch (status) {
    case "upcoming":
      return "bg-blue-500";
    case "finished":
      return "bg-gray-500";
    case "live":
      return "bg-red-500";
    default:
      return "bg-gray-400";
  }
};

const getStatusText = (status) => {
  switch (status) {
    case "upcoming":
      return "Akan Datang";
    case "finished":
      return "Selesai";
    case "live":
      return "Live";
    default:
      return "";
  }
};
</script>

<template>
  <div>
    <!-- HERO SECTION -->
    <section
      class="relative left-1/2 right-1/2 -translate-x-1/2 w-screen text-white flex items-center"
      :style="{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',
      }"
    >
      <!-- overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- konten -->
      <div
        class="relative container mx-auto px-4 md:px-6 lg:px-12 w-full py-20 text-center"
      >
        <h1 class="text-4xl md:text-4xl font-extrabold mb-4">
          Jadwal Pertandingan <span class="text-blue-400">Beruang Madu</span>
        </h1>
        <p class="mt-2 text-white/90 text-lg">
          <TextType
            :text="[
              'Ikuti setiap langkah Persiba Balikpapan menuju kejayaan',
              'Ikuti setiap langkah Persiba Balikpapan menuju kejayaan',
            ]"
            :typingSpeed="75"
            :pauseDuration="1500"
            :showCursor="true"
            cursorCharacter="|"
            highlight="Persiba Balikpapan"
            highlightClass="text-blue-400"
          />
        </p>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <section class="py-12 bg-[#0d355d]">
      <div class="container mx-auto px-4 md:px-6 lg:px-12">
        <!-- TAB NAVIGATION -->
        <div
          class="flex justify-center mb-8 bg-gray-200 rounded-lg shadow-sm p-2 max-w-2xl mx-auto"
        >
          <button
            @click="setActiveTab('mendatang')"
            :class="[
              'flex-1 px-6 py-3 rounded-md font-semibold transition-all duration-300',
              activeTab === 'mendatang'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Mendatang
          </button>
          <button
            @click="setActiveTab('hasil')"
            :class="[
              'flex-1 px-6 py-3 rounded-md font-semibold transition-all duration-300',
              activeTab === 'hasil'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Hasil
          </button>
          <button
            @click="setActiveTab('klasemen')"
            :class="[
              'flex-1 px-6 py-3 rounded-md font-semibold transition-all duration-300',
              activeTab === 'klasemen'
                ? 'bg-white text-gray-900 shadow-md'
                : 'text-gray-600 hover:text-gray-900',
            ]"
          >
            Klasemen
          </button>
        </div>

        <!-- PERTANDINGAN MENDATANG -->
        <div v-show="activeTab === 'mendatang'" class="max-w-4xl mx-auto">
          <div
            v-for="match in upcomingMatches"
            :key="match.id"
            class="bg-white rounded-lg shadow-sm mb-4 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div class="p-6">
              <!-- Badge Liga -->
              <div class="mb-4">
                <span
                  class="bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full"
                >
                  {{ match.competition }}
                </span>
              </div>

              <!-- Container untuk Pertandingan dan Tombol -->
              <div
                class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6"
              >
                <!-- Bagian Kiri: Pertandingan dan Info -->
                <div class="flex-1">
                  <!-- Pertandingan -->
                  <div class="grid grid-cols-3 gap-4 items-center mb-4">
                    <!-- Tim Kiri -->
                    <div v-if="match.persibaFirst" class="text-right">
                      <p class="text-base md:text-lg font-bold text-blue-950">
                        Persiba Balikpapan
                      </p>
                    </div>
                    <div v-else class="text-right">
                      <p class="text-base md:text-lg font-bold text-gray-900">
                        {{ match.opponent }}
                      </p>
                    </div>

                    <!-- VS -->
                    <div class="text-center">
                      <p class="text-lg md:text-xl font-semibold text-gray-500">
                        VS
                      </p>
                    </div>

                    <!-- Tim Kanan -->
                    <div v-if="match.persibaFirst" class="text-left">
                      <p class="text-base md:text-lg font-bold text-gray-900">
                        {{ match.opponent }}
                      </p>
                    </div>
                    <div v-else class="text-left">
                      <p class="text-base md:text-lg font-bold text-blue-950">
                        Persiba Balikpapan
                      </p>
                    </div>
                  </div>

                  <!-- Info Pertandingan -->
                  <div
                    class="flex items-center justify-start gap-4 text-sm text-gray-600"
                  >
                    <div class="flex items-center gap-1">
                      <i class="ri-calendar-line"></i>
                      <span>{{ match.displayDate }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <i class="ri-time-line"></i>
                      <span>{{ match.time }} WITA</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <i class="ri-map-pin-line"></i>
                      <span>{{ match.location }}</span>
                    </div>
                  </div>
                </div>

                <!-- Bagian Kanan: Tombol Beli Tiket -->
                <div
                  v-if="match.ticketAvailable"
                  class="w-full md:w-auto md:flex-shrink-0"
                >
                  <button
                    @click="goToBeliTiket(match.id)"
                    class="w-full md:w-auto bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-md transition-all duration-300 whitespace-nowrap"
                  >
                    Beli Tiket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PERTANDINGAN SELESAI (HASIL) -->
        <div v-show="activeTab === 'hasil'" class="max-w-4xl mx-auto">
          <div
            v-for="match in finishedMatches"
            :key="match.id"
            class="bg-white rounded-lg shadow-sm mb-4 overflow-hidden hover:shadow-md transition-all duration-300"
          >
            <div class="p-6">
              <!-- Badge Liga -->
              <div class="mb-4">
                <span
                  class="bg-gray-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                >
                  {{ match.competition }}
                </span>
              </div>

              <!-- Pertandingan dengan Skor -->
              <div class="grid grid-cols-5 gap-4 items-center mb-4">
                <!-- Tim Kiri -->
                <div v-if="match.persibaFirst" class="col-span-2 text-right">
                  <p class="text-lg font-bold text-blue-950">
                    Persiba Balikpapan
                  </p>
                </div>
                <div v-else class="col-span-2 text-right">
                  <p class="text-lg font-bold text-gray-900">
                    {{ match.opponent }}
                  </p>
                </div>

                <!-- Skor -->
                <div class="text-center">
                  <p class="text-2xl font-bold text-gray-900">
                    {{ match.score }}
                  </p>
                </div>

                <!-- Tim Kanan -->
                <div v-if="match.persibaFirst" class="col-span-2 text-left">
                  <p class="text-lg font-bold text-gray-900">
                    {{ match.opponent }}
                  </p>
                </div>
                <div v-else class="col-span-2 text-left">
                  <p class="text-lg font-bold text-blue-950">
                    Persiba Balikpapan
                  </p>
                </div>
              </div>

              <!-- Info Pertandingan -->
              <div
                class="flex items-center justify-start gap-4 text-sm text-gray-600"
              >
                <div class="flex items-center gap-1">
                  <i class="ri-calendar-line"></i>
                  <span>{{ match.displayDate }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <i class="ri-time-line"></i>
                  <span>{{ match.time }} WITA</span>
                </div>
                <div class="flex items-center gap-1">
                  <i class="ri-map-pin-line"></i>
                  <span>{{ match.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- KLASEMEN -->
        <div v-show="activeTab === 'klasemen'" class="max-w-5xl mx-auto">
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gray-100 border-b">
                  <tr>
                    <th
                      class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase"
                    >
                      Pos
                    </th>
                    <th
                      class="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase"
                    >
                      Tim
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      Main
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      Menang
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      Seri
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      Kalah
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      GM
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      GK
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      SG
                    </th>
                    <th
                      class="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase"
                    >
                      Poin
                    </th>
                  </tr>
                </thead>
                <tbody class="text-black">
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">1</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      PS. Barito Putera
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">9</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">20</td>
                    <td class="px-4 py-3 text-center">4</td>
                    <td class="px-4 py-3 text-center">+16</td>
                    <td class="px-4 py-3 text-center font-bold">28</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">2</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      PSS Seleman
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">8</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center">24</td>
                    <td class="px-4 py-3 text-center">9</td>
                    <td class="px-4 py-3 text-center">+15</td>
                    <td class="px-4 py-3 text-center font-bold">27</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">3</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      Persipura Jayapura
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">7</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">16</td>
                    <td class="px-4 py-3 text-center">7</td>
                    <td class="px-4 py-3 text-center">+9</td>
                    <td class="px-4 py-3 text-center font-bold">23</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">4</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      Persela Lamongan
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">6</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">16</td>
                    <td class="px-4 py-3 text-center">10</td>
                    <td class="px-4 py-3 text-center">+6</td>
                    <td class="px-4 py-3 text-center font-bold">21</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">5</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      Kendal Tornado FC
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">6</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">4</td>
                    <td class="px-4 py-3 text-center">17</td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">+5</td>
                    <td class="px-4 py-3 text-center font-bold">20</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">6</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      Deltras FC
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">5</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">4</td>
                    <td class="px-4 py-3 text-center">14</td>
                    <td class="px-4 py-3 text-center">10</td>
                    <td class="px-4 py-3 text-center">+4</td>
                    <td class="px-4 py-3 text-center font-bold">18</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50 bg-blue-200">
                    <td class="px-4 py-3 text-center font-semibold">7</td>
                    <td class="px-4 py-3 font-bold text-blue-900">
                      Persiba Balikpapan
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">3</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">7</td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">19</td>
                    <td class="px-4 py-3 text-center">-7</td>
                    <td class="px-4 py-3 text-center font-bold">11</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">8</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      Persiku Kudus
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">8</td>
                    <td class="px-4 py-3 text-center">14</td>
                    <td class="px-4 py-3 text-center">21</td>
                    <td class="px-4 py-3 text-center">-7</td>
                    <td class="px-4 py-3 text-center font-bold">8</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">8</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      Persipal FC
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">0</td>
                    <td class="px-4 py-3 text-center">6</td>
                    <td class="px-4 py-3 text-center">6</td>
                    <td class="px-4 py-3 text-center">7</td>
                    <td class="px-4 py-3 text-center">24</td>
                    <td class="px-4 py-3 text-center">-17</td>
                    <td class="px-4 py-3 text-center font-bold">6</td>
                  </tr>
                  <tr class="border-b hover:bg-gray-50">
                    <td class="px-4 py-3 text-center font-semibold">8</td>
                    <td class="px-4 py-3 font-semibold text-gray-900">
                      PSIS Semarang
                    </td>
                    <td class="px-4 py-3 text-center">12</td>
                    <td class="px-4 py-3 text-center">1</td>
                    <td class="px-4 py-3 text-center">2</td>
                    <td class="px-4 py-3 text-center">9</td>
                    <td class="px-4 py-3 text-center">5</td>
                    <td class="px-4 py-3 text-center">29</td>
                    <td class="px-4 py-3 text-center">-24</td>
                    <td class="px-4 py-3 text-center font-bold">5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INFO SECTION -->
    <section class="py-12 bg-[#0d355d]">
      <div class="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">
          Informasi Pertandingan
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center bg-white rounded-xl p-6">
            <div class="text-5xl mb-4">
              <i class="ri-calendar-check-fill text-blue-500"></i>
            </div>
            <h3 class="text-gray-900 text-xl font-bold mb-2">Jadwal Terbaru</h3>
            <p class="text-gray-600">
              Lihat 4 jadwal pertandingan terdekat Persiba Balikpapan
            </p>
          </div>

          <div class="text-center bg-white rounded-xl p-6">
            <div class="text-5xl mb-4">
              <i class="ri-ticket-2-fill text-yellow-400"></i>
            </div>
            <h3 class="text-gray-900 text-xl font-bold mb-2">Beli Tiket</h3>
            <p class="text-gray-600">
              Dapatkan tiket untuk 3 pertandingan terdekat dengan mudah
            </p>
          </div>

          <div class="text-center bg-white rounded-xl p-6">
            <div class="text-5xl mb-4">
              <i class="ri-trophy-fill text-amber-500"></i>
            </div>
            <h3 class="text-gray-900 text-xl font-bold mb-2">Klasemen Liga</h3>
            <p class="text-gray-600">
              Cek posisi Persiba Balikpapan di klasemen Liga 2
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <SocialFooter />
  </div>
</template>

<style scoped>
/* Smooth transitions */
button {
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
}

/* Animation untuk card */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>

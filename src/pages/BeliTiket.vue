<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import bgimage from "../assets/stdbatakan.webp";
import SocialFooter from "../components/SocialFooter.vue";
import TextType from "../components/TextType.vue";

const route = useRoute();
const selectedMatch = ref(null);
const selectedCategory = ref(null);
const quantity = ref(1);
const formData = ref({
  nama: "",
  email: "",
  noTelepon: "",
  jumlahTiket: 1,
});

const matches = [
  {
    id: 9,
    opponent: "Persiku Kudus",
    date: "15 November 2025",
    time: "18:30",
    location: "Stadion Batakan, Balikpapan",
    persibaFirst: true, // Persiba Balikpapan vs Persiku Kudus
    categories: [
      { name: "Selatan", price: 50000, available: 500 },
      { name: "Utara", price: 50000, available: 500 },
      { name: "Timur", price: 85000, available: 250 },
      { name: "Barat", price: 100000, available: 200 },
    ],
  },
  {
    id: 10,
    opponent: "PSIS Semarang",
    date: "22 November 2025",
    time: "19:00",
    location: "Stadion Batakan, Balikpapan",
    persibaFirst: false, // PSIS Semarang vs Persiba Balikpapan
    categories: [
      { name: "Selatan", price: 50000, available: 500 },
      { name: "Utara", price: 50000, available: 500 },
      { name: "Timur", price: 85000, available: 250 },
      { name: "Barat", price: 100000, available: 200 },
    ],
  },
  {
    id: 11,
    opponent: "Barito Putera",
    date: "29 November 2025",
    time: "15:30",
    location: "Stadion Batakan, Balikpapan",
    persibaFirst: false, // Barito Putera vs Persiba Balikpapan
    categories: [
      { name: "Selatan", price: 50000, available: 600 },
      { name: "Utara", price: 50000, available: 600 },
      { name: "Timur", price: 85000, available: 300 },
      { name: "Barat", price: 100000, available: 250 },
    ],
  },
];

// Auto-select match jika ada matchId di query parameter
onMounted(() => {
  const matchId = route.query.matchId;
  if (matchId) {
    const match = matches.find((m) => m.id === parseInt(matchId));
    if (match) {
      selectMatch(match);
      // Scroll ke section pemilihan kategori
      setTimeout(() => {
        const categorySection = document.querySelector("#category-section");
        if (categorySection) {
          categorySection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }
});

const selectMatch = (match) => {
  selectedMatch.value = match;
  selectedCategory.value = null;
  quantity.value = 1;
};

const selectCategory = (category) => {
  selectedCategory.value = category;
};

const incrementQuantity = () => {
  if (
    selectedCategory.value &&
    quantity.value < selectedCategory.value.available
  ) {
    quantity.value++;
  }
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const getTotalPrice = () => {
  if (selectedCategory.value) {
    return selectedCategory.value.price * quantity.value;
  }
  return 0;
};

const submitOrder = () => {
  if (
    !selectedMatch.value ||
    !selectedCategory.value ||
    !formData.value.nama ||
    !formData.value.email
  ) {
    alert("Silakan lengkapi semua data!");
    return;
  }
  alert(
    `Pesanan berhasil! Total: Rp${getTotalPrice().toLocaleString("id-ID")}`
  );
};

const formatPrice = (price) => {
  return price.toLocaleString("id-ID");
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
          Beli <span class="text-yellow-400">Tiket</span> Pertandingan
        </h1>
        <p class="mt-2 text-white/90">
          <TextType
            :text="[
              'Dukung Persiba Balikpapan dengan hadir langsung di Stadion',
              'Dukung Persiba Balikpapan dengan hadir langsung di Stadion',
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
        <!-- MATCH SELECTION -->
        <div class="mb-12">
          <h2 class="text-3xl font-bold text-white mb-8">Pilih Pertandingan</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="match in matches"
              :key="match.id"
              @click="selectMatch(match)"
              :class="[
                'p-6 rounded-lg cursor-pointer transition-all duration-300',
                selectedMatch?.id === match.id
                  ? 'bg-yellow-400 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-900 shadow-md hover:shadow-lg hover:scale-102',
              ]"
            >
              <div class="flex items-center mb-4">
                <div class="text-4xl mr-4"></div>
                <div v-if="match.persibaFirst">
                  <p class="font-bold text-lg">Persiba Balikpapan</p>
                  <p class="text-sm text-center opacity-75">vs</p>
                  <p class="font-bold text-lg">{{ match.opponent }}</p>
                </div>
                <div v-else>
                  <p class="font-bold text-lg">{{ match.opponent }}</p>
                  <p class="text-sm text-center opacity-75">vs</p>
                  <p class="font-bold text-lg">Persiba Balikpapan</p>
                </div>
              </div>
              <div class="space-y-2 text-sm">
                <p>
                  <i class="ri-calendar-2-fill px-1 text-blue-600"></i>
                  {{ match.date }}
                </p>
                <p>
                  <i class="ri-time-fill px-1 text-blue-600"></i>
                  {{ match.time }}
                </p>
                <p>
                  <i class="ri-map-pin-fill px-1 text-blue-600"></i>
                  {{ match.location }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- TICKET CATEGORY & ORDER FORM -->
        <div
          v-if="selectedMatch"
          id="category-section"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <!-- LEFT: CATEGORIES -->
          <div>
            <h2 class="text-2xl font-bold text-white mb-6">Kategori Tiket</h2>
            <div class="space-y-4">
              <div
                v-for="(category, index) in selectedMatch.categories"
                :key="index"
                @click="selectCategory(category)"
                :class="[
                  'p-5 rounded-lg border-2 cursor-pointer transition-all duration-300',
                  selectedCategory?.name === category.name
                    ? 'border-yellow-400 bg-gray-50'
                    : 'border-yellow-200 bg-white hover:border-yellow-300',
                ]"
              >
                <div class="flex justify-between items-center mb-3">
                  <h3 class="font-bold text-lg text-gray-900">
                    {{ category.name }}
                  </h3>
                  <span class="text-blue-950 font-bold text-lg"
                    >Rp{{ formatPrice(category.price) }}</span
                  >
                </div>
                <div class="flex justify-between text-sm text-gray-600">
                  <span>Tersedia</span>
                  <span
                    v-if="selectedCategory?.name === category.name"
                    class="text-blue-950 font-semibold"
                    >✓ Dipilih</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ORDER FORM -->
          <div class="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">
              Ringkasan Pesanan
            </h2>

            <!-- QUANTITY SELECTOR -->
            <div v-if="selectedCategory" class="mb-6">
              <label class="block text-sm font-semibold text-gray-700 mb-3"
                >Jumlah Tiket</label
              >
              <div class="flex items-center gap-3">
                <button
                  @click="decrementQuantity"
                  class="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded transition-colors"
                >
                  −
                </button>
                <input
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  :max="selectedCategory.available"
                  class="text-black w-20 text-center border border-blue-950 rounded py-2 font-semibold"
                />
                <button
                  @click="incrementQuantity"
                  class="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <!-- FORM FIELDS -->
            <div class="space-y-4 mb-6">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Nama Lengkap</label
                >
                <input
                  v-model="formData.nama"
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  class="w-full border border-gray-300 rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-yellow-300"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Email</label
                >
                <input
                  v-model="formData.email"
                  type="email"
                  placeholder="Masukkan email"
                  class="w-full border border-gray-300 rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-yellow-300"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2"
                  >Nomor Telepon</label
                >
                <input
                  v-model="formData.noTelepon"
                  type="tel"
                  placeholder="Masukkan nomor telepon"
                  class="w-full border border-gray-300 rounded py-2 px-3 text-gray-900 focus:outline-none focus:border-yellow-300"
                />
              </div>
            </div>

            <!-- ORDER SUMMARY -->
            <div class="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
              <div class="space-y-2 text-sm text-gray-700 mb-4">
                <div class="flex justify-between">
                  <span>Pertandingan:</span>
                  <span class="font-semibold text-gray-900">{{
                    selectedMatch.opponent
                  }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Tanggal:</span>
                  <span class="font-semibold text-gray-900">{{
                    selectedMatch.date
                  }}</span>
                </div>
                <div v-if="selectedCategory" class="flex justify-between">
                  <span>Kategori:</span>
                  <span class="font-semibold text-gray-900">{{
                    selectedCategory.name
                  }}</span>
                </div>
                <div v-if="selectedCategory" class="flex justify-between">
                  <span>Harga/Tiket:</span>
                  <span class="font-semibold text-gray-900"
                    >Rp{{ formatPrice(selectedCategory.price) }}</span
                  >
                </div>
                <div v-if="selectedCategory" class="flex justify-between">
                  <span>Jumlah:</span>
                  <span class="font-semibold text-gray-900"
                    >{{ quantity }} tiket</span
                  >
                </div>
              </div>

              <div
                class="border-t border-gray-300 pt-4 flex justify-between text-lg"
              >
                <span class="font-bold text-gray-900">Total:</span>
                <span class="font-bold text-blue-950"
                  >Rp{{ formatPrice(getTotalPrice()) }}</span
                >
              </div>
            </div>

            <!-- SUBMIT BUTTON -->
            <button
              @click="submitOrder"
              :disabled="!selectedMatch || !selectedCategory"
              :class="[
                'w-full py-3 px-4 rounded font-bold text-lg transition-all duration-300',
                selectedMatch && selectedCategory
                  ? 'bg-yellow-400 hover:bg-yellow-300 text-white cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed',
              ]"
            >
              Lanjutkan ke Pembayaran
            </button>
          </div>
        </div>

        <!-- EMPTY STATE -->
        <div v-else class="text-center py-12">
          <p class="text-xl text-gray-500">
            Pilih pertandingan untuk memulai pemesanan tiket
          </p>
        </div>
      </div>
    </section>

    <!-- INFO SECTION -->
    <section class="py-12 bg-[#0d355d]">
      <div class="container mx-auto px-4 md:px-6 lg:px-12">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">
          Informasi Tiket
        </h2>
        <div class="grid md:grid-cols-3">
          <div
            class="text-center block bg-white rounded-xl p-6 mb-6 md:mb-0 mx-4"
          >
            <div class="text-5xl mb-4">
              <i class="ri-coupon-3-fill text-amber-300"></i>
            </div>
            <h3 class="text-gray-900 text-xl font-bold text-blue-9000 mb-2">
              Kategori Tiket
            </h3>
            <p class="text-gray-600">
              Timur, Barat, Selatan, dan Utara dengan harga yang kompetitif
              sesuai posisi tempat duduk.
            </p>
          </div>
          <!-- kedua -->
          <div
            class="text-center block bg-white rounded-xl p-6 mb-6 md:mb-0 mx-4"
          >
            <div class="text-5xl mb-4">
              <i class="ri-wallet-fill text-blue-500"></i>
            </div>
            <h3 class="text-gray-900 text-xl font-bold text-blue-9000 mb-2">
              Pembayaran Mudah
            </h3>
            <p class="text-gray-600">
              Berbagai metode pembayaran tersedia untuk kemudahan transaksi
              Anda.
            </p>
          </div>

          <!-- ketiga -->
          <div
            class="text-center block bg-white rounded-xl p-6 mb-6 md:mb-0 mx-4"
          >
            <div class="text-5xl mb-4">
              <i class="ri-mail-fill text-red-700"></i>
            </div>
            <h3 class="text-gray-900 text-xl font-bold text-blue-9000 mb-2">
              E-Tiket Digital
            </h3>
            <p class="text-gray-600">
              Terima tiket digital langsung ke email Anda, siap dicetak atau
              ditampilkan di HP.
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
.scale-102 {
  transform: scale(1.02);
}

/* Input focus effect */
input:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

/* Button hover effect */
button {
  transition: all 0.3s ease;
}

button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
}
</style>

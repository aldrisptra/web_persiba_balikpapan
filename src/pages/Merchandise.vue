<script setup>
import { ref, computed } from "vue";
import SocialFooter from "../components/SocialFooter.vue";
import logo from "../assets/logopersiba.png";
import header from "../assets/stdbatakan.webp";

import Merchandise1 from "../assets/Merchandise/Merchandise1.png";
import Merchandise2 from "../assets/Merchandise/Merchandise2.png";
import Merchandise3 from "../assets/Merchandise/Merchandise3.png";
import Merchandise4 from "../assets/Merchandise/Merchandise4.png";
import Merchandise5 from "../assets/Merchandise/Merchandise5.png";
import Merchandise6 from "../assets/Merchandise/Merchandise6.png";
import Merchandise7 from "../assets/Merchandise/Merchandise7.png";
import Merchandise8 from "../assets/Merchandise/Merchandise8.png";

const filterCategory = ref("Semua");
const categories = ["Semua", "Jersey", "Aksesoris", "Koleksi", "Lainnya"];

// State untuk keranjang
const cart = ref([]);
const showCart = ref(false);

// State untuk form checkout
const showCheckoutForm = ref(false);
const customerData = ref({
  nama: "",
  email: "",
  noTelepon: "",
  alamat: "",
});

// Data merchandise (contoh - ganti dengan data asli)
const products = ref([
  {
    id: 1,
    name: "Jersey Home Player 2025/26",
    category: "Jersey",
    price: 459000,
    image: Merchandise1,
    description: "Jersey kandang resmi musim 2025/2026",
    stock: true,
  },
  {
    id: 2,
    name: "Jersey Away Player 2025/26",
    category: "Jersey",
    price: 459000,
    image: Merchandise2,
    description: "Jersey tandang resmi musim 2025/2026",
    stock: true,
  },
  {
    id: 3,
    name: "Jersey Home Goalkeeper 2025/26",
    category: "Jersey",
    price: 459000,
    image: Merchandise3,
    description: "Jersey Home Goalkeeper resmi musim 2025/2026",
    stock: true,
  },
  {
    id: 4,
    name: "Jersey Away Goalkeeper 2025/26",
    category: "Jersey",
    price: 459000,
    image: Merchandise4,
    description: "Jersey Tandang  Goalkeeper resmi musim 2025/2026",
    stock: true,
  },
  {
    id: 5,
    name: "Tshirt Persiba Black",
    category: "Koleksi",
    price: 199000,
    image: Merchandise5,
    description: "Kaos Hitam Persiba",
    stock: true,
  },
  {
    id: 6,
    name: "Tshirt Persiba White",
    category: "Koleksi",
    price: 199000,
    image: Merchandise6,
    description: "Kaos Putih Persiba",
    stock: true,
  },
  {
    id: 7,
    name: "Windbreaker Jacket",
    category: "Koleksi",
    price: 499000,
    image: Merchandise7,
    description: "Jaket Windbreaker Persiba",
    stock: true,
  },
  {
    id: 8,
    name: "Persiba Cap White-Blue",
    category: "Aksesoris",
    price: 159000,
    image: Merchandise8,
    description: "Topi Persiba Putih-Biru",
    stock: true,
  },
]);

// Filter produk
const filteredProducts = computed(() =>
  filterCategory.value === "Semua"
    ? products.value
    : products.value.filter((p) => p.category === filterCategory.value)
);

// Hitung total item di keranjang
const cartItemCount = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});

// Hitung total harga keranjang
const cartTotal = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

// Format harga ke Rupiah
const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

// Modal state
const showModal = ref(false);
const selectedProduct = ref(null);
const selectedSize = ref("");
const quantity = ref(1);

// Ukuran yang tersedia
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

// Fungsi untuk membuka modal
const openModal = (product) => {
  selectedProduct.value = product;
  selectedSize.value = "";
  quantity.value = 1;
  showModal.value = true;
  document.body.style.overflow = "hidden"; // Disable scroll
};

// Fungsi untuk menutup modal
const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = null;
  selectedSize.value = "";
  quantity.value = 1;
  document.body.style.overflow = "auto"; // Enable scroll
};

// Hitung total harga
const totalPrice = computed(() => {
  if (!selectedProduct.value) return 0;
  return selectedProduct.value.price * quantity.value;
});

// Tambah/kurang jumlah
const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Fungsi checkout (bisa disesuaikan dengan kebutuhan)
const handleCheckout = () => {
  if (!selectedSize.value) {
    alert("Pilih ukuran terlebih dahulu!");
    return;
  }

  // Tambahkan ke keranjang
  addToCart(selectedProduct.value, selectedSize.value, quantity.value);
  closeModal();
};

// Fungsi untuk menambahkan item ke keranjang
const addToCart = (product, size, qty) => {
  const existingItem = cart.value.find(
    (item) => item.id === product.id && item.size === size
  );

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.value.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size,
      quantity: qty,
    });
  }

  alert(`${product.name} (Ukuran ${size}) berhasil ditambahkan ke keranjang!`);
};

// Fungsi untuk menghapus item dari keranjang
const removeFromCart = (index) => {
  cart.value.splice(index, 1);
};

// Fungsi untuk update quantity di keranjang
const updateCartQuantity = (index, change) => {
  const newQty = cart.value[index].quantity + change;
  if (newQty > 0) {
    cart.value[index].quantity = newQty;
  } else {
    removeFromCart(index);
  }
};

// Toggle keranjang
const toggleCart = () => {
  showCart.value = !showCart.value;
  if (showCart.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

// Checkout dari keranjang
const checkoutCart = () => {
  if (cart.value.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  // Tampilkan form checkout
  showCheckoutForm.value = true;
  showCart.value = false;
  document.body.style.overflow = "hidden";
};

// Submit checkout dengan data customer
const submitCheckout = () => {
  // Validasi form
  if (
    !customerData.value.nama ||
    !customerData.value.email ||
    !customerData.value.noTelepon ||
    !customerData.value.alamat
  ) {
    alert("Mohon lengkapi semua data!");
    return;
  }

  // Validasi email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(customerData.value.email)) {
    alert("Format email tidak valid!");
    return;
  }

  const summary = cart.value
    .map(
      (item) =>
        `${item.name} (${item.size}) x${item.quantity} = ${formatPrice(
          item.price * item.quantity
        )}`
    )
    .join("\n");

  alert(
    `Checkout Berhasil!\n\n` +
      `Nama: ${customerData.value.nama}\n` +
      `Email: ${customerData.value.email}\n` +
      `No. Telepon: ${customerData.value.noTelepon}\n` +
      `Alamat: ${customerData.value.alamat}\n\n` +
      `Pesanan:\n${summary}\n\n` +
      `Total: ${formatPrice(cartTotal.value)}\n\n` +
      `Konfirmasi akan dikirim ke email Anda.`
  );

  // Reset keranjang dan form
  cart.value = [];
  customerData.value = {
    nama: "",
    email: "",
    noTelepon: "",
    alamat: "",
  };
  closeCheckoutForm();
};

// Close checkout form
const closeCheckoutForm = () => {
  showCheckoutForm.value = false;
  document.body.style.overflow = "auto";
};
</script>

<template>
  <div>
    <!-- HERO full-bleed -->
    <section
      class="relative left-1/2 right-1/2 -translate-x-1/2 w-screen flex items-center"
      :style="{
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 4rem)',
      }"
    >
      <div class="absolute inset-0 bg-black/60"></div>

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
              Merchandise
              <span class="text-blue-400">Persiba Balikpapan</span>
            </h1>
            <p class="mt-2 text-white/90">
              Koleksi Resmi dan Official Merchandise
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FLOATING CART BUTTON -->
    <button
      @click="toggleCart"
      class="fixed bottom-6 right-6 z-40 bg-yellow-400 hover:bg-yellow-500 text-blue-950 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
    >
      <svg
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
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span
        v-if="cartItemCount > 0"
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center"
      >
        {{ cartItemCount }}
      </span>
    </button>

    <!-- CART SIDEBAR -->
    <Transition name="slide">
      <div
        v-if="showCart"
        class="fixed inset-0 z-50 flex justify-end bg-black/50"
        @click.self="toggleCart"
      >
        <div
          class="bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl"
          @click.stop
        >
          <!-- Header Keranjang -->
          <div class="sticky top-0 bg-blue-950 text-white p-6 z-10">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold">Keranjang Belanja</h2>
                <p class="text-sm text-blue-200">{{ cartItemCount }} item</p>
              </div>
              <button
                @click="toggleCart"
                class="hover:bg-blue-900 p-2 rounded-lg transition"
              >
                <svg
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
          </div>

          <!-- Cart Items -->
          <div class="p-6 space-y-4">
            <div v-if="cart.length === 0" class="text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-24 mx-auto text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p class="text-gray-500 text-lg">Keranjang masih kosong</p>
            </div>

            <div
              v-for="(item, index) in cart"
              :key="index"
              class="flex gap-4 bg-gray-50 rounded-lg p-4"
            >
              <img
                :src="item.image"
                :alt="item.name"
                class="w-20 h-20 object-cover rounded"
              />
              <div class="flex-1">
                <h3 class="font-bold text-gray-900">{{ item.name }}</h3>
                <p class="text-sm text-gray-600">Ukuran: {{ item.size }}</p>
                <p class="text-sm font-bold text-blue-950 mt-1">
                  {{ formatPrice(item.price) }}
                </p>

                <div class="flex items-center gap-2 mt-2">
                  <button
                    @click="updateCartQuantity(index, -1)"
                    class="bg-gray-300 hover:bg-gray-300 p-1 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span class="font-semibold w-8 text-center text-blue-950">{{
                    item.quantity
                  }}</span>
                  <button
                    @click="updateCartQuantity(index, 1)"
                    class="bg-gray-300 hover:bg-gray-300 p-1 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                  <button
                    @click="removeFromCart(index)"
                    class="ml-auto text-red-500 hover:text-red-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Footer dengan Total dan Checkout -->
          <div
            v-if="cart.length > 0"
            class="sticky bottom-0 bg-white border-t p-6 space-y-4"
          >
            <div class="flex justify-between items-center text-lg">
              <span class="font-semibold">Total:</span>
              <span class="font-bold text-2xl text-blue-950">
                {{ formatPrice(cartTotal) }}
              </span>
            </div>
            <button
              @click="checkoutCart"
              class="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-4 rounded-lg transition-all duration-300"
            >
              Checkout Sekarang
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- MODAL FORM CHECKOUT -->
    <Transition name="modal">
      <div
        v-if="showCheckoutForm"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="closeCheckoutForm"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- Header -->
          <div
            class="sticky top-0 bg-blue-950 text-white p-6 rounded-t-xl z-10"
          >
            <div class="flex items-center justify-between">
              <h2 class="text-2xl font-bold">Data Pembeli</h2>
              <button
                @click="closeCheckoutForm"
                class="hover:bg-blue-900 p-2 rounded-lg transition"
              >
                <svg
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
            <p class="text-sm text-blue-200 mt-2">
              Mohon lengkapi data diri Anda untuk melanjutkan pembelian
            </p>
          </div>

          <!-- Form Content -->
          <div class="p-6 space-y-6">
            <!-- Ringkasan Pesanan -->
            <div class="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 class="font-bold text-gray-900 mb-3">Ringkasan Pesanan</h3>
              <div class="space-y-2 text-sm text-gray-700 mb-3">
                <div
                  v-for="(item, index) in cart"
                  :key="index"
                  class="flex justify-between"
                >
                  <span
                    >{{ item.name }} ({{ item.size }}) x{{
                      item.quantity
                    }}</span
                  >
                  <span class="font-semibold">{{
                    formatPrice(item.price * item.quantity)
                  }}</span>
                </div>
              </div>
              <div class="border-t pt-3 flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span class="text-blue-950">{{ formatPrice(cartTotal) }}</span>
              </div>
            </div>

            <!-- Form Data Diri -->
            <form @submit.prevent="submitCheckout" class="space-y-4">
              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="customerData.nama"
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap"
                  class="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="customerData.email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  class="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="customerData.noTelepon"
                  type="tel"
                  required
                  placeholder="08xxxxxxxxxx"
                  class="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Alamat Lengkap <span class="text-red-500">*</span>
                </label>
                <textarea
                  v-model="customerData.alamat"
                  required
                  rows="3"
                  placeholder="Masukkan alamat lengkap untuk pengiriman"
                  class="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-900 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 resize-none"
                ></textarea>
              </div>

              <!-- Tombol Submit -->
              <div class="flex gap-3 pt-4">
                <button
                  type="button"
                  @click="closeCheckoutForm"
                  class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-all duration-300"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  class="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-3 rounded-lg transition-all duration-300"
                >
                  Konfirmasi Pesanan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Transition>

    <!-- MAIN CONTENT -->
    <main class="bg-[#0d355d] py-12">
      <section class="w-screen left-1/2 right-1/2 -translate-x-1/2 relative">
        <div class="container mx-auto px-4 md:px-6 lg:px-12">
          <!-- FILTER KATEGORI -->
          <div class="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              v-for="category in categories"
              :key="category"
              @click="filterCategory = category"
              :aria-pressed="filterCategory === category"
              class="relative px-6 py-2 rounded-full font-semibold transition-all duration-300 group transform hover:scale-110 hover:shadow-xl"
              :class="
                filterCategory === category
                  ? 'bg-yellow-400 text-blue-950'
                  : 'bg-white text-black'
              "
            >
              {{ category }}
            </button>
          </div>

          <!-- GRID PRODUK -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <div
              v-for="product in filteredProducts"
              :key="product.id"
              class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <!-- FOTO PRODUK -->
              <div
                class="relative bg-gradient-to-br from-blue-950 to-blue-800 h-64 flex items-center justify-center p-4"
              >
                <img
                  v-if="product.image"
                  :src="product.image"
                  :alt="`Foto ${product.name}`"
                  class="w-full h-full object-contain"
                  loading="lazy"
                />
                <div v-else class="text-blue-300">
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <!-- BADGE STOK -->
                <div
                  v-if="!product.stock"
                  class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                >
                  Habis
                </div>
              </div>

              <!-- INFO PRODUK -->
              <div class="p-5">
                <div class="mb-2">
                  <span
                    class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded"
                  >
                    {{ product.category }}
                  </span>
                </div>

                <h3 class="text-xl font-bold text-blue-950 mb-2">
                  {{ product.name }}
                </h3>

                <p class="text-gray-600 text-sm mb-4">
                  {{ product.description }}
                </p>

                <div
                  class="flex items-center justify-between border-t pt-4 mt-4"
                >
                  <span class="text-2xl font-bold text-blue-950">
                    {{ formatPrice(product.price) }}
                  </span>

                  <button
                    :disabled="!product.stock"
                    @click="openModal(product)"
                    class="px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                    :class="
                      product.stock
                        ? 'bg-yellow-400 text-blue-950 hover:bg-yellow-500'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 inline-block mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    {{ product.stock ? "Beli" : "Habis" }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- EMPTY STATE -->
          <div v-if="filteredProducts.length === 0" class="text-center py-16">
            <p class="text-white text-xl">
              Tidak ada produk dalam kategori ini.
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- MODAL PEMBELIAN -->
    <Transition name="modal">
      <div
        v-if="showModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <!-- HEADER MODAL -->
          <div
            class="sticky top-0 bg-blue-950 text-white p-6 flex justify-between items-center rounded-t-xl"
          >
            <h2 class="text-2xl font-bold">Detail Pembelian</h2>
            <button
              @click="closeModal"
              class="text-white hover:text-yellow-400 transition-colors"
            >
              <svg
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

          <!-- CONTENT MODAL -->
          <div class="p-6" v-if="selectedProduct">
            <!-- PRODUK INFO -->
            <div class="flex gap-6 mb-6 pb-6 border-b">
              <img
                :src="selectedProduct.image"
                :alt="selectedProduct.name"
                class="w-32 h-32 object-contain bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
              />
              <div class="flex-1">
                <span
                  class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded mb-2"
                >
                  {{ selectedProduct.category }}
                </span>
                <h3 class="text-xl font-bold text-blue-950 mb-2">
                  {{ selectedProduct.name }}
                </h3>
                <p class="text-gray-600 text-sm">
                  {{ selectedProduct.description }}
                </p>
                <p class="text-2xl font-bold text-blue-950 mt-3">
                  {{ formatPrice(selectedProduct.price) }}
                </p>
              </div>
            </div>

            <!-- PILIH UKURAN -->
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-3"
                >Pilih Ukuran:</label
              >
              <div class="grid grid-cols-3 sm:grid-cols-6 gap-3">
                <button
                  v-for="size in sizes"
                  :key="size"
                  @click="selectedSize = size"
                  class="px-2 sm:px-4 py-3 border-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                  :class="
                    selectedSize === size
                      ? 'border-yellow-400 bg-yellow-400 text-blue-950'
                      : 'border-gray-300 text-gray-700 hover:border-blue-400 hover:bg-blue-50'
                  "
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <!-- JUMLAH -->
            <div class="mb-6">
              <label class="block text-gray-700 font-semibold mb-3"
                >Jumlah:</label
              >
              <div class="flex items-center gap-4">
                <button
                  @click="decrementQuantity"
                  class="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold transition-colors flex items-center justify-center"
                  :disabled="quantity <= 1"
                  :class="{ 'opacity-50 cursor-not-allowed': quantity <= 1 }"
                >
                  −
                </button>
                <input
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  class="text-black w-20 px-4 py-2 text-center border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-blue-400"
                />
                <button
                  @click="incrementQuantity"
                  class="w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-300 text-gray-700 font-bold transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <!-- TOTAL HARGA -->
            <div
              class="bg-blue-50 rounded-lg p-4 mb-6 flex justify-between items-center"
            >
              <span class="text-gray-700 font-semibold text-lg"
                >Total Harga:</span
              >
              <span class="text-3xl font-bold text-blue-950">
                {{ formatPrice(totalPrice) }}
              </span>
            </div>

            <!-- TOMBOL CHECKOUT -->
            <button
              @click="handleCheckout"
              class="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-950 font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <svg
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <SocialFooter />
  </div>
</template>

<style scoped>
/* Animasi Modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9);
}

/* Animasi Slide untuk Cart Sidebar */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.slide-enter-active > div,
.slide-leave-active > div {
  transition: transform 0.3s ease;
}

.slide-enter-from > div,
.slide-leave-to > div {
  transform: translateX(100%);
}
</style>

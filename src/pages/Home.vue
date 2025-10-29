<template>
  <section class="space-y-4">
    <h2 class="text-2xl font-bold">Selamat datang di Klub Store</h2>
    <p>Toko resmi merchandise klub bola favoritmu.</p>

    <!-- contoh link ke detail produk -->
    <router-link
      :to="{ name: 'produk-detail', params: { slug: 'jersey-home-2025' } }"
      class="inline-block mt-2 underline"
      >Lihat Jersey Home 2025 →</router-link
    >
  </section>
</template>

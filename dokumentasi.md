saya menambahkan komponen baru di folde pages yaitu about me, berikut isi kode file nya,

<script setup>
import logo from "../assets/header/ppaldri.jpg";
import header from "../assets/header/stdbatakan.webp";
import grid1 from "../assets/tentang/foto3.jpg";
import grid2 from "../assets/tentang/stdbtkn.jpg";
import SocialFooter from "../components/SocialFooter.vue";
</script>

<template>
  <div>
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
          <div>
            <h1 class="text-3xl md:text-4xl font-extrabold">
              Muhammad Aldri Saputra
            </h1>
            <p class="mt-2 text-white/90">
              11231050
              <span class="text-blue-400"> Informatika</span>.
            </p>
          </div>
        </div>
      </div>
      <div class="relative container mx-auto px-4 md:px-6 lg:px-12">
        <img :src="logo" alt="Persiba logo" class="h-50 w-50 object-contain" />
      </div>
    </section>

    <main class="bg-[#0d355d] py-12">
      <!-- History (full-bleed card, content centered) -->
      <section
        class="w-screen left-1/2 right-1/2 -translate-x-1/2 relative mb-10"
      >
        <div
          class="container mx-auto px-4 md:px-6 lg:px-12"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <div class="bg-white rounded-xl overflow-hidden shadow">
            <div class="md:flex">
              <img
                :src="grid1"
                alt="Sejarah Persiba"
                class="w-full md:w-1/3 h-56 object-cover"
              />
              <div class="p-6">
                <h3 class="text-gray-800 text-xl font-semibold mb-2">
                  Tentang saya
                </h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  <strong>Persiba Balikpapan</strong> adalah klub sepak bola
                  profesional asal
                  <strong>Kota Balikpapan, Kalimantan Timur</strong>, yang
                  berdiri sejak <strong>1950</strong>. Dikenal dengan julukan
                  <strong>"Beruang Madu"</strong>, Persiba menjadi salah satu
                  klub bersejarah dalam sepak bola Indonesia. Dengan warna
                  kebesaran <strong>biru</strong>, Persiba hadir sebagai simbol
                  semangat, sportivitas, dan kebanggaan masyarakat
                  <strong>Kota Minyak</strong>. Perjalanan panjang di berbagai
                  era kompetisi nasional menjadikan Persiba bagian penting dari
                  identitas sepak bola Indonesia. Prestasi dan dedikasi Persiba
                  telah mengukir namanya dalam sejarah sepak bola nasional. Tim
                  yang bermarkas di Stadion Batakan ini terus berupaya
                  memberikan yang terbaik untuk membanggakan para pendukung
                  setia di seluruh Kalimantan Timur tepatnya di Balikpapan.
                </p>
              </div>
              <div class="p-6">
                <h3 class="text-gray-800 text-xl font-semibold mb-2">
                  Sejarah Singkat saya
                </h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  <strong>Persiba Balikpapan</strong> adalah klub sepak bola
                  profesional asal
                  <strong>Kota Balikpapan, Kalimantan Timur</strong>, yang
                  berdiri sejak <strong>1950</strong>. Dikenal dengan julukan
                  <strong>"Beruang Madu"</strong>, Persiba menjadi salah satu
                  klub bersejarah dalam sepak bola Indonesia. Dengan warna
                  kebesaran <strong>biru</strong>, Persiba hadir sebagai simbol
                  semangat, sportivitas, dan kebanggaan masyarakat
                  <strong>Kota Minyak</strong>. Perjalanan panjang di berbagai
                  era kompetisi nasional menjadikan Persiba bagian penting dari
                  identitas sepak bola Indonesia. Prestasi dan dedikasi Persiba
                  telah mengukir namanya dalam sejarah sepak bola nasional. Tim
                  yang bermarkas di Stadion Batakan ini terus berupaya
                  memberikan yang terbaik untuk membanggakan para pendukung
                  setia di seluruh Kalimantan Timur tepatnya di Balikpapan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stadium (full-bleed card, content centered) -->
      <section
        class="w-screen left-1/2 right-1/2 -translate-x-1/2 relative mb-12"
      >
        <div
          class="container mx-auto px-4 md:px-6 lg:px-12"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          <div class="bg-white rounded-xl overflow-hidden shadow">
            <div class="md:flex">
              <img
                :src="grid2"
                alt="Stadion Batakan"
                class="w-full md:w-1/3 h-56 object-cover"
              />
              <div class="p-6">
                <h3 class="text-gray-800 text-xl font-semibold mb-2">
                  Stadion Batakan
                </h3>
                <p class="text-sm text-gray-700 leading-relaxed">
                  <strong>Stadion Batakan</strong> berlokasi di Kelurahan
                  Manggar, Kecamatan Balikpapan Timur, Kota Balikpapan,
                  Kalimantan Timur, Indonesia. Stadion ini merupakan kandang
                  <strong>Persiba Balikpapan</strong> dan berkapasitas sekitar
                  <strong>40.000 penonton</strong>. Lapangannya menggunakan
                  rumput <strong>Zoysia matrella</strong> (rumput manila)
                  berstandar FIFA dengan elastisitas tinggi. Tanpa lintasan
                  lari, stadion ini dirancang dengan arsitektur futuristik yang
                  mengingatkan pada stadion-stadion di Eropa. Pembangunan tahap
                  pertama dimulai pada <strong>10 Juni 2010</strong>,
                  dirampungkan pada <strong>Juli 2017</strong>, dan resmi dibuka
                  pada <strong>9 September 2017</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <SocialFooter />

  </div>
</template>

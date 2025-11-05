<script setup>
import logo from "../assets/logopersiba.png";
import header from "../assets/stdbatakan.webp";
import grid1 from "../assets/foto3.jpg";
import grid2 from "../assets/stdbtkn.jpg";
import SocialFooter from "../components/SocialFooter.vue";
</script>

<template>
  <div>
    <!-- Hero (full-bleed: aligns with navbar bottom and fills remaining viewport) -->
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
              Tentang Persiba Balikpapan
            </h1>
            <p class="mt-2 text-white/90">Klub kebanggaan kota Balikpapan.</p>
          </div>
        </div>
      </div>
    </section>

    <main class="bg-[#0d355d] container mx-auto px-4 md:px-6 lg:px-12 py-12">
      <!-- History -->
      <section class="bg-white rounded-xl overflow-hidden shadow mb-10">
        <div class="md:flex">
          <div class="md:flex">
            <img
              :src="grid1"
              alt="Sejarah Persiba"
              class="w-full md:w-1/3 h-56 object-cover"
            />
            <div class="p-6">
              <h3 class="text-gray-800 text-xl font-semibold mb-2">
                Sejarah Singkat
              </h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Persiba Balikpapan adalah klub sepak bola profesional asal Kota
                Balikpapan, Kalimantan Timur, yang berdiri sejak 1950. Dikenal
                dengan julukan "Beruang Madu", Persiba menjadi salah satu klub
                bersejarah dalam sepak bola Indonesia. Dengan warna kebesaran
                biru, Persiba hadir sebagai simbol semangat, sportivitas, dan
                kebanggaan masyarakat Kota Minyak. Perjalanan panjang di
                berbagai era kompetisi nasional menjadikan Persiba bagian
                penting dari identitas sepak bola Indonesia. Prestasi dan
                dedikasi Persiba telah mengukir namanya dalam sejarah sepak bola
                nasional. Tim yang bermarkas di Stadion Balikpapan ini terus
                berupaya memberikan yang terbaik untuk membanggakan para
                pendukung setia di seluruh Kalimantan Timur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stadium -->
      <section class="bg-white rounded-xl overflow-hidden shadow mb-12">
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
              Ini versi yang lebih rapi dan mengalir: **Stadion Batakan**
              berlokasi di Kelurahan Manggar, Kecamatan Balikpapan Timur, Kota
              Balikpapan, Kalimantan Timur, Indonesia. Stadion ini merupakan
              kandang **Persiba Balikpapan** dan berkapasitas sekitar **40.000
              penonton**. Lapangannya menggunakan rumput **Zoysia matrella**
              (rumput manila) berstandar FIFA dengan elastisitas tinggi. Tanpa
              lintasan lari, stadion ini dirancang dengan arsitektur futuristik
              yang mengingatkan pada stadion-stadion di Eropa. Pembangunan tahap
              pertama dimulai pada **10 Juni 2010**, dirampungkan pada **Juli
              2017**, dan resmi dibuka pada **9 September 2017**.
            </p>
          </div>
        </div>
      </section>
    </main>
    <SocialFooter />
  </div>
</template>

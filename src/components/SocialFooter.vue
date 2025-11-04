<script setup>
import logo from "../assets/logopersiba.png";
</script>

<template>
  <footer class="bg-[#071A32] text-white">
    <div class="container mx-auto px-4 md:px-6 lg:px-12 py-10">
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-between gap-6"
      >
        <div
          class="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left"
        >
          <img
            :src="logo"
            alt="Persiba logo"
            class="h-12 w-12 object-contain"
          />
          <div>
            <h3 class="text-xl font-bold">Persiba Balikpapan</h3>
            <p class="text-sm text-white/80">
              Ikuti kami di media sosial untuk update terbaru
            </p>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <a
            href="https://instagram.com/persiba"
            target="_blank"
            rel="noopener"
            class="hover:opacity-90"
          >
            <!-- Instagram -->
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5ZM18.5 6.25C18.5 6.66421 18.1642 7 17.75 7C17.3358 7 17 6.66421 17 6.25C17 5.83579 17.3358 5.5 17.75 5.5C18.1642 5.5 18.5 5.83579 18.5 6.25Z"
              />
            </svg>
          </a>

          <a
            href="https://facebook.com/persibaBpn"
            target="_blank"
            rel="noopener"
            class="hover:opacity-90"
          >
            <!-- Facebook -->
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07 1.86 17.01 5.69 21.18 10.41 22v-7.04H8.08v-2.89h2.33V9.04c0-2.3 1.39-3.56 3.42-3.56.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.42v1.69h2.5l-.4 2.89h-2.1V22c4.72-.82 8.55-5 8.55-9.93z"
              />
            </svg>
          </a>

          <a
            href="https://twitter.com/persibadaily"
            target="_blank"
            rel="noopener"
            class="hover:opacity-90"
          >
            <!-- Twitter -->
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.46 6c-.77.35-1.6.59-2.46.7.89-.53 1.57-1.37 1.89-2.37-.83.5-1.75.86-2.73 1.06C18.12 4.2 17 3.5 15.7 3.5c-2.22 0-4.02 1.8-4.02 4.02 0 .31.03.61.1.9C8.6 8.14 6.3 6.8 4.64 4.9c-.34.58-.54 1.24-.54 1.96 0 1.36.69 2.56 1.74 3.26-.64 0-1.24-.2-1.77-.5v.05c0 1.9 1.35 3.48 3.14 3.84-.33.09-.68.14-1.04.14-.26 0-.52-.03-.77-.07.52 1.62 2.04 2.8 3.83 2.83-1.4 1.1-3.17 1.75-5.09 1.75-.33 0-.66-.02-.98-.06 1.81 1.17 3.96 1.86 6.26 1.86 7.52 0 11.64-6.23 11.64-11.63v-.53c.8-.6 1.49-1.35 2.04-2.2-.73.33-1.52.56-2.34.66z"
              />
            </svg>
          </a>

          <a
            href="https://youtube.com/Persiba Balikpapan"
            target="_blank"
            rel="noopener"
            class="hover:opacity-90"
          >
            <!-- YouTube -->
            <svg
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5 6.2a2.8 2.8 0 0 0-1.98-1.98C19.9 3.5 12 3.5 12 3.5s-7.9 0-9.5.72A2.8 2.8 0 0 0 .52 6.2 29.2 29.2 0 0 0 0 12a29.2 29.2 0 0 0 .52 5.8A2.8 2.8 0 0 0 2.5 19.5C4.1 20.2 12 20.2 12 20.2s7.9 0 9.5-.72a2.8 2.8 0 0 0 1.98-1.98A29.2 29.2 0 0 0 24 12a29.2 29.2 0 0 0-.5-5.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div class="mt-8 text-center text-sm text-white/70">
        &copy; 2025 PERSIBA BALIKPAPAN.
      </div>
    </div>
  </footer>
</template>

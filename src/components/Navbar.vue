<template>
  <header class="bg-[#0d355d] border-b">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <h1 class="font-bold text-xl">⚽ Klub Store</h1>
      <nav class="flex gap-6">
        <RouterLink
          :to="{ name: 'home' }"
          class="relative inline-block py-2 group"
        >
          Home
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'tentang' }"
          class="relative inline-block py-2 group"
        >
          Tentang
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>

        <RouterLink
          :to="{ name: 'squad' }"
          class="relative inline-block py-2 group"
        >
          Squad
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'pertandingan' }"
          class="relative inline-block py-2 group"
        >
          Pertandingan
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'merchandise' }"
          class="relative inline-block py-2 group"
        >
          Merchandise
          <span
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-full bg-blue-600 origin-center scale-x-0 transition-transform duration-200 group-hover:scale-x-100"
          >
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  text: { type: Array, default: () => [] },
  typingSpeed: { type: Number, default: 75 },
  pauseDuration: { type: Number, default: 1500 },
  showCursor: { type: Boolean, default: true },
  cursorCharacter: { type: String, default: "|" },
  highlight: { type: String, default: "" }, // frasa yang diwarnai
  highlightClass: { type: String, default: "tt-colorCycle font-semibold" }, // kelas warna/animasi
});

const phrases = computed(() =>
  props.text.filter((s) => typeof s === "string" && s.length > 0)
);

const display = ref("");
const idx = ref(0);
const isDeleting = ref(false);
let timer = null;

const currentFull = computed(() =>
  phrases.value.length ? phrases.value[idx.value % phrases.value.length] : ""
);

function clearTimer() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}
function scheduleNext(ms) {
  clearTimer();
  timer = setTimeout(tick, ms);
}
function resetCycle() {
  clearTimer();
  display.value = "";
  idx.value = 0;
  isDeleting.value = false;
  if (phrases.value.length) scheduleNext(props.typingSpeed);
}

function tick() {
  const full = currentFull.value;
  if (!full) return;

  if (!isDeleting.value) {
    const next = full.slice(0, display.value.length + 1);
    display.value = next;
    if (next === full) {
      isDeleting.value = true;
      scheduleNext(props.pauseDuration);
      return;
    }
  } else {
    const next = full.slice(0, display.value.length - 1);
    display.value = next;
    if (next === "") {
      isDeleting.value = false;
      idx.value = (idx.value + 1) % phrases.value.length;
      scheduleNext(Math.min(props.typingSpeed * 2, 300));
      return;
    }
  }
  scheduleNext(props.typingSpeed);
}

onMounted(() => {
  if (phrases.value.length) scheduleNext(props.typingSpeed);
});
onBeforeUnmount(clearTimer);
watch(() => [props.text, props.typingSpeed, props.pauseDuration], resetCycle, {
  deep: true,
});

/* ====== Highlight partial sejak karakter pertama ====== */
const escapeHtml = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const highlightRegex = computed(() => {
  if (!props.highlight) return null;
  const escaped = props.highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(escaped, "gi");
});

const renderedHtml = computed(() => {
  const typed = display.value;
  if (!typed) return "";
  if (!highlightRegex.value) return escapeHtml(typed);

  const full = currentFull.value;
  const re = new RegExp(
    highlightRegex.value.source,
    highlightRegex.value.flags
  );
  const typedLen = typed.length;

  // typed adalah prefix dari full → cukup pakai indeks dari full
  const segments = [];
  let cursor = 0;

  for (const m of full.matchAll(re)) {
    const start = m.index ?? 0;
    const end = start + m[0].length;

    // hitung irisan [start,end) dengan [0,typedLen)
    const overlapStart = Math.max(start, 0);
    const overlapEnd = Math.min(end, typedLen);

    if (overlapStart < overlapEnd) {
      if (cursor < overlapStart) {
        segments.push({ t: typed.slice(cursor, overlapStart), h: false });
      }
      segments.push({ t: typed.slice(overlapStart, overlapEnd), h: true });
      cursor = overlapEnd;
    }
    if (cursor >= typedLen) break;
  }

  if (segments.length === 0) return escapeHtml(typed);
  if (cursor < typedLen) segments.push({ t: typed.slice(cursor), h: false });

  return segments
    .map((seg) =>
      seg.h
        ? `<span class="${props.highlightClass}">${escapeHtml(seg.t)}</span>`
        : escapeHtml(seg.t)
    )
    .join("");
});
</script>

<template>
  <span :aria-label="currentFull">
    <!-- pakai v-html agar bagian yang overlap di-wrap span -->
    <span v-if="highlight" v-html="renderedHtml"></span>
    <template v-else>{{ display }}</template>

    <span v-if="showCursor" class="tt-cursor">{{ cursorCharacter }}</span>
  </span>
</template>

<style scoped>
/* cursor */
.tt-cursor {
  animation: ttBlink 1s step-end infinite;
}
@keyframes ttBlink {
  50% {
    opacity: 0;
  }
}

/* animasi warna cycling */
.tt-colorCycle {
  animation: ttColor 3s linear infinite;
}
@keyframes ttColor {
  0% {
    color: #ef4444;
  } /* red-500 */
  25% {
    color: #f59e0b;
  } /* amber-500 */
  50% {
    color: #10b981;
  } /* emerald-500 */
  75% {
    color: #3b82f6;
  } /* blue-500 */
  100% {
    color: #ef4444;
  }
}
</style>

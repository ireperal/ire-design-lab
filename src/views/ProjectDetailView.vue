<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() =>
  projects.find(
    item => item.id === route.params.id,
  ),
)

const selectedImage = ref<string | null>(null)
</script>

<template>
  <div class="mx-auto max-w-7xl px-6">
    <div class="relative mb-16 h-32 overflow-hidden">
      <img
        :src="project?.colors"
        :alt="project?.title"
        class="h-full w-full object-cover"
      >
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
      />
    </div>
  
    <h1 class="mb-4 text-5xl font-bold">
      {{ project?.title }}
    </h1>
  
    <p
      class="mb-16 text-xl text-purple-600"
    >
      {{ project?.tagline }}
    </p>
  
    <section
      v-if="project?.mockups?.length"
      class="mb-16"
    >
      <div
        class="grid gap-6 md:grid-cols-2"
      >
        <div
          v-for="mockup in project.mockups"
          :key="mockup.title"
          class="group flex flex-col items-center overflow-hidden"
        >
          <h3
            class="mb-4 text-center text-lg font-semibold transition-colors duration-300 group-hover:text-purple-500"
          >
            {{ mockup.title }}
          </h3>
          <img
            :src="mockup.image"
            :alt="mockup.title"
            class="w-full scale-95 rounded-3xl border border-slate-200 shadow-lg transition-all duration-300 hover:scale-100 hover:shadow-2xl"
            @click="selectedImage = mockup.image"
          >
    
        </div>
      </div>
    </section>
  
    <!-- Problema -->
  
    <section class="mb-16">
      <h2
        class="mb-4 text-3xl font-bold text-slate-900"
      >
        🎯 El problema
      </h2>
  
      <p
        class="max-w-3xl text-lg leading-relaxed text-slate-600"
      >
        {{ project?.problem }}
      </p>
    </section>
  
    <!-- Solución -->
  
    <section class="mb-16">
      <h2
        class="mb-4 text-3xl font-bold text-slate-900"
      >
        💡 La solución
      </h2>
  
      <p
        class="max-w-3xl text-lg leading-relaxed text-slate-600"
      >
        {{ project?.solution }}
      </p>
    </section>
  
    <!-- Mi rol -->
  
      <section>
        <h2
          class="mb-6 text-3xl font-bold text-slate-900"
        >
          🛠️ Mi rol
        </h2>
    
        <div class="flex flex-wrap gap-3">
          <span
            v-for="item in project?.role"
            :key="item"
            class="rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700"
          >
            {{ item }}
          </span>
        </div>
      </section>
      <Transition name="lightbox">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          @click="selectedImage = null"
        >
          <img
            :src="selectedImage"
            alt=""
            class="max-h-[90vh] max-w-[90vw] rounded-3xl shadow-2xl"
            @click.stop
          >
          <button
            class="absolute right-6 top-6 cursor-pointer rounded-full bg-black/40 p-2 text-2xl text-white transition-all duration-200 hover:scale-110 hover:bg-black/60"
            @click="selectedImage = null"
          >
            ✕
          </button>
        </div>
      </Transition>
  </div>
</template>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
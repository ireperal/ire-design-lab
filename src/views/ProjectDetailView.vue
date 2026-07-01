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
        class="pointer-events-none absolute inset-0"
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
            class="w-full scale-95 rounded-3xl border border-slate-200 transition-all duration-300 hover:scale-100"
            @click="selectedImage = mockup.image"
          >
    
        </div>
      </div>
    </section>
  
    <!-- the problem -->
  
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
  
    <!-- the solution -->
  
    <section class="mb-16">
      <h2
        class="mb-4 text-3xl font-bold text-slate-900"
      >
        💡 La solución
      </h2>

      <p
        class="mb-10 max-w-4xl text-lg leading-relaxed text-slate-600"
      >
        {{ project?.solution }}
      </p>

      <div
        class="grid gap-6 md:grid-cols-3"
      >
        <div
          v-for="feature in project?.features"
          :key="feature.title"
          class="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl"
        >
          <div class="mb-4 text-4xl transition duration-300 group-hover:scale-110">
            {{ feature.icon }}
          </div>

          <h3
            class="mb-3 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-purple-600"
          >
            {{ feature.title }}
          </h3>

          <p
            class="leading-relaxed text-slate-600"
          >
            {{ feature.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- visual design -->

    <section class="mb-16">
      <h2
        class="mb-4 text-3xl font-bold text-slate-900"
      >
        🎨 El diseño
      </h2>

      <p
        class="mb-10 max-w-4xl text-lg leading-relaxed text-slate-600"
      >
        La identidad visual de Mapaw busca transmitir cercanía, confianza y una
        experiencia agradable tanto para las personas como para sus mascotas. Se
        utilizaron colores cálidos combinados con tonos naturales para reforzar la
        sensación de comunidad y exploración.
      </p>

      <img
        :src="project?.colors"
        :alt="`${project?.title} color palette`"
        class="w-full rounded-3xl border border-slate-200 shadow-lg"
      >
    </section>

    <!-- desktop and mobile -->

      <section class="mb-16">
        <h2 class="mb-4 text-3xl font-bold">
          💻 Versión Desktop
        </h2>

        <p
          class="mb-8 max-w-4xl text-lg leading-relaxed text-slate-600"
        >
          La experiencia principal fue diseñada para escritorio, ofreciendo una
          exploración cómoda del mapa, acceso rápido a las reseñas y una navegación
          pensada para planificar rutas de forma visual.
        </p>

        <img
          :src="project?.desktopImage"
          class="rounded-3xl shadow-xl"
        >
      </section>
      <section class="mb-16">
        <h2 class="mb-4 text-3xl font-bold">
          📱 Versión Mobile
        </h2>

        <p
          class="mb-8 max-w-4xl text-lg leading-relaxed text-slate-600"
        >
          La interfaz también fue adaptada a dispositivos móviles manteniendo la
          coherencia visual y priorizando las acciones más frecuentes durante el uso
          en movimiento.
        </p>

        <img
          :src="project?.mobileImage"
          class="rounded-3xl shadow-xl"
        >
      </section>
  
    <!-- Mi rol -->
  
      <section class="mb-16">
        <h2
          class="mb-6 text-3xl font-bold text-slate-900"
        >
          🛠️ Mi rol
        </h2>

        <p
          class="mb-6 max-w-4xl text-lg leading-relaxed text-slate-600"
        >
          Durante este proyecto participé en todas las fases del proceso de diseño, desde la investigación inicial hasta el prototipado final, tomando decisiones centradas en las necesidades de los usuarios y manteniendo la coherencia visual del producto.
        </p>
    
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

    <!-- learnings -->
    <section class="mb-16">
      <h2 class="mb-4 text-3xl font-bold">
        🌱 Lo que aprendí
      </h2>

      <p
        class="mb-8 max-w-4xl text-lg leading-relaxed text-slate-600"
      >
        Mapaw fue el proyecto con el que consolidé mi forma de trabajar en UX/UI. Me permitió profundizar en investigación de usuarios, arquitectura de información y diseño de interfaces para dos plataformas diferentes. Además, reforzó mi interés por crear productos accesibles, visualmente cuidados y centrados en resolver problemas reales.
      </p>

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
            class="max-h-[90vh] max-w-[90vw] rounded-3xl"
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
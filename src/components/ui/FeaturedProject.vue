<script setup lang="ts">
import type { Project } from '../../types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <section
    class="group overflow-hidden rounded-4xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-purple-200"
  >
    <div class="grid gap-10 p-8 lg:grid-cols-2 lg:p-12">
      <div
        class="aspect-video overflow-hidden rounded-3xl bg-slate-100"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        >
      </div>

      <div class="flex flex-col justify-center">
        <span
          class="mb-4 w-fit rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition-colors duration-300 group-hover:bg-purple-200"
        >
          ⭐ Proyecto destacado
        </span>

        <h2
          class="mb-4 text-4xl font-bold text-slate-900 md:text-5xl"
        >
          {{ project.title }}
        </h2>

        <p
          class="mb-4 text-xl font-medium text-purple-600"
        >
          {{ project.tagline }}
        </p>

        <p
          class="mb-8 max-w-xl text-lg leading-relaxed text-slate-600"
        >
          {{ project.description }}
        </p>

        <div class="mb-8 flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
          >
            {{ tag }}
          </span>
        </div>

        <RouterLink
          :to="`/projects/${project.id}`"
          class="w-fit rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
        >
          Descubrir Mapaw →
        </RouterLink>
      </div>
    </div>
  </section>
</template>
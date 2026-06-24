<script setup lang="ts">
import type { Project } from '../../types/project'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-200"
  >
    <div
      class="mb-4 aspect-video overflow-hidden rounded-2xl bg-slate-100"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      >
    </div>

    <div class="mb-3 flex items-center gap-2">
      <span
        v-if="project.featured"
        class="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700"
      >
        ⭐ Destacado
      </span>
    </div>

    <h3 class="mb-2 text-2xl font-bold text-slate-900">
      {{ project.title }}
    </h3>

    <p class="mb-3 font-medium text-purple-600">
      {{ project.tagline }}
    </p>

    <p class="mb-5 text-slate-600">
      {{ project.description }}
    </p>

    <div class="mb-5 flex flex-wrap gap-2">
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
      class="font-medium text-purple-600 transition hover:text-purple-800"
    >
      Ver caso de estudio →
    </RouterLink>
  </article>
</template>
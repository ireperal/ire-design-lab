<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() =>
  projects.find(
    item => item.id === route.params.id,
  ),
)
</script>

<template>
  <section
    v-if="project"
    class="mx-auto max-w-6xl px-6 py-20"
  >
    <h1
      class="mb-4 text-5xl font-bold"
    >
      {{ project.title }}
    </h1>

    <p
      class="mb-8 text-xl text-purple-600"
    >
      {{ project.tagline }}
    </p>

    <img
      :src="project.image"
      :alt="project.title"
      class="mb-8 w-full rounded-3xl"
    >

    <p
      class="max-w-3xl text-lg text-slate-600"
    >
      {{ project.description }}
    </p>
  </section>

  <section
    v-else
    class="mx-auto max-w-4xl px-6 py-20"
  >
    <h1 class="text-4xl font-bold">
      Proyecto no encontrado
    </h1>
  </section>
</template>
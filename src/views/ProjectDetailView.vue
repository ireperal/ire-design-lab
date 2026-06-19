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
<h1>
  {{ project?.title }}
</h1>

<p
  class="mb-8 text-xl text-purple-600"
>
  {{ project?.tagline }}
</p>

<img
  :src="project?.image"
  :alt="project?.title"
  class="mb-8 w-full rounded-3xl"
>

<p
  class="mb-16 max-w-3xl text-lg text-slate-600"
>
  {{ project?.description }}
</p>

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
</template>
<script setup lang="ts">
import ProjectCard from '../components/ui/ProjectCard.vue'
import FeaturedProject from '../components/ui/FeaturedProject.vue'
import AboutPreview from '../components/ui/AboutPreview.vue'

import { projects } from '../data/projects'

const featuredProject = projects.find(
  project => project.featured,
)

const otherProjects = projects.filter(
  project => !project.featured,
)
</script>

<template>
  <section
    class="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6"
  >
    <!-- Hero -->
    <div class="mb-24 max-w-3xl">
      <p class="mb-4 text-lg text-purple-600">
        👋 Hola, soy Irene
      </p>

      <h1
        class="mb-6 text-5xl font-bold leading-tight text-slate-900 md:text-7xl"
      >
        UX/UI Designer
        <br>
        & Frontend Developer
      </h1>

      <p class="mb-6 text-2xl font-semibold text-slate-700">
        ✨ Del wireframe al componente.
      </p>

      <p class="mb-6 text-lg text-slate-600">
        Diseño experiencias accesibles y construyo interfaces modernas.
      </p>

      <p class="text-lg font-medium text-purple-600">
        💜 Entre Figma y Vue.
      </p>
    </div>

    <section class="mb-24">
      <FeaturedProject
        v-if="featuredProject"
        :project="featuredProject"
      />
    </section>

    <!-- Projects -->
    <section>
  <h2
    class="mb-8 text-3xl font-bold text-slate-900"
  >
    Otros proyectos
  </h2>

  <div
    class="grid gap-8 md:grid-cols-2"
  >
    <ProjectCard
      v-for="project in otherProjects"
      :key="project.id"
      :project="project"
    />
  </div>
<section class="mt-24 mb-32">
  <AboutPreview />
</section>
</section>
  </section>
</template>
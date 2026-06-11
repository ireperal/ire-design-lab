<script setup lang="ts">
</script>

<template>
  <section
    class="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6"
  >
    <div class="max-w-3xl">
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

      <p
        class="mb-6 text-2xl font-semibold text-slate-700 md:text-3xl"
      >
        ✨ Del wireframe al componente.
      </p>

      <p
        class="mb-10 max-w-2xl text-lg leading-relaxed text-slate-600"
      >
        Diseño experiencias accesibles y construyo interfaces modernas
        utilizando Vue3, TypeScript y principios centrados en el usuario.
      </p>

      <p class="mb-10 text-lg font-medium text-purple-600">
        💜 Entre Figma y Vue.
      </p>

      <div class="flex gap-4">
        <RouterLink
          to="/projects"
          class="rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:scale-105"
        >
          Ver proyectos
        </RouterLink>

        <RouterLink
          to="/about"
          class="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:border-purple-600 hover:text-purple-600"
        >
          Sobre mí
        </RouterLink>
      </div>
    </div>
  </section>
</template>
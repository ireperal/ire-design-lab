<script setup lang="ts">
</script>

<template>
  <section
    class="rounded-4xl border border-slate-200 bg-white p-8 lg:p-12"
  >
    <div class="max-w-3xl">
      <p class="mb-4 text-lg text-purple-600">
        👋 Sobre mí
      </p>

      <h2
        class="mb-6 text-4xl font-bold text-slate-900"
      >
        Del wireframe al componente.
      </h2>

      <p
        class="mb-6 text-lg leading-relaxed text-slate-600"
      >
        Soy Irene, UX/UI Designer y Frontend Developer.
        Me gusta diseñar experiencias accesibles y
        convertirlas en interfaces reales utilizando
        Vue y tecnologías frontend modernas.
      </p>

      <p
        class="mb-8 text-lg leading-relaxed text-slate-600"
      >
        Mi formación en Conservación y Restauración,
        junto con mi experiencia en diseño UX y desarrollo,
        me permite comprender los productos digitales
        desde la investigación hasta la implementación.
      </p>

      <RouterLink
        to="/about"
        class="inline-flex rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:scale-105"
      >
        Más sobre mí →
      </RouterLink>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>

<template>
  <header
    class="sticky top-0 border-b border-gray-200 bg-white/80 backdrop-blur"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
    >
      <RouterLink
        to="/"
        class="text-xl font-bold text-purple-600"
      >
        Ire Design Lab
      </RouterLink>

      <div class="flex gap-6">
        <RouterLink to="/">
          Home
        </RouterLink>

        <RouterLink to="/projects">
          Projects
        </RouterLink>

        <RouterLink to="/about">
          About
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
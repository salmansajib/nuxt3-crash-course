<template>
  <div>
    <header class="shadow-sm bg-slate-50">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products">Nuxt3 Crash Merch</NuxtLink>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer
      class="container mx-auto p-4 flex items-center justify-between border-t-2"
    >
      <ul class="flex items-center gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>

<template>
  <div>
    <header class="shadow-sm bg-slate-50 text-slate-900">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <NuxtLink to="/" class="logo font-semibold text-xl">
          Nuxt3 Crash
        </NuxtLink>
        <ul class="flex gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="btn">Products</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
:not(.logo).router-link-exact-active {
  color: #12b488;
}
</style>

<template>
  <div>
    <header class="shadow-sm bg-slate-50">
      <nav class="container mx-auto p-4 flex items-center justify-between">
        <NuxtLink to="/products" class="font-semibold">Nuxt3 Merch</NuxtLink>
        <ul class="flex items-center gap-4">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

    <footer class="container mx-auto p-4 border-t-2">
      <p class="flex items-center gap-1">
        <span class="">&copy;</span> All Rights Reserved
      </p>
    </footer>
  </div>
</template>

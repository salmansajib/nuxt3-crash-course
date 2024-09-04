<script setup>
definePageMeta({
  layout: "products",
});

// fetch the products
const {
  data: products,
  status,
  error,
} = await useFetch("https://fakestoreapi.com/products");

// Log the fetched data
console.log("Products:", products.value);
console.log("Status:", status.value);
console.log("Error:", error.value);

useHead({
  title: "Nuxt3 | Merch",
  meta: [{ name: "description", content: "Nuxt3 Merch" }],
});
</script>

<template>
  <div>
    <div
      class="w-full mx-auto max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<template>
  <div class="card">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7" />
      </div>
      <div class="py-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex items-center">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span class="text-lg">Add To Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

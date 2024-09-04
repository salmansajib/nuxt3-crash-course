<script setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="card mt-7 max-w-sm mx-auto text-center">
    <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
    <p class="mt-7 text-6xl">Ooops!</p>
    <p class="mt-7">{{ error.message }}</p>
    <button @click="handleClearError" class="btn mt-7">Back To Home</button>
  </div>
</template>

<style scoped></style>

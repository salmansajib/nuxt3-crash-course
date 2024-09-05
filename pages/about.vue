<script setup>
const { data } = await useFetch("/api/currency/GBP");
console.log(data.value);
</script>

<template>
  <div>
    <h2 class="text-3xl mb-5">About</h2>
    <p class="my-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae
      distinctio fugiat doloremque minima accusantium veritatis totam et
      architecto facere.
    </p>
    <p class="my-5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae
      distinctio fugiat doloremque minima accusantium veritatis totam et
      architecto facere.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>

<template>
  <div>
    <p>Products details for {{ id }}</p>
  </div>
</template>

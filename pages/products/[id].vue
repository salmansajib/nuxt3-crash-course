<script setup>
const { id } = useRoute().params;
</script>

<template>
  <div>
    <p>Products details for {{ id }}</p>
  </div>
</template>

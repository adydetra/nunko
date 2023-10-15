<script setup lang="ts">
definePageMeta({
  middleware: ["hanko-logged-in"],
});
</script>

<template>
  <NuxtLayout>
    <div class="space-y-4">
      <hanko-profile />
      <Logout />
    </div>
  </NuxtLayout>
</template>

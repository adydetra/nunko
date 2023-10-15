<template>
  <button @click="logout" class="bg-red-400 px-4 py-2 text-white rounded-md">Logout</button>
</template>

<script setup lang="ts">
const hanko = useHanko();
function logout() {
  hanko!.user.logout();
  navigateTo("/");
}
</script>

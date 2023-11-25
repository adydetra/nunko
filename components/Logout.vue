<script lang="ts" setup>
const hanko = useHanko();
function logout() {
  hanko!.user.logout();
  navigateTo("/");
}
</script>

<template>
  <button @click="logout" class="bg-red-400 px-4 py-2 text-white rounded-md">Logout</button>
</template>

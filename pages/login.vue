<script lang="ts" setup>
const layout = "col-span-2 flex items-center justify-center";
function afterLogin() {
  navigateTo("/profile");
}
</script>

<template>
  <section class="grid grid-cols-4 min-h-screen">
    <div :class="layout">
      <img
        class="h-full"
        src="https://images.unsplash.com/photo-1561840883-de5b0806a2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
    </div>
    <div :class="layout"><hanko-auth @onAuthFlowCompleted="afterLogin()" /></div>
  </section>
</template>

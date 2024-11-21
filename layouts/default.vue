<template>
<div>
    <Navbar />
    <transition name="fade" mode="out-in">
      <NuxtPage class="flex-grow" @page:start="loading = true" @page:finish="loading = false"/>
    </transition>
    <Footer />

     <!-- Loading Indicator -->
     <div v-if="loading" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div class="loader"></div>
    </div>

</div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
</script>

<style>
/* Example CSS for the loader */
.loader {
  width: 3rem;
  height: 3rem;
  border: 4px solid transparent;
  border-top-color: #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
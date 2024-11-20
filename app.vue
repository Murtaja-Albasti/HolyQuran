<template>
  <NuxtLayout>
    <transition name="fade" mode="out-in">
        <NuxtPage />
      </transition>
  </NuxtLayout>
</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Cairo+Play:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400..700&display=swap');

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
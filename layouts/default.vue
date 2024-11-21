<template>
<div>
    <Navbar />
    <transition name="fade" mode="out-in">
      <NuxtPage class="flex-grow" />
    </transition>
    <Footer />
</div>
</template>

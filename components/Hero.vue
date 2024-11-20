<template>
<div>
    <div class="hero h-screen" style="background-image: url(/img/QuranBG.jpg);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-neutral-content text-center">
            <div class="max-w-md">
                <h1 class="mb-5 text-xl font-normal text-end"><span class="text-gold glow">رسول الله (صلى الله عليه وآله)</span>: إن أردتم عيش السعداء وموت الشهداء والنجاة يوم الحسرة والظل يوم الحرور والهدى يوم الضلالة فادرسوا القرآن، فإنه كلام الرحمن وحرز من الشيطان ورجحان في الميزان .</h1>
                <p class="mb-5">
                    developed by <span class="text-primary">Murtaja</span>
                </p>
                <NuxtLink :href="`#api`"> <button v-on:click="" class="btn btn-primary">Get Started</button></NuxtLink>
            </div>
        </div>
    </div>
</div>
</template>

<style>
html {
    scroll-behavior: smooth;
}
</style>

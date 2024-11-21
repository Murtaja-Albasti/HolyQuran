<template>
<div class="h-full mt-5">
    <h1 class="text-4xl text-center mb-6">{{ surah?.name }}</h1>
    <p class="text-center mb-6">{{ surah?.englishNameTranslation }}</p>
    <div class="flex flex-wrap flex-row-reverse gap-4 justify-center">
        <div v-for="ayah in surah?.ayahs" :key="ayah.number" class="flex items-center space-x-2 border border-gray-200 p-2 rounded-md shadow-sm">

            <span class="text-sm text-gray-500">({{ ayah.numberInSurah }})</span>
            <p class="md:text-3xl text-xl text-right noto-naskh-arabic-othmanni">{{ ayah.text }}</p>
        </div>
    </div>
</div>
</template>

  
<script setup>
import {
    ref,
    onMounted
} from 'vue'
import {
    useRoute
} from 'vue-router'

// definePageMeta({
//   layout: 'Surahlayout', // Use the surah-specific layout
// })

const route = useRoute()
const surah = ref(null)

onMounted(async () => {
    try {
        // Fetch the entire Quran data
        const response = await $fetch('/api/surahs')

        // Extract Surah by ID
        const surahId = parseInt(route.params.id)
        surah.value = response.data.surahs.find((s) => s.number === surahId)
    } catch (error) {
        console.error('Error fetching surah data:', error)
    }
})
</script>


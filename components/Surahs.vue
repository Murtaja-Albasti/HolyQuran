<template>
<div id="api" style="animation-delay: 50ms; transition-delay: 50ms;" class="mt-10 grid grid-rows-1 justify-center">
    <div class=" flex flex-row-reverse md:flex-col md:justify-center justify-between items-center mx-7 ">
        <h1 class="text-4xl cairo-play-quran mb-6">السور</h1>
        <input type="text" v-model="searchQuery" placeholder="إبحث عن سورة" class="input input-bordered w-1/2 max-w-xs" />
    </div>
    <div class=" mt-36">
        <div class="grid justify-center md:grid-cols-5 grid-cols-2 w-screen gap-3">
            <!-- cards -->
            <NuxtLink v-for="surah in filteredSurahs" :key="surah.number" :to="`/surah/${surah.number}`" class="card glass hover:shadow-lg shadow-none transition-shadow duration-300  hover:shadow-indigo-900">
                <div class="card-body flex flex-row-reverse justify-between items-center">
                    <h3 class="card-title">{{ surah.number }}</h3>
                    <h2 class="card-title">{{ surah.name }}</h2>
                </div>
            </NuxtLink>
        </div>
    </div>
</div>
</template>
<script setup>
import { ref, onMounted , computed} from 'vue'

const quran = ref([])
const searchQuery = ref('')

// Fetch data on component mount
onMounted(async () => {
  try {
    const data = await $fetch('http://api.alquran.cloud/v1/surah')
    quran.value = data.data
    console.log(quran.value)
  } catch (error) {
    console.error('Error fetching:', error)
  }
})

const normalizeArabic = (text) => {
  return text
    .replace(/[\u064B-\u065F]/g, '') // Remove diacritics (Tashkeel)
    .replace(/ٱ/g, 'ا') // Normalize "ٱ" to "ا"
}

// Compute filtered Surahs based on search query
const filteredSurahs = computed(() => {
  if (!searchQuery.value.trim()) {
    return quran.value
  }

  const query = normalizeArabic(searchQuery.value).toLowerCase()

  return quran.value.filter((surah) => {
    const arabicName = normalizeArabic(surah.name).toLowerCase()
    const englishName = surah.englishName.toLowerCase()

    return arabicName.includes(query) || englishName.includes(query)
  })
})
</script>

<style>

.noto-naskh-arabic-othmanni {
  font-family: "Noto Naskh Arabic", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

</style>
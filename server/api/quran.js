export default defineEventHandler(async (event) => {
    const response = await $fetch('http://api.alquran.cloud/v1/surah')
    return response
  })
  
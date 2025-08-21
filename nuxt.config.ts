// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  //devtools: { enabled: true },
  ssr: true,
  css:[
    '~/assets/css/general.css'
  ],
  modules:[
    '@nuxtjs/supabase'
  ],
  supabase: { redirect:false, },
  
})

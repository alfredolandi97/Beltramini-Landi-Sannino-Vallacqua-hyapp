// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:true,
    modules:["@nuxtjs/supabase"],
    css: [
        '~/assets/css/general.css'
    ],
    supabase: {
        redirect:false,
    }
})

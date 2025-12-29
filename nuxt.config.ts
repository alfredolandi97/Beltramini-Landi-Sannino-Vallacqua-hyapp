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
  /*app: {
    head:{
      title:"My title page",
      charset: "utf-8",
      meta:[
        {
          name:"description",
          content:"this is the description of the web page"
        },
        {
          name:"keyword",
          content:"key1, key2"
        }

        //Other metadata
      ],
      script: [
        {src:''}
      ],
      link: [
        {rel: 'stylesheet', href:''}
      ]
    }
  }*/
})

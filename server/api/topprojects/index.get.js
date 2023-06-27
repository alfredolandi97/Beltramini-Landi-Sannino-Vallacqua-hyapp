import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('projects').select("id, title, area_id, info").eq('isTop', true)
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    for (let topproject of data){
        const logo = client.storage.from('next_fund').getPublicUrl(`projects/logos/${topproject.id}.png`)
        topproject.logo = logo.data.publicUrl
    }

    return data
})
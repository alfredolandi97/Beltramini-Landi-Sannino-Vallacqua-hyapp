import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('news').select("id, title, caption, date").order("date",{ascending:false})
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    for(let update of data){
        const image = await client.storage.from('next_fund').getPublicUrl(`news/${update.id}.png`)
        update.image = image.data.publicUrl
    }
    return data
})
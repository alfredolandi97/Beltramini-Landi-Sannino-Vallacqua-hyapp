import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('areas').select("name, info, description").eq('id', id).limit(1).single()
    const image = await client.storage.from('next_fund').getPublicUrl(`areas/${id}.png`)
    data.image = image.data.publicUrl
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})
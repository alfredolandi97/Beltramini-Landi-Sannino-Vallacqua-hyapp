import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('projects').select("title, info, description, link, persons(id, name), areas(id, name)").eq('id', id).limit(1).single()
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    const image = await client.storage.from('next_fund').getPublicUrl(`projects/${id}.png`)
    data.image = image.data.publicUrl

    return data
})

import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.name
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('areas').select("name, info, description, image").eq('name', name).limit(1).single()
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})
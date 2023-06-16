import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('persons').select("id, name, image, role, bio, email, number, caption")
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})

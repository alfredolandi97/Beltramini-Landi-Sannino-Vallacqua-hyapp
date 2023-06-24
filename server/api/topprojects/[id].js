import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('projects').select("title, info, description, link, image").eq('id', id).limit(1).single()
    //DA PERFEZIONARE
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})

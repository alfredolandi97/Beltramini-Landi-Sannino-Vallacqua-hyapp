import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('persons').select("name, image, role, bio, email, number").eq('id', id).limit(1).single()
    //AGGIUNGERE ANCHE I PROGETTI DI CUI E' IL SUPERVISORE
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    return data
})

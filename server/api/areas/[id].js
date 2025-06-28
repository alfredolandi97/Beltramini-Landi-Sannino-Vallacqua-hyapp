import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = await serverSupabaseClient(event)
    const { data, error }= await client.from('areas').select("name, info, description, projects(id)").eq('id', id).limit(1).single()

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    const image = await client.storage.from('next_fund').getPublicUrl(`areas/${id}.png`)
    data.image = image.data.publicUrl
    for(let project of data.projects){
        const logo = await client.storage.from('next_fund').getPublicUrl(`projects/logos/${project.id}.png`)
        project.logo = logo.data.publicUrl
    }

    return data
})
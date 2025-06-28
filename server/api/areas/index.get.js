import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('areas').select("id, name, info, description, projects(id)")
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    for (let area of data){
        const icon = await client.storage.from('next_fund').getPublicUrl(`areas/icons/${area.id}.png`)
        area.icon = icon.data.publicUrl
        for(let project of area.projects){
            const logo = await client.storage.from('next_fund').getPublicUrl(`projects/logos/${project.id}.png`)
            project.logo = logo.data.publicUrl
        }
    }

    

    return data
})
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('persons').select("name, role, bio, email, number, caption, projects(id)").eq('id', id).limit(1).single()
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    const roles = {
        1:"Co-founder & Managing Partner",
        2:"Investment Manager",
        3:"Investment Associate",
        4:"Partner",
        5:"CFO",
        6:"Deputy CFO",
        7:"Office Manager"
    }
    data.role=roles[data.role]

    const image = client.storage.from('next_fund').getPublicUrl(`persons/${id}.png`)
    data.image = image.data.publicUrl

    for(let project of data.projects){
        const logo = client.storage.from('next_fund').getPublicUrl(`projects/logos/${project.id}.png`)
        project.logo = logo.data.publicUrl
    }

    return data
})

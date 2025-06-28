import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('persons').select("id, name, role").order("role", {ascending:true})
    
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
    for(let person of data){
        person.role=roles[person.role]
    }
    
    for (let person of data){
        const image = await client.storage.from('next_fund').getPublicUrl(`persons/${person.id}.png`)
        person.image = image.data.publicUrl
    }
    return data
})

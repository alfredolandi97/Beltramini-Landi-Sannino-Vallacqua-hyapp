import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('persons').select("id, name, role, bio, email, number").order("role", {ascending:true})
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
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    return data
})

import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('news').select("title, caption, text, date").eq('id', id).limit(1).single()
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    const monthNames = ["January", "February", "March", "April",
                        "May", "June", "July", "August",
                        "September", "October", "November", "December"];

    let date = new Date(data.date)
    let day = date.getDate();
    let month = monthNames[date.getMonth()]
    let year = date.getFullYear(date);
    data.date = `${day} ${month} ${year}`

    const image = await client.storage.from('next_fund').getPublicUrl(`news/${id}.png`)
    data.image = image.data.publicUrl

    return data
})
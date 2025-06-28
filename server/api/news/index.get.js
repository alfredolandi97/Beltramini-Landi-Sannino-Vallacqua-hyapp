import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)

    const { data, error }= await client.from('news').select("id, title, caption, date").order("date",{ascending:false})
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }

    const monthNames = ["January", "February", "March", "April",
                        "May", "June", "July", "August",
                        "September", "October", "November", "December"];

    for(let update of data){
        let date = new Date(update.date)
        let day = date.getDate();
        let month = monthNames[date.getMonth()]
        let year = date.getFullYear(date);
        update.date = `${day} ${month} ${year}`

        const image = await client.storage.from('next_fund').getPublicUrl(`news/${update.id}.png`)
        update.image = image.data.publicUrl
    }
    return data
})
export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const body = await readBody(event);

    if (body) {
        res.sendStatus(200)
    }
    else {
        res.sendStatus(404)
    }
})

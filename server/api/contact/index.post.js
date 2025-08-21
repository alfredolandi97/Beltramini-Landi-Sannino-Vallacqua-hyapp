export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    
    if (body) {
        //console.log(body);
        setResponseStatus(event, 200);
        return { status: 'OK' }; // optional JSON response
    } else {
        throw createError({statusCode: 400, statusMessage: 'Bad request'});
    }
})
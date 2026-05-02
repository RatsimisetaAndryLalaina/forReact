export default  async function newsLetterAction({request, params}: {request: Request, params: unknown}) {
    console.log('newsLetterAction called');
    const data = await request.formData();

    const response = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
    };

    return {data: 44};
}
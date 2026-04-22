export default  async function contactAction({request, params}: {request: Request, params: unknown}) {
    const data = await request.formData();

    const response = {
        name: data.get('name'),
        email: data.get('email'),
        message: data.get('message')
    };

    console.log('response from contact action', response);
    console.log('params from contact action', params);
}
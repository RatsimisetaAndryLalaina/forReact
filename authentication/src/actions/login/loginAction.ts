async function loginAction({request, response}: {request: Request, response: Response}) {
  
  const formData = await request.formData();
  console.log(Object.fromEntries(formData));
}

export default loginAction;
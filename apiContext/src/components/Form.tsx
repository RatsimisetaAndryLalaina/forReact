import { useActionState } from 'react';

type State = {
  message: string;
}

const formAction = (prevState: State, formData: FormData) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const gender = formData.get('gender');
  console.log({ firstName, lastName, gender });
  return { message: "User created" };
}

const Form: React.FC = () => {
  const [state, action] = useActionState(formAction, { message: "" });

  return (
    <form action={action} className="p-4 border rounded-lg shadow-md">
       {state.message && <p>{state.message}</p>}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <div className="mb-4">
        <span className="block text-sm font-medium text-gray-700">Gender:</span>
        <div className="mt-1 flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="male"
              required
            />
            <span className="ml-2 text-gray-700">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="female"
              required
            />
            <span className="ml-2 text-gray-700">Female</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="gender"
              value="other"
            />
            <span className="ml-2 text-gray-700">Other</span>
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

import React from 'react';
import { Form } from 'react-router';

const Login: React.FC = () => {

  return (
    <Form method="post">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          id="email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          required
        />
      </div>
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default Login;
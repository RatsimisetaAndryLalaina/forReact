import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard";
import App from "../App";
import Login from "../pages/login";
import loginAction from "../actions/login/loginAction";

const route = createBrowserRouter([
  {
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction
  }
]);

export default route;
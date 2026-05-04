import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/dashboard";
import App from "../App";

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
]);

export default route;
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
function ParentComponent() {
  return (
    <div>
      <NavBar />
        <Outlet />
    </div>
  );
};

export default ParentComponent;
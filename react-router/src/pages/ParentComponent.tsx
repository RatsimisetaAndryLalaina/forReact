import { Outlet } from "react-router-dom";
function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
        <Outlet />
    </div>
  );
};

export default ParentComponent;
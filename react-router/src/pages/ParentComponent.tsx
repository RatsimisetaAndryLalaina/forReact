import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "./NavBar";


function ParentComponent() {
  const {state}: {state:string} = useNavigation();
  //state can be "idle", "loading", "submitting"
  console.log(state);
  
  return (
    <div>
      <NavBar />
      {state === "loading" && <p>Loading...</p>}
        <Outlet />
    </div>
  );
};

export default ParentComponent;
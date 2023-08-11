import Header from "./header";
import { Outlet } from "react-router";

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;

import Navbar from "../components/nav";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Applayout;
